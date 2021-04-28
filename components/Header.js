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
          <div className={styles.chat}>
            <p className={styles.user}>Anna</p>
            <p className={styles.sentAt}>8:10</p>

            <p className={styles.clear}></p>
            
            <p className={styles.content}>Chatroom lets you communicate with people.</p>
          </div>
        </div>

        <div className={styles.chatSubtitleRight}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo1.jpg"
            alt="profile demo 2"
           />
          <div className={styles.chat}>
            <p className={styles.user}>Harold</p>
            <p className={styles.sentAt}>8:12</p>

            <p className={styles.clear}></p>

            <p className={styles.content}>And also a wonderful place to make a discussion.</p>
          </div>
        </div>

        <div className={styles.chatSubtitleLeft}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo2.jpg"
            alt="profile demo 1"
           />
          <div className={styles.chat}>
            <p className={styles.user}>Anna</p>
            <p className={styles.sentAt}>8:12</p>

            <p className={styles.clear}></p>

            <p className={styles.content}>Absolutely, Harold! Why don't you also join with us?</p>
          </div>
        </div>

        <div className={styles.chatSubtitleRight}>
          <img
            className={styles.profileChatDemo}
            src="/img/profiledemo1.jpg"
            alt="profile demo 2"
           />
          <div className={styles.chat}>
            <p className={styles.user}>Harold</p>
            <p className={styles.sentAt}>8:13</p>

            <p className={styles.clear}></p>

            <p className={styles.content}>You're right, Anna! Let's join us by clicking the link below.</p>
          </div>
        </div>
      </div>
    </header>
  )
}




export default Header;