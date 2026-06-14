import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export const Header = ({ title, subtitle, imageSrc }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Custodia con el Santísimo Sacramento" className={styles.heroImage} />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
};
