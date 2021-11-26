import React from "react";
import "./Message.css";
import firebase from "../../firebase";

function Message({ message, mytime, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(mytime?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
