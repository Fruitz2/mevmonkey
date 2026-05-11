// helpers for the illustrative anatomy section.
// these are intentionally not random per-render so the page is stable.

const ALPHA = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

export function fakeAddr(len = 44): string {
  let s = ''
  for (let i = 0; i < len; i++) s += ALPHA[Math.floor(Math.random() * ALPHA.length)]
  return s
}

export function shortAddr(a: string, head = 4, tail = 4): string {
  return `${a.slice(0, head)}…${a.slice(-tail)}`
}

const TICKERS = ['WIFHAT', 'CHONK', 'POPCAT', 'MUMU', 'GIGA', 'BONK', 'BOME', 'PEPECOIN']
export function fakeTicker(): string {
  return TICKERS[Math.floor(Math.random() * TICKERS.length)]
}
