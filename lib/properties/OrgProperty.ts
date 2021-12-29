import isPlainObject from 'lodash.isplainobject';
import kebabCase from 'lodash.kebabcase';
import { Cardinality } from '../types';
import Property from './Property';

export interface OrgParameters {
    sortAs?: string;
    language?: string;
    pid?: number | number[];
    pref?: number; // > Its value MUST be an integer between 1 and 100 that quantifies the level of preference.
    altid?: number | string;
    type?: 'home' | 'work' | string;
}

export interface OrgPropertyConfig {
    value: string;
    parameters?: OrgParameters;
}

export type OrgPropertyLike = OrgProperty | OrgPropertyConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the organizational name and units associated
 * >   with the vCard.
 * >
 * > Value type:  A single structured text value consisting of components
 * >   separated by the SEMICOLON character (U+003B).
 * >
 * > Special notes:  The property is based on the X.520 Organization Name
 * >   and Organization Unit attributes [CCITT.X520.1988].  The property
 * >   value is a structured type consisting of the organization name,
 * >   followed by zero or more levels of organizational unit names.
 * >
 * >   The SORT-AS parameter MAY be applied to this property.
 * >
 * > ABNF:
 * >   ORG-param = "VALUE=text" / sort-as-param / language-param
 * >             / pid-param / pref-param / altid-param / type-param
 * >             / any-param
 * >   ORG-value = component *(";" component)
 * >
 * > Example:  A property value consisting of an organizational name,
 * >   organizational unit #1 name, and organizational unit #2 name.
 * >
 * >   ORG:ABC\, Inc.;North American Division;Marketing
 *
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-6.6.4
 */
export default class OrgProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    parameters: OrgParameters;

    [VALUE]: string;

    constructor(config: OrgPropertyConfig | string) {
        super();

        if (isPlainObject(config)) {
            const { value, parameters = {} } = config as OrgPropertyConfig;
            this.parameters = parameters;
            this[VALUE] = value;

            return;
        }

        if (typeof config === 'string') {
            this.parameters = {};
            this[VALUE] = config;

            return;
        }

        throw new TypeError(`The value "${config}" is not a OrgPropertyConfig or string type`);
    }

    #getValue(): string {
        const value = this
            .components()
            .map(component => this.escape(component))
            .join(this.COMPONENT_SEPARATOR);

        return `:${value}`;
    }

    #getValueWithParameters(): string {
        const getKeyValueString = ([key, value]: [string, any]) =>
            [kebabCase(key).toUpperCase(), Array.isArray(value) ? value.join(',') : value].join('=');
        const parameters = Object.entries(this.parameters)
            .map(getKeyValueString)
            .join(this.COMPONENT_SEPARATOR);
        const value = this.components()
            .map(component => this.escape(component))
            .join(this.COMPONENT_SEPARATOR);

        return `;${parameters}:${value}`;
    }

    toString() {
        const hasParameters = Object.keys(this.parameters).length >= 1;
        const value = hasParameters
            ? this.#getValueWithParameters()
            : this.#getValue();

        return `ORG${value}`;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static factory(value: OrgPropertyLike): OrgProperty {
        if (value instanceof OrgProperty) return value;

        if (typeof value === 'string') return new OrgProperty(value);

        throw new TypeError(`The value "${value}" is not a OrgPropertyLike type`);
    }
}
