import { io } from "socket.io-client";

export const URL = "http://localhost:5000/";

export default function useSocketIO() {
  const socket = io(URL, { autoConnect: false });

  return { socket };
}
