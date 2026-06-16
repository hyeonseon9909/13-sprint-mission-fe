import styles from "./Header.module.css";
import pandalogo from "../assets/img/판다 얼굴.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <a href="/" className={styles.logo}>
          <img src={pandalogo} alt="판다마켓 로고" />
        </a>
        <span className={styles.serviceName}>판다마켓</span>
        <ul className={styles.menuList}>
          <li>
            <a href="/board">자유게시판</a>
          </li>
          <li>
            <a href="/">중고마켓</a>
          </li>
        </ul>
      </nav>
      <a href="/login" className={styles.loginBtn}>
        로그인
      </a>
    </header>
  );
}
