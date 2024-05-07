/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const px0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };
const px0_1920 = { ...Array.from(Array(1921)).map((_, i) => `${i}px`) };

const customUtilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.flex-center': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    },
    '.flex-col-center': {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
    },
  });
});

const customVariant = plugin(({ addVariant }) => {
  addVariant('all', '& *');
  addVariant('under', '& > *');
});

module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: px0_50,
      width: px0_1920,
      height: px0_1920,
      minWidth: px0_1920,
      maxWidth: px0_1920,
      minHeight: px0_1920,
      maxHeight: px0_1920,
      fontSize: px0_100,
      padding: px0_100,
      margin: px0_100,
      spacing: px0_300,
    },
    screens: {
      md: '748px',
      lg: '1000px',
      xl: '1440px',
    },
  },
  plugins: [customUtilities, customVariant],
};
