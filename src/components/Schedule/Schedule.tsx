import './Schedule.scss';
import ScheduleImageEn from '../../../public/images/program_en.png';
import ScheduleImageHu from '../../../public/images/program_hu.png';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const Schedule = () => {
  const params = useParams();
  const scheduleImage =
    params.locale === 'en' ? ScheduleImageEn : ScheduleImageHu;
  return (
    <div className='schedule'>
      <Image
        className='schedule-image'
        alt='schedule'
        src={scheduleImage}
        priority
      />
    </div>
  );
};

export default Schedule;
