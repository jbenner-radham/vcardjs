import SoundProperty from '../SoundProperty';

export default class SoundPropertyArray extends Array {
    push(...items: any[]): number {
        items.forEach(item => super.push(SoundProperty.factory(item)));

        return this.length;
    }
}
