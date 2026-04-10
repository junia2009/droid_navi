// RT91 Navi アイコン生成スクリプト
// node generate-icons.js で実行

var sizes = [192, 512];

sizes.forEach(function(size) {
  // HTMLのCanvasを使わず、SVGからPNGを作る簡易的な手法は
  // Node環境ではcanvasモジュールが必要なため、
  // 代わりにインラインSVGをHTMLで開いて手動保存するか、
  // 以下のシンプルなSVGアイコンを使用します
});

// SVGアイコンを直接ファイルとして出力
var fs = require('fs');

function createSVG(size) {
  var s = size;
  var cx = s/2, cy = s/2;
  var r = s * 0.4;
  return '<?xml version="1.0" encoding="UTF-8"?>' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 ' + s + ' ' + s + '">' +
    '<rect width="' + s + '" height="' + s + '" rx="' + (s*0.15) + '" fill="#0a0a12"/>' +
    // ボディ（白）
    '<ellipse cx="' + cx + '" cy="' + (cy + r*0.15) + '" rx="' + (r*0.65) + '" ry="' + (r*0.75) + '" fill="#e6e6e6"/>' +
    // ドーム（赤）
    '<ellipse cx="' + cx + '" cy="' + (cy - r*0.35) + '" rx="' + (r*0.62) + '" ry="' + (r*0.52) + '" fill="#b31e22"/>' +
    // 白パネル
    '<rect x="' + (cx - r*0.22) + '" y="' + (cy - r*0.52) + '" width="' + (r*0.44) + '" height="' + (r*0.35) + '" rx="' + (r*0.03) + '" fill="#eee" opacity="0.9"/>' +
    // メインアイ
    '<circle cx="' + (cx + r*0.05) + '" cy="' + (cy - r*0.38) + '" r="' + (r*0.14) + '" fill="#1a1a24"/>' +
    '<circle cx="' + (cx + r*0.09) + '" cy="' + (cy - r*0.42) + '" r="' + (r*0.04) + '" fill="#fff"/>' +
    // リム（赤帯）
    '<rect x="' + (cx - r*0.68) + '" y="' + (cy - r*0.12) + '" width="' + (r*1.36) + '" height="' + (r*0.1) + '" rx="' + (r*0.02) + '" fill="#b31e22"/>' +
    // ブルーストライプ
    '<rect x="' + (cx - r*0.3) + '" y="' + (cy + r*0.05) + '" width="' + (r*0.6) + '" height="' + (r*0.08) + '" rx="' + (r*0.02) + '" fill="#1a3cb5"/>' +
    '<rect x="' + (cx - r*0.3) + '" y="' + (cy + r*0.18) + '" width="' + (r*0.6) + '" height="' + (r*0.08) + '" rx="' + (r*0.02) + '" fill="#1a3cb5"/>' +
    // テキスト
    '<text x="' + cx + '" y="' + (s*0.92) + '" text-anchor="middle" fill="#8899bb" font-family="sans-serif" font-size="' + (s*0.08) + '" font-weight="bold">RT91</text>' +
    '</svg>';
}

sizes.forEach(function(size) {
  fs.writeFileSync('icon-' + size + '.svg', createSVG(size));
  console.log('Created icon-' + size + '.svg');
});

console.log('\nSVG icons created. Convert to PNG or use SVG directly.');
console.log('For PNG conversion, open in browser and screenshot, or use: npx svg2png-cli icon-192.svg icon-512.svg');
