import ScheduleImageEn from '../../../public/images/program_en.png';
import ScheduleImageHu from '../../../public/images/program_hu.png';
import Logo from '../../../public/images/logo-bendi-2.png';
import ChurchIcon from '../../../public/images/church_icon.png';
import ChampagneIcon from '../../../public/images/champagne_icon.png';
import RingsIcon from '../../../public/images/rings_icon.png';
import DinnerIcon from '../../../public/images/dinner_icon.png';
import DanceIcon from '../../../public/images/dance_icon.png';
import CakeIcon from '../../../public/images/cake_icon.png';
import PartyIcon from '../../../public/images/party_icon.png';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Schedule.module.scss';
import { Old_Standard_TT, Quicksand } from 'next/font/google';
import { useTranslations } from 'next-intl';
import ScheduleItem from './ScheduleItem';

const quicksand = Quicksand({ subsets: ['latin'] });
const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: '400',
});

const quicksandBold = Quicksand({ subsets: ['latin'], weight: '700' });

const Schedule = () => {
  const params = useParams();
  const t = useTranslations();
  const scheduleImage =
    params.locale === 'en' ? ScheduleImageEn : ScheduleImageHu;
  return (
    <div className={styles.schedule}>
      <div className={styles.imageAndTitle}>
        <Image className={styles.scheduleImage} alt='logo' src={Logo} />
        <h1 className={styles.title}>Kriszti & Dani</h1>
      </div>
      <div className={styles.date}>
        <motion.div
          animate={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          transition={{ duration: 1, delay: 0.5 }}
          initial={{ width: '0px', overflow: 'hidden' }}
        >
          <div className={styles.date}>
            <div className={`${styles.month} ${quicksand.className}`}>
              {t('Intro.date_month')}
            </div>
            <div className={`${styles.dayandyear} ${oldStandard.className}`}>
              8<br />
              2024
            </div>
            <div className={`${styles.dayintext} ${quicksand.className}`}>
              {t('Intro.date_day')}
            </div>
          </div>
        </motion.div>
      </div>
      <div className={`${styles.scheduleItems} ${quicksandBold.className}`}>
        <ScheduleItem
          image={ChurchIcon}
          time={t('Schedule.1400')}
          description={t('Schedule.CHURCH_CEREMONY')}
          animationStart={0.5}
        />
        <ScheduleItem
          image={ChampagneIcon}
          time={t('Schedule.1630')}
          description={t('Schedule.RECEPTION')}
          animationStart={0.6}
        />
        <ScheduleItem
          image={RingsIcon}
          time={t('Schedule.1730')}
          description={t('Schedule.CIVIL_CEREMONY')}
          animationStart={0.7}
        />
        <ScheduleItem
          image={DinnerIcon}
          time={t('Schedule.1900')}
          description={t('Schedule.DINNER')}
          animationStart={0.8}
        />
        <ScheduleItem
          image={DanceIcon}
          time={t('Schedule.2100')}
          description={t('Schedule.OPENING_DANCE')}
          animationStart={0.9}
        />
        <ScheduleItem
          image={CakeIcon}
          time={t('Schedule.2300')}
          description={t('Schedule.CAKE_CUTTING')}
          animationStart={1}
        />
        <ScheduleItem
          image={PartyIcon}
          time={t('Schedule.2330')}
          description={t('Schedule.PARTY')}
          animationStart={1.1}
        />
      </div>
      <div className={styles.contactAnimationContainer}>
        <motion.p
          className={`${styles.contact} ${quicksand.className}`}
          animate={{ height: '100%' }}
          transition={{ duration: 1, delay: 1.5 }}
          initial={{ height: '0px', overflow: 'hidden' }}
        >
          {t('Venue.CONTACT')}
        </motion.p>
      </div>
    </div>
  );
};

export default Schedule;
