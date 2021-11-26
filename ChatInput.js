import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../StateProvider";
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        user: user.displayName,
        userImage: user.photoURL,
        mytime: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
