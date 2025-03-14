import { Anek_Bangla } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import SettingBar from '@/components/settingBar/SettingBar';
import Providers from '@/context/Providers';

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
      <body className={`${anekBangla.className} custom-scrollbar antialiased`}>
        <Providers>
          <main>
            {children}
            <SettingBar />
          </main>
        </Providers>

        <Toaster />
      </body>
    </html>
  );
}
