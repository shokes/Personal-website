module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },

      colors: {
        'text-link': 'var(--text-link)',
        'text-color': 'var(--text-color)',
        background: 'var(--background)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};

//  font-family: 'IBM Plex Mono', monospace;
//v'Playfair Display', serif;
