import { expect } from 'chai';
import RoleProperty from '../../lib/properties/RoleProperty';

describe('RoleProperty', () => {
    it('is a function class', () => {
        expect(RoleProperty).to.be.a('function');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(RoleProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const role = new RoleProperty('Project Leader');

            expect(role.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'Project Leader';
            const role = new RoleProperty(value);

            expect(role.toString()).to.equal(`ROLE:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(RoleProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const role = new RoleProperty('Project Leader');

            expect(role.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'Project Leader';
            const role = new RoleProperty(value);

            expect(role.valueOf()).to.equal(value);
        });
    });
});