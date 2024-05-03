import { useParams } from 'next/navigation';
import styles from './Venue.module.scss';
import Image from 'next/image';
import MapSkanzen from '../../../public/images/map_1.png';
import MapSkanzenEng from '../../../public/images/map_1_eng.png';
import MapRestaurant from '../../../public/images/map_2.png';
import MapRestaurantEng from '../../../public/images/map_2_eng.png';
import CarIcon from '../../../public/images/car_icon.svg';
import BusIcon from '../../../public/images/bus_icon.svg';
import { useTranslations } from 'next-intl';

import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

const Venue = () => {
  const params = useParams();
  const t = useTranslations('Venue');
  return (
    <div className={`${styles.venue} ${quicksand.className}`}>
      <h1 className={styles.mainTitle}>{t('TITLE')}</h1>

      <div className={styles.sectionContainer}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>{t('TITLE_CAR')}</h2>
          <span>
            <CarIcon />
          </span>
        </div>

        <div className={styles.contentContainer}>
          <p className={styles.smallTitle}>{t('TITLE_TEMPLE')}</p>

          <p>{t('ARRIVAL_TEMPLE')}</p>
          <p>
            {t.rich('LOCATION_TEMPLE', {
              bold: (chunks) => <b>{chunks}</b>,
            })}
          </p>
          <p>{t('TEMPLE_INSTRUCTION_1')}</p>
          <Image
            className={styles.mapSkanzen}
            src={params?.locale === 'en' ? MapSkanzenEng : MapSkanzen}
            alt='map'
          />
          <p>{t('TEMPLE_INSTRUCTION_2')}</p>
          <p>{t('TEMPLE_INSTRUCTION_3')}</p>
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.smallTitle}>{t('TITLE_RESTAURANT')}</p>

          <p>{t('ARRIVAL_RESTAURANT')}</p>
          <p>
            {t.rich('LOCATION_RESTAURANT', {
              bold: (chunks) => <b>{chunks}</b>,
            })}
          </p>
          <p>{t('RESTAURANT_INSTRUCTION_1')}</p>
          <Image
            className={styles.mapRestaurant}
            src={params?.locale === 'en' ? MapRestaurantEng : MapRestaurant}
            alt='map'
          />
          <p>
            {t.rich('RESTAURANT_INSTRUCTION_2', {
              bold: (chunks) => <b>{chunks}</b>,
            })}
          </p>
          <p>{t('RESTAURANT_INSTRUCTION_3')}</p>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>{t('TITLE_BUS')}</h2>
          <span>
            <BusIcon />
          </span>
        </div>
        <div className={styles.contentContainer}>
          <p>{t('BUS_INSTRUCTION')}</p>
        </div>
      </div>
      <p className={styles.contact}>{t('CONTACT')}</p>
      <div className={styles.greetings}>
        <p>{t('GREETING')}</p>
        <p className={styles.signature}>Kriszti & Dani</p>
      </div>
    </div>
  );
};

export default Venue;
