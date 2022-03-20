import { expect } from 'chai';
import CategoriesProperty, { CategoriesPropertyConfig } from '../../lib/properties/CategoriesProperty';

describe('CategoriesProperty', () => {
    it('is a function class', () => {
        expect(CategoriesProperty).to.be.a('function');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(CategoriesProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const categories = new CategoriesProperty('TRAVEL AGENT');

            expect(categories.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'TRAVEL AGENT';
            const categories = new CategoriesProperty(value);

            expect(categories.toString()).to.equal(`CATEGORIES:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { type: 'work' as const };
            const value = 'TRAVEL AGENT';
            const categories = new CategoriesProperty(value, parameters);
            const actual = categories.toString();
            const expected = 'CATEGORIES;TYPE=work:TRAVEL AGENT';

            expect(actual).to.equal(expected);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'http://cal.example.com/calA';
            const categories = new CategoriesProperty(value, parameters);

            expect(categories.toString()).to.equal(`CATEGORIES;VALUE=text:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(CategoriesProperty.prototype.valueOf).to.be.a('function');
        });

        /** @todo Un-skip these two tests after implementing array argument support! */
        it.skip('returns a string', () => {
            const categories = new CategoriesProperty('INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY');

            expect(categories.valueOf()).to.be.a('string');
        });

        it.skip('returns the same value passed to it', () => {
            const value = 'INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY';
            const categories = new CategoriesProperty(value);

            expect(categories.valueOf()).to.equal(value);
        });
    });

    describe('.factory()', () => {
        it('is a static method', () => {
            expect(CategoriesProperty.factory).to.be.a('function');
        });

        it('returns an instance of `CategoriesProperty`', () => {
            const categories = CategoriesProperty.factory('INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY');

            expect(categories instanceof CategoriesProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const categories = new CategoriesProperty('INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY');

            expect(CategoriesProperty.factory(categories) instanceof CategoriesProperty).to.equal(true);
        });

        it('creates an instance from a string value argument', () => {
            const categories = CategoriesProperty.factory('INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY');

            expect(categories instanceof CategoriesProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY';
            const config: CategoriesPropertyConfig = [value, { pref: 1 }];
            const categories = CategoriesProperty.factory(config);

            expect(categories instanceof CategoriesProperty).to.equal(true);
        });
    });
});