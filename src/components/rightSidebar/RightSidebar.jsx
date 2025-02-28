'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment-hijri';

const RightSidebar = () => {
  const convertToBanglaNum = num => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.replace(/\d/g, d => banglaDigits[d]);
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
    Ramadan: 'রমজান',
    Shawwal: 'শাওয়াল',
    'Dhu al-Qi’dah': 'জিলকদ',
    'Dhu al-Hijjah': 'জিলহজ',
  };

  const hijriDate = moment().locale('en').format('iD iMMMM iYYYY');
  const [day, month, year] = hijriDate.split(' ');
  const formattedDateInBangla = `${hijriMonthsInBangla[month]}  ${convertToBanglaNum(day)} , ${convertToBanglaNum(year)} `;

  return (
    <div className="h-[calc(100vh-64px)] w-72 border-l p-6">
      <div>
        <h4 className="text-xl font-bold">{formattedDateInBangla} হিজরী</h4>
      </div>
    </div>
  );
};

export default RightSidebar;
