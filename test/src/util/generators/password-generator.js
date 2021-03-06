import { expect } from 'chai';
import { PasswordGenerator } from 'util/generators/password-generator';

describe('PasswordGenerator', () => {
    it('should generate a password with digits', () => {
        expect(PasswordGenerator.generate({ length: 10, digits: true })).to.match(/^\d{10}$/);
    });

    it('should generate a password with lowercase letters', () => {
        expect(PasswordGenerator.generate({ length: 10, lower: true })).to.match(/^[a-z]{10}$/);
    });

    it('should generate a password with uppercase letters', () => {
        expect(PasswordGenerator.generate({ length: 10, upper: true })).to.match(/^[A-Z]{10}$/);
    });

    it('should generate a password with brackets', () => {
        expect(PasswordGenerator.generate({ length: 10, brackets: true })).to.match(
            /^[(){}[\]<>]{10}$/
        );
    });

    it('should generate a password with ambiguous characters', () => {
        expect(PasswordGenerator.generate({ length: 10, ambiguous: true })).to.match(
            new RegExp(`^[O0oIl]{10}$`)
        );
    });

    it('should generate a password with custom characters', () => {
        expect(PasswordGenerator.generate({ length: 10, include: '123' })).to.match(/^[123]{10}$/);
    });

    it('should generate a password with special characters', () => {
        expect(PasswordGenerator.generate({ length: 50, special: true })).to.match(
            /^[!-\/:-@[-`~]{50}$/
        );
    });

    it('should generate a password with high ascii characters', () => {
        expect(PasswordGenerator.generate({ length: 100, high: true })).to.match(/^[¡-þ]{100}$/);
    });

    it('should generate a pronounceable password', () => {
        expect(PasswordGenerator.generate({ length: 10, name: 'Pronounceable' })).to.match(
            /^[a-zA-Z]{10}$/
        );
    });

    it('should generate a password with pattern', () => {
        expect(
            PasswordGenerator.generate({
                length: 60,
                pattern: 'Aa1XI-',
                include: '@#',
                digits: true,
                upper: true
            })
        ).to.match(/^([A-Z][a-z][0-9][0-9A-Z@#][@#]-){10}$/);
    });
});
