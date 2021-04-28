import Room from "../components/Room";
import Conversation from "../components/Conversation";

import styles from "../styles/Chatroom.module.css";

const Chat = () => {
  return (
    <div className={styles.chatInterface}>
      <Room />
      <Conversation />
    </div>
  );
}

export default Chat;