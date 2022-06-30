import { expect } from 'chai';
import OrgProperty, { OrgPropertyRestConfig } from '../../lib/properties/OrgProperty';

describe('OrgProperty', () => {
    it('is a function class', () => {
        expect(OrgProperty).to.be.a('function');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(OrgProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const org = new OrgProperty('ABC, Inc.;North American Division;Marketing');

            expect(org.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const escapedValue = 'ABC\\, Inc.;North American Division;Marketing';
            const org = new OrgProperty('ABC, Inc.;North American Division;Marketing');

            expect(org.toString()).to.equal(`ORG:${escapedValue}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { sortAs: 'ABC', type: 'work' as const };
            const value = 'ABC, Inc.;North American Division;Marketing';
            const escapedValue = 'ABC\\, Inc.;North American Division;Marketing';
            const org = new OrgProperty(value, parameters);
            const actual = org.toString();
            const expected = `ORG;SORT-AS=ABC;TYPE=work:${escapedValue}`;

            expect(actual).to.equal(expected);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'ABC, Inc.;North American Division;Marketing';
            const escapedValue = 'ABC\\, Inc.;North American Division;Marketing';
            const org = new OrgProperty(value, parameters);

            expect(org.toString()).to.equal(`ORG;VALUE=text:${escapedValue}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(OrgProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const org = new OrgProperty('ABC, Inc.;North American Division;Marketing');

            expect(org.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'ABC, Inc.;North American Division;Marketing';
            const org = new OrgProperty(value);

            expect(org.valueOf()).to.equal(value);
        });
    });

    describe('.factory()', () => {
        it('is a static method', () => {
            expect(OrgProperty.factory).to.be.a('function');
        });

        it('returns an instance of `OrgProperty`', () => {
            const org = OrgProperty.factory('ABC, Inc.;North American Division;Marketing');

            expect(org instanceof OrgProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const org = new OrgProperty('ABC, Inc.;North American Division;Marketing');

            expect(OrgProperty.factory(org)).to.equal(org);
        });

        it('creates an instance from a string value argument', () => {
            const org = OrgProperty.factory('ABC, Inc.;North American Division;Marketing');

            expect(org instanceof OrgProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'ABC, Inc.;North American Division;Marketing';
            const config: OrgPropertyRestConfig = [value, { type: 'work' }];
            const org = OrgProperty.factory(config);

            expect(org instanceof OrgProperty).to.equal(true);
        });
    });
});
