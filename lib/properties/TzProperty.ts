import { Cardinality } from '../types';
import Property from './Property';

export type TzPropertyLike = TzProperty | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose: To specify information related to the time zone of the
 * >   object the vCard represents.
 * >
 * > Value type:  The default is a single text value. It can also be
 * >   reset to a single URI or utc-offset value.
 * >
 * > Special notes:  It is expected that names from the public-domain
 * >   Olson database [TZ-DB] will be used, but this is not a
 * >   restriction.  See also [IANA-TZ].
 * >
 * >   Efforts are currently being directed at creating a standard URI
 * >   scheme for expressing time zone information. Usage of such a
 * >   scheme would ensure a high level of interoperability between
 * >   implementations that support it.
 * >
 * >   Note that utc-offset values SHOULD NOT be used because the UTC
 * >   offset varies with time -- not just because of the usual daylight
 * >   saving time shifts that occur in may regions, but often entire
 * >   regions will "re-base" their overall offset.  The actual offset
 * >   may be +/- 1 hour (or perhaps a little more) than the one given.
 * >
 * > ABNF:
 * >   TZ-param = "VALUE=" ("text" / "uri" / "utc-offset")
 * >   TZ-value = text / URI / utc-offset
 * >     ; Value and parameter MUST match.
 * >
 * >   TZ-param =/ altid-param / pid-param / pref-param / type-param
 * >             / mediatype-param / any-param
 * >
 * > Examples:
 * >   TZ:Raleigh/North America
 * >
 * >   TZ;VALUE=utc-offset:-0500
 * >     ; Note: utc-offset format is NOT RECOMMENDED.
 *
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-6.5.1
 */
export default class TzProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    [VALUE]: string;

    constructor(value: string) {
        super();
        this[VALUE] = value;
    }

    toString() {
        return `TZ:${this.valueOf()}`;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static factory(value: TzPropertyLike): TzProperty {
        if (value instanceof TzProperty) return value;

        if (typeof value === 'string') return new TzProperty(value);

        throw new TypeError(`The value "${value}" is not a TzPropertyLike type`);
    }
}