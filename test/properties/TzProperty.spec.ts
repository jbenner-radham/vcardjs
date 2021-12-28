import { expect } from 'chai';
import TzProperty from '../../lib/properties/TzProperty';

describe('TzProperty', () => {
    it('is a function class', () => {
        expect(TzProperty).to.be.a('function');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(TzProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const tz = new TzProperty('Raleigh/North America');

            expect(tz.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'Raleigh/North America';
            const tz = new TzProperty(value);

            expect(tz.toString()).to.equal(`TZ:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(TzProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const tz = new TzProperty('Raleigh/North America');

            expect(tz.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'Raleigh/North America';
            const tz = new TzProperty(value);

            expect(tz.valueOf()).to.equal(value);
        });
    });
});