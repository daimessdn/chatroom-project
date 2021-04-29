import styles from "../styles/Chatroom.module.css";

const Room = ({rooms}) => {
  return (
    <div className={styles.roomList}>
      <div className={styles.roomTitle}>
        <h1>Room</h1>
      </div>
      
      <ul>
        {
          rooms.map((room) => (
            <li className={styles.roomItem}>
              <span className="roomName">{room.name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Room;