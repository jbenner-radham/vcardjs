import { EOL } from '@vcard/vcard4-meta';
import AdrProperty, { AdrPropertyLike } from './properties/AdrProperty';
import AdrPropertyArray from './properties/arrays/AdrPropertyArray';
import AnniversaryProperty, { AnniversaryPropertyLike } from './properties/AnniversaryProperty';
import BdayProperty, { BdayPropertyLike } from './properties/BdayProperty';
import BirthplaceProperty, { BirthplacePropertyLike } from './properties/BirthplaceProperty';
import CaladruriProperty, { CaladruriPropertyLike } from './properties/CaladruriProperty';
import CaladruriPropertyArray from './properties/arrays/CaladruriPropertyArray';
import CaluriProperty, { CaluriPropertyLike } from './properties/CaluriProperty';
import CaluriPropertyArray from './properties/arrays/CaluriPropertyArray';
import CategoriesProperty, { CategoriesPropertyLike } from './properties/CategoriesProperty';
import CategoriesPropertyArray from './properties/arrays/CategoriesPropertyArray';
import ClientpidmapProperty, { ClientpidmapPropertyLike } from './properties/ClientpidmapProperty';
import ClientpidmapPropertyArray from './properties/arrays/ClientpidmapPropertyArray';
import ContactUriProperty, { ContactUriPropertyLike } from './properties/ContactUriProperty';
import ContactUriPropertyArray from './properties/arrays/ContactUriPropertyArray';
import DeathdateProperty, { DeathdatePropertyLike } from './properties/DeathdateProperty';
import DeathplaceProperty, { DeathplacePropertyLike } from './properties/DeathplaceProperty';
import EmailProperty, { EmailPropertyLike } from './properties/EmailProperty';
import EmailPropertyArray from './properties/arrays/EmailPropertyArray';
import ExpertiseProperty, { ExpertisePropertyLike } from './properties/ExpertiseProperty';
import ExpertisePropertyArray from './properties/arrays/ExpertisePropertyArray';
import FburlProperty, { FburlPropertyLike } from './properties/FburlProperty';
import FburlPropertyArray from './properties/arrays/FburlPropertyArray';
import FnProperty, { FnPropertyLike } from './properties/FnProperty';
import FnPropertyArray from './properties/arrays/FnPropertyArray';
import GenderProperty, { GenderPropertyLike } from './properties/GenderProperty';
import GeoProperty, { GeoPropertyLike } from './properties/GeoProperty';
import GeoPropertyArray from './properties/arrays/GeoPropertyArray';
import HobbyProperty, { HobbyPropertyLike } from './properties/HobbyProperty';
import HobbyPropertyArray from './properties/arrays/HobbyPropertyArray';
import ImppProperty, { ImppPropertyLike } from './properties/ImppProperty';
import ImppPropertyArray from './properties/arrays/ImppPropertyArray';
import isNotEmptyString from './util/is-not-empty-string';
import InterestProperty, { InterestPropertyLike } from './properties/InterestProperty';
import InterestPropertyArray from './properties/arrays/InterestPropertyArray';
import KeyProperty, { KeyPropertyLike } from './properties/KeyProperty';
import KeyPropertyArray from './properties/arrays/KeyPropertyArray';
import KindProperty, { KindPropertyLike } from './properties/KindProperty';
import LangProperty, { LangPropertyLike } from './properties/LangProperty';
import LangPropertyArray from './properties/arrays/LangPropertyArray';
import LogoProperty, { LogoPropertyLike } from './properties/LogoProperty';
import LogoPropertyArray from './properties/arrays/LogoPropertyArray';
import MemberProperty, { MemberPropertyLike } from './properties/MemberProperty';
import MemberPropertyArray from './properties/arrays/MemberPropertyArray';
import NProperty, { NPropertyLike } from './properties/NProperty';
import NicknameProperty, { NicknamePropertyLike } from './properties/NicknameProperty';
import NicknamePropertyArray from './properties/arrays/NicknamePropertyArray';
import NoteProperty, { NotePropertyLike } from './properties/NoteProperty';
import NotePropertyArray from './properties/arrays/NotePropertyArray';
import NullProperty from './properties/NullProperty';
import OrgProperty, { OrgPropertyLike } from './properties/OrgProperty';
import OrgPropertyArray from './properties/arrays/OrgPropertyArray';
import OrgDirectoryProperty, { OrgDirectoryPropertyLike } from './properties/OrgDirectoryProperty';
import OrgDirectoryPropertyArray from './properties/arrays/OrgDirectoryPropertyArray';
import PhotoProperty, { PhotoPropertyLike } from './properties/PhotoProperty';
import PhotoPropertyArray from './properties/arrays/PhotoPropertyArray';
import ProdidProperty, { ProdidPropertyLike } from './properties/ProdidProperty';
import RelatedProperty, { RelatedPropertyLike } from './properties/RelatedProperty';
import RelatedPropertyArray from './properties/arrays/RelatedPropertyArray';
import RevProperty, { RevPropertyLike } from './properties/RevProperty';
import RoleProperty, { RolePropertyLike } from './properties/RoleProperty';
import RolePropertyArray from './properties/arrays/RolePropertyArray';
import SoundProperty, { SoundPropertyLike } from './properties/SoundProperty';
import SoundPropertyArray from './properties/arrays/SoundPropertyArray';
import SourceProperty, { SourcePropertyLike } from './properties/SourceProperty';
import SourcePropertyArray from './properties/arrays/SourcePropertyArray';
import TelProperty, { TelPropertyLike } from './properties/TelProperty';
import TelPropertyArray from './properties/arrays/TelPropertyArray';
import TitleProperty, { TitlePropertyLike } from './properties/TitleProperty';
import TitlePropertyArray from './properties/arrays/TitlePropertyArray';
import TzProperty, { TzPropertyLike } from './properties/TzProperty';
import TzPropertyArray from './properties/arrays/TzPropertyArray';
import toString from './util/to-string';
import UidProperty, { UidPropertyLike } from './properties/UidProperty';
import UrlProperty, { UrlPropertyLike } from './properties/UrlProperty';
import UrlPropertyArray from './properties/arrays/UrlPropertyArray';
import VersionProperty, { VersionPropertyLike } from './properties/VersionProperty';
import XmlProperty, { XmlPropertyLike } from './properties/XmlProperty';
import XmlPropertyArray from './properties/arrays/XmlPropertyArray';

