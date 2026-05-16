let byId = new Map(BUS_STOPS.map((stop) => [String(stop.id), stop]));
const ROUTE_DB_NAME = "shimabus-link";
const ROUTE_STORE_NAME = "saved-routes";
const LAST_ROUTE_KEY = "last-route";
const ROUTE_HISTORY_KEY = "route-history";
const MAX_SAVED_ROUTES = 5;
let savedRoutes = [];
let lastSavedRouteKey = "";
const elements = {
  fromInput: document.querySelector("#fromInput"),
  toInput: document.querySelector("#toInput"),
  fromList: document.querySelector("#fromList"),
  toList: document.querySelector("#toList"),
  fromStop: document.querySelector("#fromStop"),
  toStop: document.querySelector("#toStop"),
  routeName: document.querySelector("#routeName"),
  routeUrl: document.querySelector("#routeUrl"),
  savedRouteStatus: document.querySelector("#savedRouteStatus"),
  savedRoutesList: document.querySelector("#savedRoutesList"),
  openRoute: document.querySelector("#openRoute"),
  externalRoute: document.querySelector("#externalRoute"),
  swapStops: document.querySelector("#swapStops"),
  timetableFrame: document.querySelector("#timetableFrame"),
  viewerPlaceholder: document.querySelector("#viewerPlaceholder"),
  viewerToolbar: document.querySelector("#viewerToolbar"),
  viewerUrl: document.querySelector("#viewerUrl"),
  viewerExternal: document.querySelector("#viewerExternal"),
  stopCount: document.querySelector("#stopCount")
};

function routeUrl(fromId, toId) {
  return `https://shimabus.busplus.jp/main/${fromId}-${toId}`;
}

function normalize(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, "");
}

function openRouteDb() {
  if (!("indexedDB" in window)) return Promise.reject(new Error("IndexedDB is not available"));

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(ROUTE_DB_NAME, 1);
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(ROUTE_STORE_NAME)) {
        db.createObjectStore(ROUTE_STORE_NAME, { keyPath: "id" });
      }
    });
    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function readStoredRouteData() {
  const db = await openRouteDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ROUTE_STORE_NAME, "readonly");
    const store = transaction.objectStore(ROUTE_STORE_NAME);
    const historyRequest = store.get(ROUTE_HISTORY_KEY);
    const lastRequest = store.get(LAST_ROUTE_KEY);
    const result = { history: null, lastRoute: null };
    historyRequest.addEventListener("success", () => {
      result.history = historyRequest.result || null;
    });
    lastRequest.addEventListener("success", () => {
      result.lastRoute = lastRequest.result || null;
    });
    historyRequest.addEventListener("error", () => reject(historyRequest.error));
    lastRequest.addEventListener("error", () => reject(lastRequest.error));
    transaction.addEventListener("complete", () => {
      db.close();
      resolve(result);
    });
    transaction.addEventListener("abort", () => {
      db.close();
      reject(transaction.error);
    });
  });
}

async function writeRouteHistory(routes) {
  const db = await openRouteDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ROUTE_STORE_NAME, "readwrite");
    transaction.objectStore(ROUTE_STORE_NAME).put({
      id: ROUTE_HISTORY_KEY,
      routes
    });
    transaction.addEventListener("complete", () => {
      db.close();
      resolve();
    });
    transaction.addEventListener("abort", () => {
      db.close();
      reject(transaction.error);
    });
    transaction.addEventListener("error", () => {
      reject(transaction.error);
    });
  });
}

function setSavedRouteStatus(text) {
  elements.savedRouteStatus.textContent = text;
}

function routeFromRecord(record) {
  const from = byId.get(String(record.fromId));
  const to = byId.get(String(record.toId));
  if (!from || !to || from.id === to.id) return null;
  return { from, to, key: `${from.id}-${to.id}` };
}

function renderSavedRoutes() {
  elements.savedRoutesList.textContent = "";
  const routes = savedRoutes.map(routeFromRecord).filter(Boolean);
  if (!routes.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "保存された経路はまだありません。";
    elements.savedRoutesList.append(empty);
    return;
  }

  routes.forEach((route) => {
    const item = document.createElement("div");
    item.className = "saved-route-item";
    item.innerHTML = `
      <div class="saved-route-main">
        <strong>${escapeAttribute(route.from.name)} → ${escapeAttribute(route.to.name)}</strong>
      </div>
      <div class="saved-route-actions">
        <button class="ghost-button" type="button" data-action="use">使う</button>
        <button class="danger-icon" type="button" data-action="delete" title="履歴から削除">×</button>
      </div>
    `;
    item.querySelector('[data-action="use"]').addEventListener("click", () => {
      applyRoute(route.from, route.to);
    });
    item.querySelector('[data-action="delete"]').addEventListener("click", () => {
      deleteSavedRoute(route.key);
    });
    elements.savedRoutesList.append(item);
  });
}

