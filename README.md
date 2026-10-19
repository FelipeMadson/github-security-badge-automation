# GitHub Security Badge Automation

Automated CI/CD security posture evaluator and accessible SVG badge generator evaluating repository health, pinned GitHub Actions, dependency lockfile integrity, and SAST scanner scores.

[![CI](https://github.com/FelipeMadson/github-security-badge-automation/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/github-security-badge-automation/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

*Read this in [Português](README.pt-BR.md).*

---

## Capabilities

- **Automated Security Scorecard**: Audits repos for SHA-pinned actions, minimal write tokens, lockfile presence, and license files.
- **Accessible SVG Rendering**: Generates crisp, accessible SVG badges adhering to WCAG high-contrast criteria without external dynamic badge service dependencies.
- **Deterministic Calculation**: Pure computational evaluation producing repeatable status badges across CI runs.

---

## Usage

```typescript
import { SecurityScorecard, BadgeGenerator } from './src/index.ts';

const scorecard = new SecurityScorecard();
const report = scorecard.evaluate({
  hasLockfile: true,
  actionsPinnedBySha: true,
  hasLicense: true,
  minimalCiPermissions: true
});

const svgBadge = BadgeGenerator.renderBadge('Security Score', report.grade, report.color);
```

## License

MIT © [Felipe Madson](https://github.com/FelipeMadson)
