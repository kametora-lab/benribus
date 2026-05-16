const BUS_STOPS = [
  {
    "id": 1,
    "name": "奄美空港",
    "timetable": "https://shimabus.busplus.jp/signage/1",
    "map": "https://www.google.com/maps/place/28.43161,129.707916/@28.43161,129.707916,19z",
    "fare": ""
  },
  {
    "id": 2,
    "name": "和野",
    "timetable": "https://shimabus.busplus.jp/signage/2",
    "map": "",
    "fare": "120円"
  },
  {
    "id": 3,
    "name": "奄美パーク",
    "timetable": "https://shimabus.busplus.jp/signage/3",
    "map": "",
    "fare": "200円"
  },
  {
    "id": 4,
    "name": "奄美パーク入口",
    "timetable": "https://shimabus.busplus.jp/signage/4",
    "map": "",
    "fare": "200円"
  },
  {
    "id": 5,
    "name": "節田",
    "timetable": "https://shimabus.busplus.jp/signage/5",
    "map": "",
    "fare": "200円"
  },
  {
    "id": 6,
    "name": "笠寿園前",
    "timetable": "https://shimabus.busplus.jp/signage/6",
    "map": "",
    "fare": "200円"
  },
  {
    "id": 7,
    "name": "土浜",
    "timetable": "https://shimabus.busplus.jp/signage/7",
    "map": "",
    "fare": "270円"
  },
  {
    "id": 8,
    "name": "用安",
    "timetable": "https://shimabus.busplus.jp/signage/8",
    "map": "",
    "fare": "360円"
  },
  {
    "id": 9,
    "name": "ばしゃ山",
    "timetable": "https://shimabus.busplus.jp/signage/9",
    "map": "",
    "fare": "360円"
  },
  {
    "id": 10,
    "name": "神の子",
    "timetable": "https://shimabus.busplus.jp/signage/10",
    "map": "",
    "fare": "410円"
  },
  {
    "id": 11,
    "name": "東海岸",
    "timetable": "https://shimabus.busplus.jp/signage/11",
    "map": "",
    "fare": "460円"
  },
  {
    "id": 12,
    "name": "赤尾木",
    "timetable": "https://shimabus.busplus.jp/signage/12",
    "map": "",
    "fare": "460円"
  },
  {
    "id": 13,
    "name": "赤尾木郵便局前",
    "timetable": "https://shimabus.busplus.jp/signage/13",
    "map": "",
    "fare": "460円"
  },
  {
    "id": 14,
    "name": "大島特別支援学校前",
    "timetable": "https://shimabus.busplus.jp/signage/14",
    "map": "",
    "fare": "500円"
  },
  {
    "id": 15,
    "name": "根原",
    "timetable": "https://shimabus.busplus.jp/signage/15",
    "map": "",
    "fare": "500円"
  },
  {
    "id": 16,
    "name": "大島紬村入口",
    "timetable": "https://shimabus.busplus.jp/signage/16",
    "map": "",
    "fare": "570円"
  },
  {
    "id": 17,
    "name": "屋入ひさ倉前",
    "timetable": "https://shimabus.busplus.jp/signage/17",
    "map": "https://www.google.com/maps/place/28.414026,129.601588/@28.414026,129.601588,19z",
    "fare": "570円"
  },
  {
    "id": 18,
    "name": "愛寿園前",
    "timetable": "https://shimabus.busplus.jp/signage/18",
    "map": "",
    "fare": "620円"
  },
  {
    "id": 19,
    "name": "龍郷町役場前",
    "timetable": "https://shimabus.busplus.jp/signage/19",
    "map": "",
    "fare": "620円"
  },
  {
    "id": 20,
    "name": "龍南中学校前",
    "timetable": "https://shimabus.busplus.jp/signage/20",
    "map": "",
    "fare": "630円"
  },
  {
    "id": 21,
    "name": "大勝（国道沿い）",
    "timetable": "https://shimabus.busplus.jp/signage/21",
    "map": "",
    "fare": "690円"
  },
  {
    "id": 22,
    "name": "戸口入口",
    "timetable": "https://shimabus.busplus.jp/signage/22",
    "map": "",
    "fare": "730円"
  },
  {
    "id": 23,
    "name": "ビッグⅡ前",
    "timetable": "https://shimabus.busplus.jp/signage/23",
    "map": "https://www.google.com/maps/place/28.382362,129.582787/@28.382362,129.582787,19z",
    "fare": "730円"
  },
  {
    "id": 24,
    "name": "中勝町営住宅前",
    "timetable": "https://shimabus.busplus.jp/signage/24",
    "map": "",
    "fare": "770円"
  },
  {
    "id": 25,
    "name": "中勝（国道沿い）",
    "timetable": "https://shimabus.busplus.jp/signage/25",
    "map": "",
    "fare": "770円"
  },
  {
    "id": 26,
    "name": "中勝入口（国道沿い）",
    "timetable": "https://shimabus.busplus.jp/signage/26",
    "map": "",
    "fare": "770円"
  },
  {
    "id": 27,
    "name": "パーラーＮ１前",
    "timetable": "https://shimabus.busplus.jp/signage/27",
    "map": "",
    "fare": "930円"
  },
  {
    "id": 28,
    "name": "竹ノ当橋",
    "timetable": "https://shimabus.busplus.jp/signage/28",
    "map": "",
    "fare": "930円"
  },
  {
    "id": 29,
    "name": "有盛神社前",
    "timetable": "https://shimabus.busplus.jp/signage/29",
    "map": "",
    "fare": "960円"
  },
  {
    "id": 30,
    "name": "浦上農業試験場前",
    "timetable": "https://shimabus.busplus.jp/signage/30",
    "map": "",
    "fare": "960円"
  },
  {
    "id": 31,
    "name": "だいわ大熊店前",
    "timetable": "https://shimabus.busplus.jp/signage/31",
    "map": "",
    "fare": "980円"
  },
  {
    "id": 32,
    "name": "輪内保育所前",
    "timetable": "https://shimabus.busplus.jp/signage/32",
    "map": "",
    "fare": "1010円"
  },
  {
    "id": 33,
    "name": "鳩浜団地",
    "timetable": "https://shimabus.busplus.jp/signage/33",
    "map": "",
    "fare": "1010円"
  },
  {
    "id": 34,
    "name": "鳩浜",
    "timetable": "https://shimabus.busplus.jp/signage/34",
    "map": "",
    "fare": "1010円"
  },
  {
    "id": 35,
    "name": "鳩浜入口",
    "timetable": "https://shimabus.busplus.jp/signage/35",
    "map": "",
    "fare": "1010円"
  },
  {
    "id": 36,
    "name": "佐大熊団地（県道沿い）",
    "timetable": "https://shimabus.busplus.jp/signage/36",
    "map": "",
    "fare": "1060円"
  },
  {
    "id": 37,
    "name": "佐大熊（県道沿い）",
    "timetable": "https://shimabus.busplus.jp/signage/37",
    "map": "",
    "fare": "1060円"
  },
  {
    "id": 38,
    "name": "小浜町",
    "timetable": "https://shimabus.busplus.jp/signage/38",
    "map": "",
    "fare": "1080円"
  },
  {
    "id": 39,
    "name": "唐浜",
    "timetable": "https://shimabus.busplus.jp/signage/39",
    "map": "",
    "fare": "1080円"
  },
  {
    "id": 40,
    "name": "御殿浜",
    "timetable": "https://shimabus.busplus.jp/signage/40",
    "map": "",
    "fare": "1100円"
  },
  {
    "id": 41,
    "name": "朝日通り",
    "timetable": "https://shimabus.busplus.jp/signage/41",
    "map": "",
    "fare": "1100円"
  },
  {
    "id": 42,
    "name": "しまバス本社前",
    "timetable": "https://shimabus.busplus.jp/signage/42",
    "map": "https://www.google.com/maps/place/28.378804,129.497062/@28.378804,129.497062,19z",
    "fare": "1100円"
  },
  {
    "id": 43,
    "name": "末広通り",
    "timetable": "https://shimabus.busplus.jp/signage/43",
    "map": "",
    "fare": "1100円"
  },
  {
    "id": 44,
    "name": "奄美市役所前",
    "timetable": "https://shimabus.busplus.jp/signage/44",
    "map": "https://www.google.com/maps/place/28.37752,129.494235/@28.37752,129.494235,19z",
    "fare": "1100円"
  },
  {
    "id": 45,
    "name": "名瀬郵便局前",
    "timetable": "https://shimabus.busplus.jp/signage/45",
    "map": "",
    "fare": "1100円"
  },
  {
    "id": 47,
    "name": "ウエストコート前",
    "timetable": "https://shimabus.busplus.jp/signage/47",
    "map": "https://www.google.com/maps/place/28.381622,129.493205/@28.381622,129.493205,19z",
    "fare": "1100円"
  },
  {
    "id": 48,
    "name": "矢の脇町",
    "timetable": "https://shimabus.busplus.jp/signage/48",
    "map": "",
    "fare": "1150円"
  },
  {
    "id": 49,
    "name": "塩浜入口",
    "timetable": "https://shimabus.busplus.jp/signage/49",
    "map": "",
    "fare": "1150円"
  },
  {
    "id": 50,
    "name": "塩浜",
    "timetable": "https://shimabus.busplus.jp/signage/50",
    "map": "",
    "fare": "1150円"
  },
  {
    "id": 51,
    "name": "名瀬合同庁舎前",
    "timetable": "https://shimabus.busplus.jp/signage/51",
    "map": "",
    "fare": "1180円"
  },
  {
    "id": 52,
    "name": "南海日日新聞社前",
    "timetable": "https://shimabus.busplus.jp/signage/52",
    "map": "",
    "fare": "1180円"
  },
  {
    "id": 53,
    "name": "奄美中央病院前",
    "timetable": "https://shimabus.busplus.jp/signage/53",
    "map": "",
    "fare": "1180円"
  },
  {
    "id": 54,
    "name": "長浜",
    "timetable": "https://shimabus.busplus.jp/signage/54",
    "map": "",
    "fare": "1180円"
  },
  {
    "id": 55,
    "name": "福祉会館前",
    "timetable": "https://shimabus.busplus.jp/signage/55",
    "map": "",
    "fare": "1180円"
  },
  {
    "id": 56,
    "name": "朝仁トンネル前",
    "timetable": "https://shimabus.busplus.jp/signage/56",
    "map": "",
    "fare": "1200円"
  },
  {
    "id": 57,
    "name": "朝仁入口",
    "timetable": "https://shimabus.busplus.jp/signage/57",
    "map": "",
    "fare": "1200円"
  },
  {
    "id": 58,
    "name": "朝仁中央",
    "timetable": "https://shimabus.busplus.jp/signage/58",
    "map": "",
    "fare": "1200円"
  },
  {
    "id": 59,
    "name": "朝仁見取橋",
    "timetable": "https://shimabus.busplus.jp/signage/59",
    "map": "",
    "fare": "1220円"
  },
  {
    "id": 60,
    "name": "朝仁",
    "timetable": "https://shimabus.busplus.jp/signage/60",
    "map": "",
    "fare": "1220円"
  },
  {
    "id": 61,
    "name": "朝仁タイヨー前",
    "timetable": "https://shimabus.busplus.jp/signage/61",
    "map": "",
    "fare": "1220円"
  },
  {
    "id": 62,
    "name": "浜里入口",
    "timetable": "https://shimabus.busplus.jp/signage/62",
    "map": "",
    "fare": "1270円"
  },
  {
    "id": 63,
    "name": "浜里町",
    "timetable": "https://shimabus.busplus.jp/signage/63",
    "map": "",
    "fare": "1270円"
  },
  {
    "id": 64,
    "name": "平松入口",
    "timetable": "https://shimabus.busplus.jp/signage/64",
    "map": "",
    "fare": "1270円"
  },
  {
    "id": 65,
    "name": "平松町",
    "timetable": "https://shimabus.busplus.jp/signage/65",
    "map": "",
    "fare": "1270円"
  },
  {
    "id": 66,
    "name": "こしゅく第１公園 ",
    "timetable": "https://shimabus.busplus.jp/signage/66",
    "map": "",
    "fare": "1270円"
  },
  {
    "id": 67,
    "name": "入舟町",
    "timetable": "https://shimabus.busplus.jp/signage/67",
    "map": "https://www.google.com/maps/place/28.381192,129.4935/@28.381192,129.4935,19z",
    "fare": "1100円"
  },
  {
    "id": 68,
    "name": "港町",
    "timetable": "https://shimabus.busplus.jp/signage/68",
    "map": "https://www.google.com/maps/place/28.379687,129.494991/@28.379687,129.494991,19z",
    "fare": ""
  },
  {
    "id": 69,
    "name": "赤木名外金久",
    "timetable": "https://shimabus.busplus.jp/signage/69",
    "map": "https://www.google.com/maps/place/28%C2%B027'22.8%22N+129%C2%B040'27.3%22E/@28.4550457,129.6713961,1031m/data=!3m1!1e3!4m4!3m3!8m2!3d28.456345!4d129.674259?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
    "fare": ""
  },
  {
    "id": 70,
    "name": "赤木名中金久",
    "timetable": "https://shimabus.busplus.jp/signage/70",
    "map": "https://www.google.com/maps/place/28.454996,129.674989/@28.454996,129.674989,19z",
    "fare": ""
  },
  {
    "id": 71,
    "name": "奄美市笠利総合支所前",
    "timetable": "https://shimabus.busplus.jp/signage/71",
    "map": "https://shimabus.busplus.jp/signage/71/71_01",
    "fare": ""
  },
  {
    "id": 72,
    "name": "赤木名入口",
    "timetable": "https://shimabus.busplus.jp/signage/72",
    "map": "https://www.google.com/maps/place/28.451911,129.677768/@28.451911,129.677768,19z",
    "fare": ""
  },
  {
    "id": 73,
    "name": "赤木名Ａコープ前",
    "timetable": "https://shimabus.busplus.jp/signage/73",
    "map": "https://www.google.com/maps/place/28.450399,129.68396/@28.450399,129.68396,19z",
    "fare": ""
  },
  {
    "id": 74,
    "name": "和野入口",
    "timetable": "https://shimabus.busplus.jp/signage/74",
    "map": "https://www.google.com/maps/place/28.440515,129.693227/@28.440515,129.693227,19z",
    "fare": ""
  },
  {
    "id": 75,
    "name": "万屋",
    "timetable": "https://shimabus.busplus.jp/signage/75",
    "map": "https://www.google.com/maps/place/28%C2%B026'37.2%22N+129%C2%B042'36.5%22E/@28.440555,129.706457,2062m/data=!3m1!1e3!4m4!3m3!8m2!3d28.443667!4d129.710137?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
    "fare": ""
  },
  {
    "id": 76,
    "name": "有屋入口",
    "timetable": "https://shimabus.busplus.jp/signage/76",
    "map": "https://www.google.com/maps/place/28.393071,129.529196/@28.393071,129.529196,19z",
    "fare": ""
  },
  {
    "id": 77,
    "name": "和光入口",
    "timetable": "https://shimabus.busplus.jp/signage/77",
    "map": "https://www.google.com/maps/place/28.390933,129.526239/@28.390933,129.526239,19z",
    "fare": ""
  },
  {
    "id": 78,
    "name": "和光中央",
    "timetable": "https://shimabus.busplus.jp/signage/78",
    "map": "https://www.google.com/maps/place/28.389522,129.523149/@28.389522,129.523149,19z",
    "fare": ""
  },
  {
    "id": 79,
    "name": "奄美自動車検査登録事務所前",
    "timetable": "https://shimabus.busplus.jp/signage/79",
    "map": "https://www.google.com/maps/place/28.388295,129.52044/@28.388295,129.52044,19z",
    "fare": ""
  },
  {
    "id": 80,
    "name": "和光園前",
    "timetable": "https://shimabus.busplus.jp/signage/80",
    "map": "https://www.google.com/maps/place/28.386757,129.517254/@28.386757,129.517254,19z",
    "fare": ""
  },
  {
    "id": 81,
    "name": "永田橋",
    "timetable": "https://shimabus.busplus.jp/signage/81",
    "map": "https://www.google.com/maps/place/28.376435,129.497159/@28.376435,129.497159,19z",
    "fare": ""
  },
  {
    "id": 131,
    "name": "せとうち海の駅",
    "timetable": "https://shimabus.busplus.jp/signage/131",
    "map": "https://www.google.com/maps/place/28.145686,129.309205/@28.145686,129.309205,19z",
    "fare": ""
  }
];