export interface Vcard4GeneratorConfig {
    adr?: AdrPropertyLike;
    anniversary?: AnniversaryPropertyLike;
    bday?: BdayPropertyLike;
    birthplace?: BirthplacePropertyLike;
    caluri?: CaluriPropertyLike;
    caladruri?: CaladruriPropertyLike;
    categories?: CategoriesPropertyLike;
    clientpidmap?: ClientpidmapPropertyLike;
    contactUri?: ContactUriPropertyLike;
    deathdate?: DeathdatePropertyLike;
    deathplace?: DeathplacePropertyLike;
    email?: EmailPropertyLike;
    expertise?: ExpertisePropertyLike;
    fburl?: FburlPropertyLike;
    fn: FnPropertyLike;
    gender?: GenderPropertyLike;
    geo?: GeoPropertyLike;
    hobby?: HobbyPropertyLike;
    impp?: ImppPropertyLike;
    interest?: InterestPropertyLike;
    key?: KeyPropertyLike;
    kind?: KindPropertyLike;
    lang?: LangPropertyLike;
    logo?: LogoPropertyLike;
    member?: MemberPropertyLike;
    n?: NPropertyLike;
    nickname?: NicknamePropertyLike;
    note?: NotePropertyLike;
    org?: OrgPropertyLike;
    orgDirectory?: OrgDirectoryPropertyLike;
    photo?: PhotoPropertyLike;
    prodid?: ProdidPropertyLike;
    related?: RelatedPropertyLike;
    rev?: RevPropertyLike;
    role?: RolePropertyLike;
    sound?: SoundPropertyLike;
    source?: SourcePropertyLike;
    tel?: TelPropertyLike;
    title?: TitlePropertyLike;
    tz?: TzPropertyLike;
    uid?: UidPropertyLike;
    url?: UrlPropertyLike;
    version?: VersionProperty;
    xml?: XmlPropertyLike;
}

export default class Vcard4Generator {
    adr: AdrPropertyArray;

    anniversary: AnniversaryPropertyLike | NullProperty;

    bday: BdayPropertyLike | NullProperty;

    birthplace: BirthplacePropertyLike | NullProperty;

    caluri: CaluriPropertyArray;

    caladruri: CaladruriPropertyArray;

    categories: CategoriesPropertyArray;

    clientpidmap: ClientpidmapPropertyArray;

