import type { Cardinality, Group, Pref, PropertyOptions, Type, Value } from '../types.js';
import { getInvalidPrefParameterMessage } from '../util/error-messages.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import isValidPrefParameter from '../util/is-valid-pref-parameter.js';
import Property from './Property.js';

export interface FburlParameters {
    value?: 'uri';
    pid?: number | number[];
    pref?: Pref;
    type?: Type;
    mediatype?: string;
    altid?: number | string;
}

export type FburlPropertyRestConfig = [value: string, parameters?: FburlParameters, options?: PropertyOptions];

/** @todo Add URL type support? */
export type FburlPropertyLike = FburlProperty | FburlPropertyRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the URI for the busy time associated with the
 * >   object that the vCard represents.
 * >
 * > Value type:  A single URI value.
 * >
 * > Special notes:  Where multiple FBURL properties are specified, the
 * >   default FBURL property is indicated with the PREF parameter.  The
 * >   FTP [RFC1738] or HTTP [RFC2616] type of URI points to an iCalendar
 * >   [RFC5545] object associated with a snapshot of the next few weeks
 * >   or months of busy time data.  If the iCalendar object is
 * >   represented as a file or document, its file extension should be
 * >   ".ifb".
 * >
 * > ABNF:
 * >   FBURL-param = "VALUE=uri" / pid-param / pref-param / type-param
 * >               / mediatype-param / altid-param / any-param
 * >   FBURL-value = URI
 * >
 * > Examples:
 * >   FBURL;PREF=1:http://www.example.com/busy/janedoe
 * >   FBURL;MEDIATYPE=text/calendar:ftp://example.com/busy/project-a.ifb
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.9.1 RFC 6350 - vCard Format Specification § FBURL}
 */
export default class FburlProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'uri';

    group: Group;

    parameters: FburlParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: FburlParameters = {}, { group = '' }: PropertyOptions = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        FburlProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static factory(value: FburlPropertyLike): FburlProperty {
        if (value instanceof FburlProperty) return value;

        if (Array.isArray(value)) return new FburlProperty(...value);

        if (isString(value)) return new FburlProperty(value);

        throw new TypeError(`The value "${value}" is not a FburlPropertyLike type`);
    }

    static validateParameters({ pref }: FburlParameters): void {
        if (pref && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }
    }
}
