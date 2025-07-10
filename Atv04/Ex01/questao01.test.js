const validaSenha = require('./questao01');

describe('validaSenha', () => {
  test('Senha válida (letras, números, sem espaços)', () => {
    expect(validaSenha('Senha123')).toBe(true);
  });

  test('Senha não é string', () => {
    expect(validaSenha(12345678)).toBe(false);
  });

  test('Senha com menos de 8 caracteres', () => {
    expect(validaSenha('Ab1')).toBe(false);
  });

  test('Senha sem letras', () => {
    expect(validaSenha('12345678')).toBe(false);
  });

  test('Senha sem números', () => {
    expect(validaSenha('SomenteLetras')).toBe(false);
  });

  test('Senha com espaço', () => {
    expect(validaSenha('Senha 123')).toBe(false);
  });
});
