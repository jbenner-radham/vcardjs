import { Cardinality } from '../types';
import Property from './Property';

/** @todo Add URL type support? */
export type CaladruriPropertyLike = CaladruriProperty | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the calendar user address [RFC5545] to which a
 * >   scheduling request [RFC5546] should be sent for the object
 * >   represented by the vCard.
 * >
 * > Value type:  A single URI value.
 * >
 * > Special notes:  Where multiple CALADRURI properties are specified,
 * >   the default CALADRURI property is indicated with the PREF
 * >   parameter.
 * >
 * > ABNF:
 * >   CALADRURI-param = "VALUE=uri" / pid-param / pref-param / type-param
 * >                   / mediatype-param / altid-param / any-param
 * >   CALADRURI-value = URI
 * >
 * > Example _(sic)_:
 * >   CALADRURI;PREF=1:mailto:janedoe@example.com
 * >   CALADRURI:http://example.com/calendar/jdoe
 *
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-6.9.2
 */
export default class CaladruriProperty implements Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    [VALUE]: string;

    constructor(value: string) {
        this[VALUE] = value;
    }

    toString() {
        return `CALADRURI:${this.valueOf()}`;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static factory(value: CaladruriPropertyLike): CaladruriProperty {
        if (value instanceof CaladruriProperty) return value;

        if (typeof value === 'string') return new CaladruriProperty(value);

        throw new TypeError(`The value "${value}" is not a CaladruriPropertyLike type`);
    }
}