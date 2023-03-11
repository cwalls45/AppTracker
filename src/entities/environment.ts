export interface IState {
    name: string;
    abbreviation: string;
    label: string;
}

export enum TurfType {
    BENTGRASS = 'Bentgrass',
    POA_ANNUA = 'Poa Annua',
    KENTUCKY_BLUEGRASS = 'Kentucky Bluegrass',
    ROUGH_BLUEGRASS = 'Rough Bluegrass',
    TALL_FESCUE = 'Tall Fescue',
    FINE_FESCUE = 'Fine Fescue',
    PERENNIAL_RYE = 'Perennial Ryegrass',
    ANNUAL_RYE = 'Annual Ryegrass',
    BERMUDA = 'Bermuda',
    ZOYSIA = 'Zoysia',
    BAHIA = 'Bahia',
    ST_AUGUSTINE = 'St. Augustine grass',
    CENTIPEDE = 'Centipede grass',
    BUFFALOGRASS = 'Buffalograss',
    CARPETGRASS = 'Carpetgrass'
}

export const turfTypeOptions = [
    TurfType.ANNUAL_RYE,
    TurfType.BAHIA,
    TurfType.BENTGRASS,
    TurfType.BERMUDA,
    TurfType.BUFFALOGRASS,
    TurfType.CARPETGRASS,
    TurfType.CENTIPEDE,
    TurfType.FINE_FESCUE,
    TurfType.KENTUCKY_BLUEGRASS,
    TurfType.PERENNIAL_RYE,
    TurfType.POA_ANNUA,
    TurfType.ROUGH_BLUEGRASS,
    TurfType.ST_AUGUSTINE,
    TurfType.TALL_FESCUE,
    TurfType.ZOYSIA
]


export interface ICourseArea {
    area: string;
    size: string;
    sizeUnit: 'Acres' | 'Sq. Feet' | '';
    turfType: TurfType | ''
}

export const createInitialCourseArea = (): ICourseArea => ({
    area: '',
    size: '',
    sizeUnit: '',
    turfType: ''
})