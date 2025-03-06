import useAllDate from '@/hooks/useAllDate';

const Date = () => {
  const {
    formattedBanglaDate,
    formattedHijriDateInBangla,
    formattedKhristabdaDate,
  } = useAllDate();
  return (
    <section className="text-center">
      <h4 className="text-xl font-bold">{formattedHijriDateInBangla}</h4>
      <div className="flex justify-center gap-2">
        <p className="">{formattedBanglaDate}</p>|
        <p className="">{formattedKhristabdaDate}</p>
      </div>
    </section>
  );
};

export default Date;
