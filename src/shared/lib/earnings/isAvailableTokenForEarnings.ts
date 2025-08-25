export const AVAILABLE_TOKENS_FOR_EARN = ['usdt', 'usdc', 'eth', 'btc', 'usde', 'sol'].map(
  (token) => token.toUpperCase(),
);

export const isAvailableTokenForEarnings = (token: string) =>
  AVAILABLE_TOKENS_FOR_EARN.includes(token.toUpperCase());
