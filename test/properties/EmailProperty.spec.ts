import { expect } from 'chai';
import EmailProperty from '../../lib/properties/EmailProperty';

describe('EmailProperty', () => {
    it('is a function class', () => {
        expect(EmailProperty).to.be.a('function');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(EmailProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const email = new EmailProperty('j.doe@example.com');

            expect(email.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'j.doe@example.com';
            const email = new EmailProperty(value);

            expect(email.toString()).to.equal(`EMAIL:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(EmailProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const email = new EmailProperty('hello@example.com');

            expect(email.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'hello@example.com';
            const email = new EmailProperty(value);

            expect(email.valueOf()).to.equal(value);
        });
    });
});