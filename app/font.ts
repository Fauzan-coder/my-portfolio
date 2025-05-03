// app/fonts.ts
import { Anton, Poppins } from 'next/font/google';

// Load Anton font
export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
});

// Load Poppins font with multiple weights
export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});