import styles from "../styles/Chatroom.module.css";

const Room = ({rooms}) => {
  return (
    <div className={styles.roomList}>
      <h1>Room</h1>

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