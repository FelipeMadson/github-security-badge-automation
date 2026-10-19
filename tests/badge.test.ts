import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SecurityScorecard } from '../src/scorecard.ts';
import { BadgeGenerator } from '../src/badge-generator.ts';

describe('SecurityScorecard', () => {
  it('atribui grau A+ para repositório com 100% dos requisitos de segurança', () => {
    const report = SecurityScorecard.evaluate({
      actionsPinnedBySha: true,
      minimalCiPermissions: true,
      hasLockfile: true,
      hasLicense: true
    });

    assert.equal(report.score, 100);
    assert.equal(report.grade, 'A+');
    assert.equal(report.checksPassed, 4);
  });

  it('penaliza repositórios sem fixação de SHA e sem permissões mínimas', () => {
    const report = SecurityScorecard.evaluate({
      actionsPinnedBySha: false,
      minimalCiPermissions: false,
      hasLockfile: true,
      hasLicense: true
    });

    assert.equal(report.score, 40);
    assert.equal(report.grade, 'F');
    assert.equal(report.checksPassed, 2);
  });
});

describe('BadgeGenerator', () => {
  it('gera XML SVG válido com largura calculada dinamicamente', () => {
    const svg = BadgeGenerator.renderBadge('Security Score', 'A+', '#2e7d32');
    assert.ok(svg.includes('<svg xmlns="http://www.w3.org/2000/svg"'));
    assert.ok(svg.includes('Security Score'));
    assert.ok(svg.includes('A+'));
    assert.ok(svg.includes('#2e7d32'));
  });
});
