import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'child_process';

// CSVを安全にパースする関数
function parseCSV(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    let curr = '';
    let cols = [];
    let inQuote = false;

    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"' && line[c + 1] === '"') {
        curr += '"';
        c++;
      } else if (char === '"') {
        inQuote = !inQuote;
      } else if (char === ',' && !inQuote) {
        cols.push(curr);
        curr = '';
      } else {
        curr += char;
      }
    }
    cols.push(curr);

    // 空行スキップ
    if (cols.length < 5 && cols.join('').trim() === '') continue;

    // 前後のダブルクォートを削除
    cols = cols.map(c => c.replace(/^"|"$/g, ''));

    // スプレッドシートの列: 時刻表, バス停名, のりば地図, # ID, （乗車）
    // （画像での並び順に基づいています）
    const idStr = cols[3] || "0";
    const id = parseInt(idStr, 10); // "1.00" -> 1

    // IDが有効な行のみ追加
    if (id > 0) {
      results.push({
        id: id,
        name: cols[1] || "",
        timetable: cols[0] || "",
        map: cols[2] || "",
        fare: cols[4] || ""
      });
    }
  }
  return results;
}

function main() {
  const dir = path.resolve('.');
  let csvPath = path.resolve('bus-stops.csv');
  
  if (!fs.existsSync(csvPath)) {
    // もし bus-stops.csv が無い場合、フォルダ内の他のCSVを探す
    const files = fs.readdirSync(dir);
    const csvFiles = files.filter(f => f.toLowerCase().endsWith('.csv'));
    if (csvFiles.length > 0) {
      csvPath = path.resolve(csvFiles[0]);
      console.log(`${csvFiles[0]} を読み込みます...`);
    } else {
      console.error('エラー: フォルダ内にCSVファイルが見つかりません。');
      process.exit(1);
    }
  }

  const jsPath = path.resolve('bus-stops.js');

  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const busStops = parseCSV(csvContent);

    if (busStops.length === 0) {
      console.error('エラー: 有効なバス停データがCSVから見つかりませんでした。');
      process.exit(1);
    }

    const jsContent = `const BUS_STOPS = ${JSON.stringify(busStops, null, 2)};\n`;
    fs.writeFileSync(jsPath, jsContent, 'utf8');
    console.log(`✅ ${busStops.length}件のバス停データを bus-stops.js に出力しました！`);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('\n変更をGitコミットしてGitHubにPushしますか？ (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        try {
          const now = new Date();
          const yyyy = now.getFullYear();
          const mm = String(now.getMonth() + 1).padStart(2, '0');
          const dd = String(now.getDate()).padStart(2, '0');
          const hh = String(now.getHours()).padStart(2, '0');
          const min = String(now.getMinutes()).padStart(2, '0');
          const ss = String(now.getSeconds()).padStart(2, '0');
          const commitMsg = `${yyyy}${mm}${dd}${hh}${min}${ss}ニダ`;

          console.log('\nGitへの反映を開始します...');
          execSync('git add .', { stdio: 'inherit' });
          execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
          execSync('git push', { stdio: 'inherit' });
          console.log('\n✅ GitHubへのPushが完了しました！');
        } catch (gitErr) {
          console.error('\n❌ Gitの実行中にエラーが発生しました:', gitErr.message);
        }
      } else {
        console.log('\nGitへの反映をキャンセルしました。');
      }
      rl.close();
    });

  } catch (err) {
    console.error('❌ 処理中にエラーが発生しました:', err);
    process.exit(1);
  }
}

main();