    contactUri: ContactUriPropertyArray;

    deathdate: DeathdatePropertyLike | NullProperty;

    deathplace: DeathplacePropertyLike | NullProperty;

    email: EmailPropertyArray;

    expertise: ExpertisePropertyArray;

    fburl: FburlPropertyArray;

    fn: FnPropertyArray;

    gender: GenderPropertyLike | NullProperty;

    geo: GeoPropertyArray;

    hobby: HobbyPropertyArray;

    impp: ImppPropertyArray;

    interest: InterestPropertyArray;

    key: KeyPropertyArray;

    kind: KindPropertyLike | NullProperty;

    lang: LangPropertyArray;

    logo: LogoPropertyArray;

    member: MemberPropertyArray;

    n: NPropertyLike | NullProperty;

    nickname: NicknamePropertyArray;

    note: NotePropertyArray;

    org: OrgPropertyArray;

    orgDirectory: OrgDirectoryPropertyArray;

    photo: PhotoPropertyArray;

    prodid: ProdidPropertyLike | NullProperty;

    related: RelatedPropertyArray;

    rev: RevPropertyLike | NullProperty;

    role: RolePropertyArray;

    sound: SoundPropertyArray;

    source: SourcePropertyArray;

    tel: TelPropertyArray;

    title: TitlePropertyArray;

    tz: TzPropertyArray;

    uid: UidPropertyLike | NullProperty;

    url: UrlPropertyArray;

    version: VersionPropertyLike;

    xml: XmlPropertyArray;

    constructor(config: Vcard4GeneratorConfig) {
        const {
            adr,
            anniversary,
            bday,
            birthplace,
            caluri,
            caladruri,
            categories,
            clientpidmap,
            contactUri,
            deathdate,
            deathplace,
            email,
            expertise,
            fburl,
            fn,
            gender,
            geo,
            hobby,
            impp,
            interest,
            key,
            kind,
            lang,
            logo,
            member,
            n,
            nickname,
            note,
            org,
            orgDirectory,
            photo,
            prodid,
            related,
            rev,
            role,
            sound,
            source,
            tel,
            title,
            tz,
            uid,
            url,
            version,
            xml
        } = config;
        this.adr = new AdrPropertyArray();
        this.caluri = new CaluriPropertyArray();
        this.caladruri = new CaladruriPropertyArray();
        this.categories = new CategoriesPropertyArray();
        this.clientpidmap = new ClientpidmapPropertyArray();
        this.contactUri = new ContactUriPropertyArray();
        this.email = new EmailPropertyArray();
        this.expertise = new ExpertisePropertyArray();
        this.fburl = new FburlPropertyArray();
        this.fn = new FnPropertyArray();
        this.geo = new GeoPropertyArray();
        this.hobby = new HobbyPropertyArray();
        this.impp = new ImppPropertyArray();
        this.interest = new InterestPropertyArray();
        this.key = new KeyPropertyArray();
        this.lang = new LangPropertyArray();
        this.logo = new LogoPropertyArray();
        this.member = new MemberPropertyArray();
        this.nickname = new NicknamePropertyArray();
        this.note = new NotePropertyArray();
        this.org = new OrgPropertyArray();
        this.orgDirectory = new OrgDirectoryPropertyArray();
        this.photo = new PhotoPropertyArray();
        this.related = new RelatedPropertyArray();
        this.role = new RolePropertyArray();
        this.sound = new SoundPropertyArray();
        this.source = new SourcePropertyArray();
        this.tel = new TelPropertyArray();
        this.title = new TitlePropertyArray();
        this.tz = new TzPropertyArray();
        this.url = new UrlPropertyArray();
        this.xml = new XmlPropertyArray();
        adr && this.adr.push(adr);
        caluri && this.caluri.push(caluri);
        caladruri && this.caladruri.push(caladruri);
        categories && this.categories.push(categories);
        clientpidmap && this.clientpidmap.push(clientpidmap);
        contactUri && this.contactUri.push(contactUri);
        email && this.email.push(email);
        expertise && this.expertise.push(expertise);
        fburl && this.fburl.push(fburl);
        fn && this.fn.push(fn);
        geo && this.geo.push(geo);
        hobby && this.hobby.push(hobby);
        impp && this.impp.push(impp);
        interest && this.interest.push(interest);
        key && this.key.push(key);
        lang && this.lang.push(lang);
        logo && this.logo.push(logo);
        member && this.member.push(member);
        nickname && this.nickname.push(nickname);
        note && this.note.push(note);
        org && this.org.push(org);
        orgDirectory && this.orgDirectory.push(orgDirectory);
        photo && this.photo.push(photo);
        related && this.related.push(related);
        role && this.role.push(role);
        sound && this.sound.push(sound);
        source && this.source.push(source);
        tel && this.tel.push(tel);
        title && this.title.push(title);
        tz && this.tz.push(tz);
        url && this.url.push(url);
        xml && this.xml.push(xml);
        this.anniversary = anniversary ? AnniversaryProperty.factory(anniversary) : new NullProperty();
        this.bday = bday ? BdayProperty.factory(bday) : new NullProperty();
        this.birthplace = birthplace ? BirthplaceProperty.factory(birthplace) : new NullProperty();
        this.deathdate = deathdate ? DeathdateProperty.factory(deathdate) : new NullProperty();
        this.deathplace = deathplace ? DeathplaceProperty.factory(deathplace) : new NullProperty();
        this.gender = gender ? GenderProperty.factory(gender) : new NullProperty();
        this.kind = kind ? KindProperty.factory(kind) : new NullProperty();
        this.n = n ? NProperty.factory(n) : new NullProperty();
        this.prodid = prodid ? ProdidProperty.factory(prodid) : new NullProperty();
        this.rev = rev ? RevProperty.factory(rev) : new NullProperty();
        this.uid = uid ? UidProperty.factory(uid) : new NullProperty();
        this.version = version ? VersionProperty.factory(version) : new VersionProperty();
    }

