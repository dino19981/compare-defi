const AVAILABLE_TOKENS = ['usdt', 'usdc', 'eth', 'btc', 'usde'].map((token) => token.toUpperCase());

export const isAvailableTokenForEarnings = (token: string) => AVAILABLE_TOKENS.includes(token.toUpperCase());
