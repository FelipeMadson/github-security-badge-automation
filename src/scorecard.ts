import type { SecurityAuditInputs, SecurityScoreReport } from './types.ts';

export class SecurityScorecard {
  static evaluate(inputs: SecurityAuditInputs): SecurityScoreReport {
    let score = 0;
    let passed = 0;
    const total = 4;

    if (inputs.actionsPinnedBySha) { score += 35; passed++; }
    if (inputs.minimalCiPermissions) { score += 25; passed++; }
    if (inputs.hasLockfile) { score += 25; passed++; }
    if (inputs.hasLicense) { score += 15; passed++; }

    let grade: 'A+' | 'A' | 'B' | 'C' | 'F' = 'F';
    let color = '#d9534f'; // red

    if (score === 100) {
      grade = 'A+';
      color = '#2e7d32'; // deep green
    } else if (score >= 85) {
      grade = 'A';
      color = '#4caf50'; // green
    } else if (score >= 70) {
      grade = 'B';
      color = '#ff9800'; // orange
    } else if (score >= 50) {
      grade = 'C';
      color = '#f57c00'; // dark orange
    }

    return {
      score,
      grade,
      color,
      checksPassed: passed,
      totalChecks: total
    };
  }
}
