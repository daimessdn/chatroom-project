import styles from "../styles/Chatroom.module.css";
import chatStyles from "../styles/Conversation.module.css";

const Conversation = ({conversation}) => {
  return (
    <div className={styles.roomConversation}>
      <h1>Conversation</h1>

      {
        conversation.map((chat) => (
          <div className="chat">
            <div className={chatStyles.chat}>
              <p className={chatStyles.user}>{chat.user}</p>
              <p className={chatStyles.sentAt}>{chat.sentAt}</p>

              <p className={chatStyles.clear}></p>
              
              <p className={chatStyles.content}>{chat.content}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Conversation;