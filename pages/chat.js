import Link from "next/link";

import Navbar from "../components/Navbar";
import Room from "../components/Room";
import Conversation from "../components/Conversation";

import styles from "../styles/Chatroom.module.css";

const rooms = [
  { name: "Reading is Fun Club" },
  { name: "Capture the Flag!" },
  { name: "Mom Days Out" },
];

const conversation = [
  { user: "Burj Khalifa", sentAt: "9:23", content: "Hello, all! I'm tall." },
  { user: "Gustavo Eiffel", sentAt: "9:23", content: "Hello, Burj! I'm also tall." }
];

const Chat = () => {
  return (
    <div>
      <Navbar isSignedIn={true} />

      <Link href="/">
        <a>Logout</a>
      </Link>

      <div className={styles.chatInterface}>
        <Room rooms={rooms} />
        <Conversation conversation={conversation} />
      </div>
    </div>
  );
}

export default Chat;