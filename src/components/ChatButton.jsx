import React, { useState } from "react";
import { useEffect } from "react";
import ChatBot from "../pages/ChatBot";
import "../styles/ChatButton.css";

const ChatButton = ({ chatList, setChatList }) => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [text, setText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const toggleChatbox = () => {
    setShowChatbox((prevState) => !prevState);
  };

  const handleSubmit = () => {
    setSubmitText(text);
    setText("");
  };

  useEffect(()=>{
    if(submitText!==""){
      setChatList((prevState) => [
     ...prevState,
        {
          role: "user",
          message: submitText,
        },
      ]);
      setSubmitText("");
    }
  },[submitText])

  return (
    <div className="chat-button-container">
      <button className="chat-button" onClick={toggleChatbox}>
        Open Chat
      </button>
      {showChatbox && (
        <div className="chatbox-overlay">
          <div className="chatbox">
            <div className="chatbox-header">
              <button className="close-btn" onClick={toggleChatbox}>
                x
              </button>
            </div>
            <div className="chatbox-content">
              <ChatBot chatList={chatList} />
              <div className="text-area">
                <input
                  type="text"
                  value={text}
                  placeholder="Type your message..."
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <button onClick={handleSubmit}>➤</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
