export interface SecurityAuditInputs {
  hasLockfile: boolean;
  actionsPinnedBySha: boolean;
  hasLicense: boolean;
  minimalCiPermissions: boolean;
}

export interface SecurityScoreReport {
  score: number; // 0 a 100
  grade: 'A+' | 'A' | 'B' | 'C' | 'F';
  color: string;
  checksPassed: number;
  totalChecks: number;
}
