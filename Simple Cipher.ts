export class SimpleCipher {
    key: string;

    constructor(key?: string) {
        this.key = key || this.createRandomKey();
    }

    encode(text: string): string {
        return [...text].map((letter, i) => {
            const encodeInt = this.getEncodeInt(i, letter);
            return String.fromCharCode(encodeInt);
        }).join('');
    }

    decode(text: string): string {
        return [...text].map((letter, i) => {
            const decodeInt = this.getDecodeInt(i, letter);
            return String.fromCharCode(decodeInt);
        }).join('');
    }

    private getEncodeInt(i: number, letter: string): number {
        const keyLetter = this.key[i % this.key.length];
        return (letter.charCodeAt(0) + keyLetter.charCodeAt(0) - 194) % 26 + 97;
    }

    private getDecodeInt(i: number, letter: string): number {
        const keyLetter = this.key[i % this.key.length];
        return (letter.charCodeAt(0) - keyLetter.charCodeAt(0) + 26) % 26 + 97;
    }

    private createRandomKey(): string {
        let key = '';
        for (let i = 0; i < 100; i++) {
            key += this.randomLetter();
        }
        return key;
    }

    private randomLetter(): string {
        // Return a random letter
        const i = Math.floor(Math.random() * 26);
        return String.fromCharCode(97 + i);
    }
}