function showSavedRoutesStatus() {
  if (!savedRoutes.length) {
    setSavedRouteStatus("まだ保存された経路はありません。");
    return;
  }
  const first = routeFromRecord(savedRoutes[0]);
  if (!first) {
    setSavedRouteStatus(`${savedRoutes.length}件の経路履歴を保存しています。`);
    return;
  }
  setSavedRouteStatus(`最近の経路: ${first.from.name} → ${first.to.name}（${savedRoutes.length}/5件）`);
}

async function saveSelectedRoute(route) {
  if (!route || route.key === lastSavedRouteKey) return;
  lastSavedRouteKey = route.key;
  const nextRoute = {
    key: route.key,
    fromId: String(route.from.id),
    toId: String(route.to.id)
  };
  savedRoutes = [nextRoute, ...savedRoutes.filter((saved) => saved.key !== route.key)].slice(0, MAX_SAVED_ROUTES);
  renderSavedRoutes();
  showSavedRoutesStatus();
  try {
    await writeRouteHistory(savedRoutes);
  } catch {
    setSavedRouteStatus("このブラウザでは経路履歴を保存できませんでした。");
  }
}

async function deleteSavedRoute(routeKey) {
  savedRoutes = savedRoutes.filter((route) => route.key !== routeKey);
  if (lastSavedRouteKey === routeKey) lastSavedRouteKey = "";
  renderSavedRoutes();
  showSavedRoutesStatus();
  try {
    await writeRouteHistory(savedRoutes);
  } catch {
    setSavedRouteStatus("経路履歴を削除できませんでした。");
  }
}

function applyRoute(from, to, options = {}) {
  selectStop("from", from, { save: false });
  selectStop("to", to, { save: options.save !== false });
}

async function restoreSavedRoutes() {
  try {
    const stored = await readStoredRouteData();
    const history = Array.isArray(stored.history?.routes) ? stored.history.routes : [];
    const migratedLastRoute = stored.lastRoute
      ? [{ ...stored.lastRoute, key: `${stored.lastRoute.fromId}-${stored.lastRoute.toId}` }]
      : [];
    savedRoutes = [...history, ...migratedLastRoute]
      .filter((route) => route?.fromId && route?.toId)
      .filter((route, index, routes) => routes.findIndex((item) => item.key === route.key) === index)
      .slice(0, MAX_SAVED_ROUTES);
    renderSavedRoutes();
    showSavedRoutesStatus();

    const latest = routeFromRecord(savedRoutes[0] || {});
    if (latest) {
      lastSavedRouteKey = latest.key;
      applyRoute(latest.from, latest.to, { save: false });
    }
    if (migratedLastRoute.length && !history.length) await writeRouteHistory(savedRoutes);
  } catch {
    renderSavedRoutes();
    setSavedRouteStatus("経路履歴を読み込めませんでした。");
  }
}

function rebuildStopIndex() {
  byId = new Map(BUS_STOPS.map((stop) => [String(stop.id), stop]));
  elements.stopCount.textContent = BUS_STOPS.length;
}

function stopLabel(stop) {
  return `${stop.name}　ID:${stop.id}`;
}

function renderComboList(kind, query = "") {
  const list = kind === "from" ? elements.fromList : elements.toList;
  const needle = normalize(query);
  const matches = BUS_STOPS.filter((stop) => {
    if (!needle) return true;
    return normalize(`${stop.id}${stop.name}`).includes(needle);
  }).slice(0, 12);

  list.textContent = "";
  matches.forEach((stop) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "combo-option";
    button.setAttribute("role", "option");
    button.dataset.id = stop.id;
    button.innerHTML = `<span>${stop.name}</span><small>ID:${stop.id}</small>`;
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      selectStop(kind, stop);
    });
    list.append(button);
  });

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "combo-empty";
    empty.textContent = "該当するバス停がありません";
    list.append(empty);
  }
}

