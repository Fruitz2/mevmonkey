# MEV MONKEY — `mevmonkey.com` remake

> the monkey eats first.
>
> a solana mev lab — low-liquidity sandwich operator. the bot runs the shift, $MONK is the keycard.

A Vite + React + Tailwind landing page. Deploys to Vercel in one command.

---

## 1. Install & run

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## 2. Build

```bash
npm run build
```

Output in `dist/`.

## 3. Deploy

```bash
npx vercel deploy
```

Or push to GitHub and import on vercel.com — Vite is auto-detected.

---

## 4. Locked design system

| Token | Value | Where |
|---|---|---|
| `ink` | `#0a0a0a` | true black, all page backgrounds |
| `jungle` | `#0d1208` | green-shifted black for panel surfaces |
| `wire` | `#d9ff00` | primary accent — the color of the shades |
| `drained` | `#a8c900` | hover/dimmed wire |
| `bone` | `#f4ead5` | off-white body text |
| `concrete` | `#8a8579` | muted terminal-grade grey |
| `siren` | `#ff3b1f` | error / victim markers — used sparingly |

Fonts (Google):
- **Stardos Stencil** — stenciled display type, the "graffiti" voice
- **Space Grotesk** — alternative display, currently unused (kept as fallback option)
- **JetBrains Mono** — all terminal output, tx hashes, latencies, addresses
- **Inter** — body copy

The collision between *Stardos Stencil* headers and *Inter* body is deliberate. Graffiti voice ⇄ clean operator voice. Don't unify them — they're doing a job apart.

## 5. What you'll want to edit before launching

| File | Replace |
|---|---|
| `src/components/Hero.tsx` | `PASTE_YOUR_MONK_CONTRACT_ADDRESS_HERE` |
| `src/components/Hero.tsx` | the three CTA `<a>` hrefs (pump.fun, telegram bot, whitepaper) |
| `src/components/Footer.tsx` | the four social links (X, telegram, pump.fun, solscan) |
| `index.html` | `og:url` and `og:image` URLs once you have a domain |
| `index.html` | `twitter:site` handle |
| `public/operator.png` | swap if you want a different mascot render |

## 6. Wiring real data later (optional)

The page is built to be live. Right now the streams are believable fakes (see `src/lib/fake.ts`).
When you're ready:

- **Top ticker bar** (`src/components/TopTicker.tsx`) — replace `useMemo` with a fetch from your sandwich-log API.
- **Mempool rail** (`src/components/MempoolRail.tsx`) — pipe a websocket from `solana-mainnet.rpc.fastnode` (or whatever node) into `setLines`.
- **Operator stats** (`src/components/Operator.tsx`) — fetch from your bot's `/stats` endpoint every ~5s.
- **Exploits feed** (`src/components/ExploitsFeed.tsx`) — same, hit `/api/exploits?limit=10`.
- **Status bar** (`src/components/StatusBar.tsx`) — pull real `getSlot()` from a Solana RPC.

The hardest part of giving a site like this credibility is *making the data feel real*. It doesn't have
to be real-real on day 1 — but the patterns (slippage 4–38%, profits 0.04–1.8 SOL, latencies 22–71ms,
hit-rate ~83%) should be calibrated to look like actual MEV economics, not lottery numbers.

## 7. Notes on bundle size

- 92 KB JS gzipped, 6 KB CSS gzipped.
- All visuals are SVG or CSS. Only one image asset (the monkey portrait).
- No audio dependencies. No physics libraries.
- This is roughly the smallest a "professional MEV operator" landing can be while still feeling like a place.

## 8. Social link preview (OG)

`public/og.png` is rendered. It re-uses the monkey portrait. If you want to regenerate after editing:

```bash
pip install cairosvg --break-system-packages
cd public && python3 -c "
import base64, cairosvg
b64 = base64.b64encode(open('operator.png','rb').read()).decode()
svg = open('og.svg').read().replace('href=\"/operator.png\"', f'href=\"data:image/png;base64,{b64}\"')
open('og.embed.svg','w').write(svg)
cairosvg.svg2png(url='og.embed.svg', write_to='og.png', output_width=1200, output_height=630)
"
rm public/og.embed.svg
```

Test it with [opengraph.xyz](https://www.opengraph.xyz) after you deploy.

---

## 9. The voice — what kills the bit

The site survives only as long as the voice stays in character. Some rules:

- **Never aspirational.** No "wagmi," no "to the moon," no rocket emojis. The operator does its job.
  It doesn't get hyped.
- **Past tense for performance, present tense for state.** "MNK-01 has been on shift for 14 days"
  not "MNK-01 will outperform the market."
- **Confident, not loud.** Predator energy. The monkey doesn't shout. It already ate.
- **Tech-credible.** Real terms (mempool, jito, slippage, tvl) used correctly. Don't fake the
  technical layer — it's what separates this from generic memecoin energy.
- **One joke per page section, max.** Over-joking erodes the believability. The mention that
  "legal counsel is also brett, who is not actually a lawyer" works precisely because the
  rest of the surrounding copy is straight.

When you write new copy for X, telegram, or future sections, ask: *does this sound like a thing
the operator would say at 3am, alone, between sandwich attempts?* If yes, ship it. If it sounds
like a marketing team meeting agreed on it, kill it.

---

*the monkey will outlive this site.*
