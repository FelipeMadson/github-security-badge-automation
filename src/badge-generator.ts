export class BadgeGenerator {
  static renderBadge(label: string, value: string, colorHex = '#4caf50'): string {
    const labelWidth = Math.max(40, label.length * 7 + 10);
    const valueWidth = Math.max(30, value.length * 8 + 12);
    const totalWidth = labelWidth + valueWidth;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${value}">
  <linearGradient id="b" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="a">
    <rect width="${totalWidth}" height="20" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#a)">
    <rect width="${labelWidth}" height="20" fill="#555"/>
    <rect x="${labelWidth}" width="${valueWidth}" height="20" fill="${colorHex}"/>
    <rect width="${totalWidth}" height="20" fill="url(#b)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="110">
    <text x="${labelWidth * 5}" y="140" transform="scale(.1)" fill="#000" fill-opacity=".3">${label}</text>
    <text x="${labelWidth * 5}" y="130" transform="scale(.1)">${label}</text>
    <text x="${(labelWidth + valueWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#000" fill-opacity=".3">${value}</text>
    <text x="${(labelWidth + valueWidth / 2) * 10}" y="130" transform="scale(.1)">${value}</text>
  </g>
</svg>`;
  }
}
