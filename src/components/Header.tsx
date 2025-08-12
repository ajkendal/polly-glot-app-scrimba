import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <img src='src/assets/parrot.png' alt='PollyGlot Logo' />
      </div>
      <div className={styles['header-content']}>
        <h1 className={styles['title']}>PollyGlot</h1>
        <p className={styles['subtitle']}>Perfect Translation Every Time</p>
      </div>
    </header>
  );
};

export default Header;
