const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export class Cipher {
  constructor(key = 'aaaaaaaaaa') {
    // map characters to values 0 - 25
    this.__key = Array.from(key, c => LETTERS.indexOf(c));
  }

  encode(msg) {
    let result = '';
    for (const [i, c] of [...msg].entries()) {
      const charCode = ((LETTERS.indexOf(c) + this.__key[i % this.__key.length]) % 26 + 26) % 26;
      result += LETTERS[charCode];
    }
    return result;
  }

  decode(code) {
    let result = '';
    for (const [i, c] of [...code].entries()) {
      const charCode = ((LETTERS.indexOf(c) - this.__key[i % this.__key.length]) % 26 + 26) % 26;
      result += LETTERS[charCode];
    }
    return result;
  }

  get key() {
    return this.__key.join('');
  }
}
