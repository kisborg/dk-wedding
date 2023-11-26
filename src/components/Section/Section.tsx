'use client';
import styles from './Section.module.scss';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  sectionId: string;
}

const Section: FC<Props> = (props) => {
  return (
    <div className={styles.container} id={props.sectionId}>
      {props.children}
    </div>
  );
};

export default Section;
