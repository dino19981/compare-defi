export interface OkxEarnsDto {
    data: OkxEarnDto[];
}

export interface OkxEarnDto {
    ccy: string;
    productId: string;
    // number
    term: string;
    apy: string;
    earningData: [
        {
            ccy: 'DOT';
            earningType: '0';
        },
    ];
    // ['28D']
    redeemPeriod: string[];
}
