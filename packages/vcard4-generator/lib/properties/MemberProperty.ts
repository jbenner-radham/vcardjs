import type { Cardinality, Group, PropertyOptions, Value } from '../types';
import { getInvalidPrefParameterMessage } from '../util/error-messages';
import isString from '../util/is-string';
import isValidGroup from '../util/is-valid-group';
import isValidPrefParameter from '../util/is-valid-pref-parameter';
import Property from './Property';

export interface MemberParameters {
    value?: 'uri';
    pid?: number | number[];
    pref?: number; // > Its value MUST be an integer between 1 and 100 that quantifies the level of preference.
    altid?: number | string;
    mediatype?: string;
}

export type MemberPropertyRestConfig = [value: string, parameters?: MemberParameters, options?: PropertyOptions];

export type MemberPropertyLike = MemberProperty | MemberPropertyRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To include a member in the group this vCard represents.
 * >
 * > Value type:  A single URI. It MAY refer to something other than a
 * >   vCard object. For example, an email distribution list could
 * >   employ the "mailto" URI scheme [RFC6068] for efficiency.
 * >
 * > Special notes:  This property MUST NOT be present unless the value of
 * >   the KIND property is "group".
 * >
 * > ABNF:
 * >   MEMBER-param = "VALUE=uri" / pid-param / pref-param / altid-param
 * >                / mediatype-param / any-param
 * >   MEMBER-value = URI
 * >
 * > Examples:
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   KIND:group
 * >   FN:The Doe family
 * >   MEMBER:urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af
 * >   MEMBER:urn:uuid:b8767877-b4a1-4c70-9acc-505d3819e519
 * >   END:VCARD
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   FN:John Doe
 * >   UID:urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af
 * >   END:VCARD
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   FN:Jane Doe
 * >   UID:urn:uuid:b8767877-b4a1-4c70-9acc-505d3819e519
 * >   END:VCARD
 * >
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   KIND:group
 * >   FN:Funky distribution list
 * >   MEMBER:mailto:subscriber1@example.com
 * >   MEMBER:xmpp:subscriber2@example.com
 * >   MEMBER:sip:subscriber3@example.com
 * >   MEMBER:tel:+1-418-555-5555
 * >   END:VCARD
 *
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-6.6.5
 */
export default class MemberProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'uri';

    group: Group;

    parameters: MemberParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: MemberParameters = {}, { group = '' }: PropertyOptions = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        MemberProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static factory(value: MemberPropertyLike): MemberProperty {
        if (value instanceof MemberProperty) return value;

        if (Array.isArray(value)) return new MemberProperty(...value);

        if (isString(value)) return new MemberProperty(value);

        throw new TypeError(`The value "${value}" is not a MemberPropertyLike type`);
    }

    static validateParameters({ pref }: MemberParameters): void {
        if (pref && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }
    }
}
