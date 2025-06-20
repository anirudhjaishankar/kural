import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useChatRoomStore } from "@/stores/ChatRoomStore";
import { useNavigate } from "react-router";

export default function RoomSelectionPage() {
  const { username, roomId, setUsername, setRoomId } = useChatRoomStore();
  const navigate = useNavigate();
  // let [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // Here you would typically handle the room joining logic,
    // such as sending the room number to a server or navigating to a new page.
    console.log(`Joining room: ${roomId}`);
    navigate("/chatroom");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex justify-center">Join a room</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="room">Chatroom Id</Label>
                <Input
                  placeholder="game1-001"
                  value={roomId}
                  onChange={(event) => {
                    setRoomId(event.target.value);
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="room">User name</Label>
                <Input
                  placeholder="John doe"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              handleSubmit();
            }}
          >
            Join room
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