    toString(): string {
        const properties = [
            'BEGIN:VCARD',
            this.version.toString(),
            ...this.adr.map(toString),
            this.anniversary.toString(),
            this.bday.toString(),
            this.birthplace.toString(),
            ...this.caluri.map(toString),
            ...this.caladruri.map(toString),
            ...this.categories.map(toString),
            ...this.clientpidmap.map(toString),
            ...this.contactUri.map(toString),
            this.deathdate.toString(),
            this.deathplace.toString(),
            ...this.email.map(toString),
            ...this.expertise.map(toString),
            ...this.fburl.map(toString),
            ...this.fn.map(toString),
            this.gender.toString(),
            ...this.geo.map(toString),
            ...this.hobby.map(toString),
            ...this.impp.map(toString),
            ...this.interest.map(toString),
            ...this.key.map(toString),
            this.kind.toString(),
            ...this.lang.map(toString),
            ...this.logo.map(toString),
            ...this.member.map(toString),
            this.n.toString(),
            ...this.nickname.map(toString),
            ...this.note.map(toString),
            ...this.org.map(toString),
            ...this.orgDirectory.map(toString),
            ...this.photo.map(toString),
            this.prodid.toString(),
            ...this.related.map(toString),
            this.rev.toString(),
            ...this.role.map(toString),
            ...this.sound.map(toString),
            ...this.source.map(toString),
            ...this.tel.map(toString),
            ...this.title.map(toString),
            ...this.tz.map(toString),
            this.uid.toString(),
            ...this.url.map(toString),
            ...this.xml.map(toString),
            'END:VCARD'
        ];

        return properties
            .filter(isNotEmptyString)
            .join(EOL);
    }

