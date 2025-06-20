import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ChatMessage } from "@/models/ChatMessage";
import { useChatRoomStore } from "@/stores/ChatRoomStore";
import { LogOutIcon, SendHorizonalIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

// React component for MessageRoom/ChatRoom which has a text bar at bottom for sending text and list of messages above it
export default function ChatRoom() {
  const mockData: ChatMessage[] = [
    {
      id: 1,
      from: "Ani",
      message: "Hi there! How are you?",
      datetime: "2023-10-01T12:00:00Z",
    },
    {
      id: 2,
      from: "Bob",
      message: "Hello! I'm good, thanks. How about you?",
      datetime: "2023-10-01T12:01:00Z",
    },
    {
      id: 3,
      from: "Ani",
      message: "I'm doing well, just working on some projects.",
      datetime: "2023-10-01T12:02:00Z",
    },
    {
      id: 4,
      from: "Bob",
      message:
        "Sounds interesting! What kind of projects? I am super interested in hearing about them.",
      datetime: "2023-10-01T12:03:00Z",
    },
    {
      id: 5,
      from: "Ani",
      message: "I'm working on a web app using React and Tailwind CSS.",
      datetime: "2023-10-01T12:04:00Z",
    },
    {
      id: 6,
      from: "Bob",
      message:
        "That's great! I've been learning React too. Do you have any tips for beginners?",
      datetime: "2023-10-01T12:05:00Z",
    },
    {
      id: 7,
      from: "Ani",
      message:
        "Sure! Start by understanding the basics of components and state.",
      datetime: "2023-10-01T12:06:00Z",
    },
    {
      id: 8,
      from: "Bob",
      message: "Got it! What about props? They seem a bit confusing.",
      datetime: "2023-10-01T12:07:00Z",
    },
    {
      id: 9,
      from: "Ani",
      message:
        "Props are just a way to pass data from parent to child components.",
      datetime: "2023-10-01T12:08:00Z",
    },
    {
      id: 10,
      from: "Bob",
      message: "Ah, that makes sense! Thanks for explaining.",
      datetime: "2023-10-01T12:09:00Z",
    },
    {
      id: 11,
      from: "Ani",
      message: "No problem! Also, try using hooks like useState and useEffect.",
      datetime: "2023-10-01T12:10:00Z",
    },
    {
      id: 12,
      from: "Bob",
      message: "Hooks seem powerful! I'll definitely explore them more.",
      datetime: "2023-10-01T12:11:00Z",
    },
    {
      id: 13,
      from: "Ani",
      message:
        "Absolutely! They make managing state and side effects much easier.",
      datetime: "2023-10-01T12:12:00Z",
    },
    {
      id: 14,
      from: "Bob",
      message: "Thanks for all the tips! I'll start building something soon.",
      datetime: "2023-10-01T12:13:00Z",
    },
    {
      id: 15,
      from: "Ani",
      message: "That's the best way to learn! Let me know if you need help.",
      datetime: "2023-10-01T12:14:00Z",
    },
    {
      id: 16,
      from: "Bob",
      message: "Will do! Thanks again, Ani.",
      datetime: "2023-10-01T12:15:00Z",
    },
  ];

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        from: username,
        message: newMessage,
        datetime: new Date().toISOString(),
      },
    ]);
    setNewMessage("");
  };

  const { username, roomId } = useChatRoomStore();
  const [messages, setMessages] = useState(mockData);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  // Ref for the scrollable message container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col w-full max-w-xl bg-gray-900 h-[95vh] py-2 rounded-xl mt-2 mb-2 border-2 border-gray-700">
        <div className="flex text-2xl text-gray-300 p-4 text-start w-full items-center">
          <div className="w-[10%]">
            <Button
              variant="secondary"
              size="icon"
              className="size-10"
              onClick={() => {
                navigate("/");
              }}
            >
              <LogOutIcon />
            </Button>
          </div>
          <div className="w-[90%] text-center">Chat room: {roomId}</div>
        </div>
        <div
          className="flex-1 p-4 overflow-y-auto border-1 border-gray-800 m-2 rounded-xl"
          ref={messagesEndRef}
        >
          {messages.map((message) => {
            return (
              <div key={message.id} className={`p-1 text-white`}>
                {`[${message.datetime}] ${message.from}: ${message.message}`}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-6 p-4">
          <div className="grid gap-2 w-[90%]">
            <Input
              id="chatbox"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
          </div>
          <div className="w-[10%]">
            <Button
              size="icon"
              className="size-9"
              onClick={() => {
                sendMessage();
              }}
            >
              <SendHorizonalIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
