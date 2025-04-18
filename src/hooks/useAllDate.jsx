import React from 'react';
import moment from 'moment-hijri';
import Calendar from 'date-bengali-revised';

const useAllDate = () => {
  const convertToBanglaDigits = number => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().replace(/\d/g, digit => banglaDigits[digit]);
  };

  const hijriMonthsInBangla = {
    Muharram: 'মহররম',
    Safar: 'সফর',
    'Rabi’al-awwal': 'রবিউল আউয়াল',
    'Rabi’al-thani': 'রবিউস সানি',
    'Jumada al-awwal': 'জুমাদাল উলা',
    'Jumada al-thani': 'জুমাদাস সানি',
    Rajab: 'রজব',
    'Sha’ban': 'শাবান',
    Ramadhan: 'রমজান',
    Shawwal: 'শাওয়াল',
    'Dhu al-Qi’dah': 'জিলকদ',
    'Dhu al-Hijjah': 'জিলহজ',
  };

  const currentDate = moment().locale('en');
  const banglaCalendar = new Calendar();
  const banglaDate = banglaCalendar.fromGregorian(
    currentDate.year(),
    currentDate.month() + 1, // Months are zero-based in JavaScript
    currentDate.date() - 1, // "-1" Fix banglai date extra 1 day showing problem
  );

  // Format Bangla date as "Day Month, Year"
  const formattedBanglaDate = new Calendar(
    banglaDate.year,
    banglaDate.month,
    banglaDate.day,
  ).format('D MMMM, Y');

  // Get Hijri date using moment-hijri
  const hijriDate = currentDate.subtract(1, 'day').format('iD iMMMM iYYYY');
  const [hijriDay, hijriMonth, hijriYear] = hijriDate.split(' ');

  // Format Hijri date in Bangla
  const formattedHijriDateInBangla = `${hijriMonthsInBangla[hijriMonth]} ${convertToBanglaDigits(hijriDay)}, ${convertToBanglaDigits(hijriYear)} হিজরী`;

  const formattedKhristabdaDate = moment().locale('en').format('D MMM, YYYY');

  return {
    formattedBanglaDate,
    formattedHijriDateInBangla,
    formattedKhristabdaDate,
  };
};

export default useAllDate;
