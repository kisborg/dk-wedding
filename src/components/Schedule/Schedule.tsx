import './Schedule.scss';
import ScheduleImage from '../../../public/images/schedule.png';
import Image from 'next/image';

const Schedule = () => {
  return (
    <div className='schedule'>
      <Image className='schedule-image' alt='schedule' src={ScheduleImage} />
    </div>
  );
};

export default Schedule;
