import { User } from "@/types/user";
import { createContext } from "react";

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
  user: {
    name: "Boris",
    surname: "P.",
    email: "some@mail.com",
    points: 100,
    id: "1",
  },
  setUser: () => {},
});

export default UserContext;