function openCombo(kind) {
  const input = kind === "from" ? elements.fromInput : elements.toInput;
  const list = kind === "from" ? elements.fromList : elements.toList;
  renderComboList(kind, input.value);
  list.classList.add("is-open");
  input.setAttribute("aria-expanded", "true");
}

function closeCombo(kind) {
  const input = kind === "from" ? elements.fromInput : elements.toInput;
  const list = kind === "from" ? elements.fromList : elements.toList;
  list.classList.remove("is-open");
  input.setAttribute("aria-expanded", "false");
}

function selectStop(kind, stop, options = {}) {
  const input = kind === "from" ? elements.fromInput : elements.toInput;
  const hidden = kind === "from" ? elements.fromStop : elements.toStop;
  input.value = stopLabel(stop);
  hidden.value = stop.id;
  closeCombo(kind);
  updatePreview(options);
}

function selectedRoute() {
  const from = byId.get(elements.fromStop.value);
  const to = byId.get(elements.toStop.value);
  if (!from || !to || from.id === to.id) return null;
  return { from, to, key: `${from.id}-${to.id}`, source: "manual" };
}

function updatePreview(options = {}) {
  const route = selectedRoute();
  if (!route) {
    elements.routeName.textContent = "出発と到着を選択してください";
    elements.routeUrl.textContent = "https://shimabus.busplus.jp/main/出発id-到着id";
    elements.openRoute.disabled = true;
    elements.externalRoute.href = "#";
    elements.externalRoute.classList.add("disabled-link");
    elements.externalRoute.setAttribute("aria-disabled", "true");
    return;
  }

  elements.routeName.textContent = `${route.from.name} → ${route.to.name}`;
  const url = routeUrl(route.from.id, route.to.id);
  elements.routeUrl.textContent = url;
  elements.openRoute.disabled = false;
  elements.externalRoute.href = url;
  elements.externalRoute.classList.remove("disabled-link");
  elements.externalRoute.setAttribute("aria-disabled", "false");
  if (options.save !== false) saveSelectedRoute(route);
}

function openRouteInsideApp() {
  const route = selectedRoute();
  if (!route) return;
  const url = routeUrl(route.from.id, route.to.id);
  elements.viewerPlaceholder.classList.add("is-hidden");
  elements.viewerToolbar.hidden = false;
  elements.viewerUrl.textContent = url;
  elements.viewerExternal.href = url;
  elements.timetableFrame.src = url;
  elements.timetableFrame.classList.add("is-active");
  document.querySelector(".timetable-viewer").scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeAttribute(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function afterStopsChanged() {
  BUS_STOPS = BUS_STOPS
    .filter((stop) => String(stop.id).trim() && stop.name.trim())
    .sort((a, b) => Number(a.id) - Number(b.id));
  rebuildStopIndex();
  validateSelectedStop("from");
  validateSelectedStop("to");
  renderSavedRoutes();
  showSavedRoutesStatus();
  updatePreview();
}

function validateSelectedStop(kind) {
  const hidden = kind === "from" ? elements.fromStop : elements.toStop;
  const input = kind === "from" ? elements.fromInput : elements.toInput;
  const stop = byId.get(hidden.value);
  if (!stop) {
    hidden.value = "";
    input.value = "";
    return;
  }
  input.value = stopLabel(stop);
}

function bindEvents() {
  [
    ["from", elements.fromInput],
    ["to", elements.toInput]
  ].forEach(([kind, input]) => {
    input.addEventListener("focus", () => openCombo(kind));
    input.addEventListener("input", () => {
      const hidden = kind === "from" ? elements.fromStop : elements.toStop;
      hidden.value = "";
      updatePreview();
      openCombo(kind);
    });
    input.addEventListener("blur", () => {
      window.setTimeout(() => closeCombo(kind), 120);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const list = kind === "from" ? elements.fromList : elements.toList;
      const first = list.querySelector(".combo-option");
      if (!first) return;
      event.preventDefault();
      selectStop(kind, byId.get(first.dataset.id));
    });
  });
  elements.openRoute.addEventListener("click", openRouteInsideApp);
  elements.swapStops.addEventListener("click", () => {
    const from = elements.fromStop.value;
    const fromText = elements.fromInput.value;
    elements.fromStop.value = elements.toStop.value;
    elements.fromInput.value = elements.toInput.value;
    elements.toStop.value = from;
    elements.toInput.value = fromText;
    updatePreview();
  });
}

rebuildStopIndex();
bindEvents();
updatePreview();
restoreSavedRoutes();



