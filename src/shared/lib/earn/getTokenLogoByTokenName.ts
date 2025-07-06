import btc from '../../assets/tokens/btc.svg';
import eth from '../../assets/tokens/eth.svg';
import solana from '../../assets/tokens/solana.svg';
import usdc from '../../assets/tokens/usdc.svg';
import usde from '../../assets/tokens/usde.svg';
import usdt from '../../assets/tokens/usdt.svg';
import { AVAILABLE_TOKENS } from '../earnings';

const tokenLogos: Record<(typeof AVAILABLE_TOKENS)[number], string> = {
    usdt: usdt,
    usdc: usdc,
    usde: usde,
    btc: btc,
    eth: eth,
    sol: solana,
};

export const getTokenLogoByTokenName = (tokenName: string): string | undefined => {
    return tokenLogos[tokenName.toLowerCase()];
};
