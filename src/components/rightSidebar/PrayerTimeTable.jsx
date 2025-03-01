import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Coordinates, CalculationMethod, PrayerTimes, Madhab } from 'adhan';

const coordinates = new Coordinates(22.84564, 89.540329);
const params = CalculationMethod.MuslimWorldLeague();
params.madhab = Madhab.Hanafi;
const date = new Date();
const prayersTimes = new PrayerTimes(coordinates, date, params);
console.log(prayersTimes);

const formattedPrayerTimes = [
  {
    name: 'ফজর',
    startTime: prayersTimes.fajr.toLocaleTimeString(),
    endTime: prayersTimes.sunrise.toLocaleTimeString(),
  },
  {
    name: 'যোহর',
    startTime: prayersTimes.dhuhr.toLocaleTimeString(),
    endTime: prayersTimes.asr.toLocaleTimeString(),
  },
  {
    name: 'আসর',
    startTime: prayersTimes.asr.toLocaleTimeString(),
    endTime: prayersTimes.maghrib.toLocaleTimeString(),
  },
  {
    name: 'মাগরিব ',
    startTime: prayersTimes.maghrib.toLocaleTimeString(),
    endTime: prayersTimes.isha.toLocaleTimeString(),
  },
  {
    name: 'ইশা',
    startTime: prayersTimes.isha.toLocaleTimeString(),
    endTime: '11:59 PM',
  },
];
console.log(formattedPrayerTimes);
const PrayerTimeTable = () => {
  return (
    <div className="rounded-lg bg-dailyTalim-primary-200 p-4">
      <h4 className="text-center font-medium">নামাজের সময়সূচি</h4>
      <div>
        <Table>
          <TableBody>
            {formattedPrayerTimes.map(prayersTime => (
              <TableRow
                key={prayersTime.name}
                className="border-dailyTalim-mutedGray"
              >
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
    </div>
  );
};

export default PrayerTimeTable;
