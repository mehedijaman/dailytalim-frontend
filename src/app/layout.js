import {
  Anek_Bangla,
  Noto_Serif_Bengali,
  Scheherazade_New,
} from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import SettingBar from '@/components/settingBar/SettingBar';
import Providers from '@/context/Providers';

const anekBangla = Anek_Bangla({
  variable: '--anek-bangla',
  subsets: ['bengali'],
});
const notoSerifBengali = Noto_Serif_Bengali({
  variable: '--noto-serif-banglai',
  subsets: ['bengali'],
});

const scheherazadeNew = Scheherazade_New({
  weight: ['400', '500', '600', '700'],
  variable: '--scheherazade-new',
  subsets: ['arabic'],
});

export const metadata = {
  title: 'Daily Talim - প্রতিদিনের হাদিস ও ইসলামিক শিক্ষা',
  description:
    'Daily Talim - প্রতিদিন নতুন হাদিস, ইসলামিক জ্ঞান, নামাজের সময়সূচি ও আরও অনেক কিছু জানুন। সহজে পড়ুন, শেয়ার করুন এবং সংরক্ষণ করুন।',
  keywords: [
    'Daily Talim',
    'হাদিস',
    'ইসলামিক শিক্ষা',
    'নামাজের সময়সূচি',
    'বাংলা হাদিস',
    'হাদিসের গ্রন্থ',
    'হাদিস সার্চ',
    'ইসলামিক কনটেন্ট',
  ],
  authors: [{ name: 'Daily Talim Team', url: 'https://dailytalim.com' }],
  icons: {
    icon: '/logo_dark.png',
  },
  openGraph: {
    title: 'Daily Talim - প্রতিদিনের হাদিস ও ইসলামিক শিক্ষা',
    description:
      'Daily Talim - প্রতিদিন নতুন হাদিস, ইসলামিক জ্ঞান, নামাজের সময়সূচি ও আরও অনেক কিছু জানুন। সহজে পড়ুন, শেয়ার করুন এবং সংরক্ষণ করুন।',
    url: 'https://dailytalim.com',
    type: 'website',
    images: [
      {
        url: '/logo_dark.png',
        width: 1200,
        height: 630,
        alt: 'Daily Talim - প্রতিদিনের হাদিস ও ইসলামিক শিক্ষা',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DailyTalimBD',
    title: 'Daily Talim - প্রতিদিনের হাদিস ও ইসলামিক শিক্ষা',
    description:
      'প্রতিদিন নতুন হাদিস ও ইসলামিক শিক্ষার এক অনন্য প্ল্যাটফর্ম। সহজে পড়ুন, শেয়ার করুন এবং সংরক্ষণ করুন।',
    images: ['/logo_dark.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${anekBangla.className} ${notoSerifBengali.variable} ${scheherazadeNew.variable} custom-scrollbar antialiased`}
      >
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
