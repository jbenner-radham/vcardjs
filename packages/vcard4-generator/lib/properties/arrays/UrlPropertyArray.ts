import UrlProperty from '../UrlProperty';

export default class UrlPropertyArray extends Array {
    push(...items: any[]): number {
        items.forEach(item => super.push(UrlProperty.factory(item)));

        return this.length;
    }
}
