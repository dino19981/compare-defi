export interface EarnItem {
    id: string;
    token: EarnItemToken;
    periodType: 'flexible' | 'fixed';
    platform: EarnItemPlatform;
    rates: EarnItemRate[];
    productLevel: EarnItemLevel;
}

export enum EarnItemLevel {
    Beginner = 'beginner',
    Normal = 'normal',
    VIP = 'VIP',
}

export interface EarnItemRate {
    rateLevel: number;
    currentApy: number;
}

export interface EarnItemToken {
    name: string;
    icon: string | undefined;
}

export interface EarnItemRate {
    rateLevel: number;
    currentApy: number;
}

interface EarnItemPlatform {
    name: string;
    icon: string;
    link: string;
}
