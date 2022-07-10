import logoImg from 'assets/logo.svg';
import styles from  './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <img src={logoImg} alt="alurone" />
    </nav>
  );
}
