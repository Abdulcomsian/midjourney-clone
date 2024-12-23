import { useEffect, useRef } from "react";
import Pusher from "pusher-js";

export function usePusher(token, userId) {
  const pusherRef = useRef(null);
  const channelRef = useRef(null);

  useEffect(() => {
    if (token && userId) {
        console.log("Token",token);
        
      pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
        cluster: "ap2",
        forceTLS: true,
        authEndpoint: "/api/pusher/auth",
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });

      const channelName = `private-footo.user.${userId}`;
      channelRef.current = pusherRef.current.subscribe(channelName);

      Pusher.logToConsole = true;

      pusherRef.current.connection.bind("connected", () =>
        console.log("Pusher connection established.")
      );
      pusherRef.current.connection.bind("error", (err) =>
        console.error("Pusher connection error:", err)
      );
      pusherRef.current.connection.bind("disconnected", () =>
        console.warn("Pusher connection disconnected.")
      );
    }

    return () => {
      if (channelRef.current) {
        channelRef.current.unbind_all();
        channelRef.current.unsubscribe();
      }
      if (pusherRef.current) {
        pusherRef.current.disconnect();
      }
    };
  }, [token, userId]);

  const bindEvent = (eventName, callback) => {
    if (channelRef.current) {
      channelRef.current.bind(eventName, callback);
    }
  };

  return { bindEvent };
}
