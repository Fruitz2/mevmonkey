/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        jungle: '#0d1208',
        wire: '#d9ff00',
        drained: '#a8c900',
        bone: '#f4ead5',
        concrete: '#8a8579',
        siren: '#ff3b1f',
        panel: '#0f1410',
        grid: '#1a2010',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        stencil: ['"Stardos Stencil"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        scrollX: 'scrollX 60s linear infinite',
        blink: 'blink 1.1s steps(1) infinite',
        pulseDot: 'pulseDot 1.4s ease-in-out infinite',
        rainDown: 'rainDown 14s linear infinite',
        scanlines: 'scanlines 8s linear infinite',
        glitch: 'glitch 6s steps(1) infinite',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
        rainDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
        glitch: {
          '0%, 92%, 100%': { transform: 'translate(0)', filter: 'none' },
          '93%': { transform: 'translate(-1px, 1px)', filter: 'hue-rotate(8deg)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '95%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}
