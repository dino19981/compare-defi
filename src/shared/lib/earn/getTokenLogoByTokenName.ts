import btc from '../../assets/tokens/btc.svg';
import eth from '../../assets/tokens/eth.svg';
import usdc from '../../assets/tokens/usdc.svg';
import usde from '../../assets/tokens/usde.svg';
import usdt from '../../assets/tokens/usdt.svg';

const tokenLogos: Record<string, string> = {
    usdt: usdt,
    usdc: usdc,
    usde: usde,
    btc: btc,
    eth: eth,
};

export const getTokenLogoByTokenName = (tokenName: string): string | undefined => {
    return tokenLogos[tokenName.toLowerCase()];
};
