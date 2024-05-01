import './Schedule.scss';
import ScheduleImageEn from '../../../public/images/schedule.png';
import ScheduleImageHu from '../../../public/images/program_hu.png';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const Schedule = () => {
  const params = useParams();
  const scheduleImage =
    params.locale === 'en' ? ScheduleImageEn : ScheduleImageHu;
  return (
    <div className='schedule'>
      <Image className='schedule-image' alt='schedule' src={scheduleImage} />
    </div>
  );
};

export default Schedule;
