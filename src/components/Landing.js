import { Link } from "react-router-dom";
import chatRooms from "../data/chatRooms";
import "./Landing.css";
const Landing = () => {
  return (
    <>
      <h2>Choose a Chat Room</h2>
      <ul className="chat-room-list">
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Landing;
