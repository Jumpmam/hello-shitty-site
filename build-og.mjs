import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "node:fs";

const mascotBase64 = readFileSync("./public/assets/img/mascot.png").toString("base64");

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="50%" cy="20%" r="90%">
      <stop offset="0%" stop-color="#fef1f5" />
      <stop offset="100%" stop-color="#fbdce6" />
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <text x="600" y="180" font-family="Baloo 2 ExtraBold" font-size="128" fill="#3f2717" text-anchor="middle" stroke="#1b140f" stroke-width="2">HELLO SHITTY</text>
  <text x="600" y="560" font-family="Baloo 2" font-weight="700" font-size="52" fill="#f2699e" text-anchor="middle">$SHITTY</text>
  <text x="600" y="610" font-family="Nunito" font-weight="700" font-size="26" fill="#6b4226" text-anchor="middle">the cutest shit on the internet.</text>
  <image href="data:image/png;base64,${mascotBase64}" x="440" y="200" width="320" height="307" />
</svg>
`;

const resvg = new Resvg(svg, {
  font: {
    fontFiles: [
      "./scripts/ttf/baloo2-extrabold.ttf",
      "./scripts/ttf/baloo2-bold.ttf",
      "./scripts/ttf/nunito-bold.ttf",
    ],
    loadSystemFonts: false,
    defaultFontFamily: "Baloo 2 ExtraBold",
  },
});

const png = resvg.render().asPng();
writeFileSync("./public/assets/img/og.png", png);
console.log("og.png written");
