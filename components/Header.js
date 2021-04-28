import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to chatroom!</h1>

      <div className={styles.subtitleSection}>
        <div className={styles.chatSubtitleLeft}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo2.jpg"
            alt="profile demo 1"
           />
          <p>Chatroom lets you communicate with people.</p>
        </div>

        <div className={styles.chatSubtitleRight}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo1.jpg"
            alt="profile demo 2"
           />
          <p>And also a wonderful place to make a discussion.</p>
        </div>

        <div className={styles.chatSubtitleLeft}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo2.jpg"
            alt="profile demo 1"
           />
          <p>Absolutely, Harold! Why don't you also join with us?</p>
        </div>

        <div className={styles.chatSubtitleRight}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo1.jpg"
            alt="profile demo 2"
           />
          <p>You're right, Anna! Let's join us by clicking the link below.</p>
        </div>
      </div>
    </header>
  )
}




export default Header;