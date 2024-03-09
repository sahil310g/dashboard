import React, { useState } from "react";
import ReceivedTextBubble from "../components/ReceivedTextBubble";
import SentTextBubble from "../components/SentTextBubble";

function ChatBot({ chatbotOpen, setChatbotOpen, chatList, setChatList }) {
  const toggleChatbot = () => {
    setChatbotOpen((prevState) => !prevState);
  };

  const [text, setText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const handleSubmit = () => {
    setSubmitText(text);
    setText("");
  };

  return (
    <div className="popup">
      {chatList && (
        <div className="chat-container">
          {chatList.map((chat, index) => {
            return (
              <div
                key={index}
                className={
                  chat.role === "user"
                    ? "message sender-message"
                    : "message receiver-message"
                }
              >
                <p>
                  {chat.role === "user" ? (
                    <SentTextBubble text={chat.message} />
                  ) : (
                    <ReceivedTextBubble text={chat.message} />
                  )}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ChatBot;
