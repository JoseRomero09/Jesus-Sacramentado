import type { ReactNode } from 'react';
import styles from './TopicSection.module.css';

interface TopicSectionProps {
  title?: string;
  children: ReactNode;
  isIntro?: boolean;
}

export const TopicSection = ({ title, children, isIntro = false }: TopicSectionProps) => {
  if (isIntro) {
    return (
      <section className={styles.intro}>
        {children}
      </section>
    );
  }

  return (
    <section className={styles.topic}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
