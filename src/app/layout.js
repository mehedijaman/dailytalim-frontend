import { Anek_Bangla } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

const anekBangla = Anek_Bangla({
  variable: '--anek-bangla',
  subsets: ['bengali'],
});

export const metadata = {
  title: 'Daily Talim',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo_dark.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${anekBangla.className} antialiased`}>
        <ThemeProvider
          defaultTheme="light"
          enableSystem={true}
          attribute="class"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
