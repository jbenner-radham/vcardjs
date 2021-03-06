import CaluriProperty from '../CaluriProperty';

export default class CaluriPropertyArray extends Array {
    push(...items: any[]): number {
        items.forEach(item => super.push(CaluriProperty.factory(item)));

        return this.length;
    }
}
