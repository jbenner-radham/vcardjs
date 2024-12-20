import { describe, it } from 'vitest';
import { expect } from 'chai';
import InterestProperty from '../../../lib/properties/InterestProperty.js';
import InterestPropertyArray from '../../../lib/properties/arrays/InterestPropertyArray.js';

describe('InterestPropertyArray', () => {
    it('is a class', () => {
        expect(InterestPropertyArray).to.be.a('class');
    });

    describe('#push()', () => {
        it('is a method', () => {
            expect(InterestPropertyArray.prototype.push).to.be.a('function');
        });

        it('returns a number', () => {
            const value = 'r&b music';
            const interestProperties = new InterestPropertyArray();

            expect(interestProperties.push(value)).to.be.a('number');
        });

        it('returns the length of the array', () => {
            const value = 'r&b music';
            const interestProperties = new InterestPropertyArray();

            expect(interestProperties.push(value)).to.equal(1);
        });

        it('creates an `InterestProperty` object in the array', () => {
            const value = 'r&b music';
            const interestProperties = new InterestPropertyArray();

            interestProperties.push(value);

            expect(interestProperties.at(0) instanceof InterestProperty).to.equal(true);
        });

        it('creates an `InterestProperty` object in the array with the proper value', () => {
            const value = 'r&b music';
            const interestProperties = new InterestPropertyArray();

            interestProperties.push(value);

            expect(interestProperties.at(0).valueOf()).to.equal(value);
        });
    });
});
