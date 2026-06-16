import styles from "./Footer.module.css";
import facebookic from "../assets/icon/ic_facebook.png";
import twitteric from "../assets/icon/ic_twitter.png";
import youtubeic from "../assets/icon/ic_youtube.png";
import instagramic from "../assets/icon/ic_instagram.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.copyright}>©codeit - 2024</span>
        <nav className={styles.footerNav}>
          <a href="#">PrivacyPolicy</a>
          <a href="#">FAQ</a>
        </nav>
        <div className={styles.footerSocialwrap}>
          <ul className={styles.socialIcon}>
            <li>
              <a
                href="https://www.facebook.com/?locale=ko_KR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookic} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/?lang=ko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitteric} alt="twitter" />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeic} alt="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramic} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