    validate(): void {
        if (!(this.version instanceof VersionProperty))
            throw new TypeError('The VERSION property is invalid');

        if (this.fn.length === 0)
            throw new TypeError('The FN property is required');

        if (!this.adr.every(adr => adr instanceof AdrProperty))
            throw new TypeError('One or more ADR properties are invalid');

        if (!(this.anniversary instanceof AnniversaryProperty))
            throw new TypeError('The ANNIVERSARY property is invalid');

        if (!(this.bday instanceof BdayProperty))
            throw new TypeError('The BDAY property is invalid');

        if (!(this.birthplace instanceof BirthplaceProperty))
            throw new TypeError('The BIRTHPLACE property is invalid');

        if (!this.caluri.every(caluri => caluri instanceof CaluriProperty))
            throw new TypeError('One or more CALURI properties are invalid');

        if (!this.caladruri.every(caladruri => caladruri instanceof CaladruriProperty))
            throw new TypeError('One or more CALADRURI properties are invalid');

        if (!this.categories.every(categories => categories instanceof CategoriesProperty))
            throw new TypeError('One or more CATEGORIES properties are invalid');

        if (!this.clientpidmap.every(clientpidmap => clientpidmap instanceof ClientpidmapProperty))
            throw new TypeError('One or more CLIENTPIDMAP properties are invalid');

        if (!this.contactUri.every(contactUri => contactUri instanceof ContactUriProperty))
            throw new TypeError('One or more CONTACT-URI properties are invalid');

        if (!(this.deathdate instanceof DeathdateProperty))
            throw new TypeError('The DEATHDATE property is invalid');

        if (!(this.deathplace instanceof DeathplaceProperty))
            throw new TypeError('The DEATHPLACE property is invalid');

        if (!this.email.every(email => email instanceof EmailProperty))
            throw new TypeError('One or more EMAIL properties are invalid');

        if (!this.expertise.every(expertise => expertise instanceof ExpertiseProperty))
            throw new TypeError('One or more EXPERTISE properties are invalid');

        if (!this.fburl.every(fburl => fburl instanceof FburlProperty))
            throw new TypeError('One or more FBURL properties are invalid');

        if (!this.fn.every(fn => fn instanceof FnProperty))
            throw new TypeError('One or more FN properties are invalid');

        if (!this.geo.every(geo => geo instanceof GeoProperty))
            throw new TypeError('One or more GEO properties are invalid');

        if (!this.hobby.every(hobby => hobby instanceof HobbyProperty))
            throw new TypeError('One or more HOBBY properties are invalid');

        if (!this.impp.every(impp => impp instanceof ImppProperty))
            throw new TypeError('One or more IMPP properties are invalid');

        if (!this.interest.every(interest => interest instanceof InterestProperty))
            throw new TypeError('One or more INTEREST properties are invalid');

        if (!this.key.every(key => key instanceof KeyProperty))
            throw new TypeError('One or more KEY properties are invalid');

        if (!this.lang.every(lang => lang instanceof LangProperty))
            throw new TypeError('One or more LANG properties are invalid');

        if (!this.logo.every(logo => logo instanceof LogoProperty))
            throw new TypeError('One or more LOGO properties are invalid');

        if (!this.member.every(member => member instanceof MemberProperty))
            throw new TypeError('One or more MEMBER properties are invalid');

        if (!this.nickname.every(nickname => nickname instanceof NicknameProperty))
            throw new TypeError('One or more NICKNAME properties are invalid');

        if (!this.note.every(note => note instanceof NoteProperty))
            throw new TypeError('One or more NOTE properties are invalid');

        if (!this.org.every(org => org instanceof OrgProperty))
            throw new TypeError('One or more ORG properties are invalid');

        if (!this.orgDirectory.every(orgDirectory => orgDirectory instanceof OrgDirectoryProperty))
            throw new TypeError('One or more ORG-DIRECTORY properties are invalid');

        if (!this.photo.every(photo => photo instanceof PhotoProperty))
            throw new TypeError('One or more PHOTO properties are invalid');

        if (!(this.prodid instanceof ProdidProperty))
            throw new TypeError('The PRODID property is invalid');

        if (!this.related.every(related => related instanceof RelatedProperty))
            throw new TypeError('One or more RELATED properties are invalid');

        if (!(this.rev instanceof RevProperty))
            throw new TypeError('The REV property is invalid');

        if (!this.role.every(role => role instanceof RoleProperty))
            throw new TypeError('One or more ROLE properties are invalid');

        if (!this.sound.every(sound => sound instanceof SoundProperty))
            throw new TypeError('One or more SOUND properties are invalid');

        if (!this.source.every(source => source instanceof SourceProperty))
            throw new TypeError('One or more SOURCE properties are invalid');

        if (!this.tel.every(tel => tel instanceof TelProperty))
            throw new TypeError('One or more TEL properties are invalid');

        if (!this.title.every(title => title instanceof TitleProperty))
            throw new TypeError('One or more TITLE properties are invalid');

        if (!this.tz.every(tz => tz instanceof TzProperty))
            throw new TypeError('One or more TZ properties are invalid');

        if (!(this.uid instanceof UidProperty))
            throw new TypeError('The UID property is invalid');

        if (!this.url.every(url => url instanceof UrlProperty))
            throw new TypeError('One or more URL properties are invalid');

        if (!this.xml.every(xml => xml instanceof XmlProperty))
            throw new TypeError('One or more XML properties are invalid');
    }
}
