import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Coordinates, CalculationMethod, PrayerTimes, Madhab } from 'adhan';
import { subMinutes, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const PrayerTimeTable = () => {
  const [location, setLocation] = useState({
    latitude: '23.810331',
    longitude: '90.412521',
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
      });
    } else {
      toast('Geo Location is not support on your browser');
    }
  }, [location]);

  const coordinates = new Coordinates(location.latitude, location.longitude);
  const params = CalculationMethod.MuslimWorldLeague();
  params.madhab = Madhab.Hanafi;
  const date = new Date();
  const prayersTimes = new PrayerTimes(coordinates, date, params);

  const dhuhrEndTime = subMinutes(prayersTimes.asr, 1);
  const asrEndTime = subMinutes(prayersTimes.maghrib, 1);
  const maghribEndTime = subMinutes(prayersTimes.isha, 1);

  const formattedPrayerTimes = [
    {
      name: 'ফজর',
      startTime: prayersTimes.fajr.toLocaleTimeString(),
      endTime: prayersTimes.sunrise.toLocaleTimeString(),
    },
    {
      name: 'যোহর',
      startTime: prayersTimes.dhuhr.toLocaleTimeString(),
      endTime: format(dhuhrEndTime, 'h:mm a'),
    },
    {
      name: 'আসর',
      startTime: prayersTimes.asr.toLocaleTimeString(),
      endTime: format(asrEndTime, 'h:mm a'),
    },
    {
      name: 'মাগরিব ',
      startTime: prayersTimes.maghrib.toLocaleTimeString(),
      endTime: format(maghribEndTime, 'h:mm a'),
    },
    {
      name: 'ইশা',
      startTime: prayersTimes.isha.toLocaleTimeString(),
      endTime: '11:59 PM',
    },
  ];
  const subtractSehriEndTime = subMinutes(prayersTimes.fajr, 1);
  const sehriEndTime = format(subtractSehriEndTime, 'h:mm a');
  const iftarTime = prayersTimes.maghrib
    .toLocaleTimeString()
    .replace(':00', '');
  return (
    <div className="text-black">
      <div className="bg-primary-200 rounded-lg p-4">
        <h4 className="text-center font-medium">নামাজের সময়সূচি</h4>
        <Table>
          <TableBody>
            {formattedPrayerTimes.map(prayersTime => (
              <TableRow key={prayersTime.name} className="border-muted">
                <TableCell className="font-medium">
                  {prayersTime.name}
                </TableCell>
                <TableCell>
                  {prayersTime.startTime.replace(':00', '')} {' - '}
                  {prayersTime.endTime.replace(':00', '')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-3 space-y-3">
        <div className="bg-primary-200 rounded-lg px-4 py-2">
          সেহেরী শেষ - {sehriEndTime}{' '}
        </div>
        <div className="bg-primary-200 rounded-lg px-4 py-2">
          ইফতার - {iftarTime}{' '}
        </div>
      </div>
    </div>
  );
};

export default PrayerTimeTable;
