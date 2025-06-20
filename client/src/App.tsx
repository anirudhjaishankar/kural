import "./App.css";
import { Routes, Route } from "react-router";
import RoomSelectionPage from "./pages/RoomSelectionPage";
import ChatRoom from "./pages/ChatRoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoomSelectionPage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
