import React, { useState } from "react";
import { useEffect } from "react";
import ChatBot from "../pages/ChatBot";
import "../styles/ChatButton.css";
import { Configuration, OpenAI } from "openai";
import Data from "../database/Data.json";

const ChatButton = ({ chatList, setChatList }) => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [text, setText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const toggleChatbox = () => {
    setShowChatbox((prevState) => !prevState);
  };

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });

  const generateResponse = async () => {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant",
        },
        {
          role: "user",
          content: JSON.stringify(Data),
        },
        {
          role: "assistant",
          content: "You are an AI assistant",
        },
        {
          role: "user",
          content: `Based on the dataset provided above just give me answer, ${submitText}`,
        },
      ],
    });
    const response = chatCompletion.choices[0].message.content;
    setChatList((prevState) => [
      ...prevState,
      {
        role: "AI",
        message: response,
      },
    ]);
  };

  const handleSubmit = async () => {
    setSubmitText(text);
    setText("");
  };

  useEffect(() => {
    if (submitText !== "") {
      setChatList((prevState) => [
        ...prevState,
        {
          role: "user",
          message: submitText,
        },
      ]);
      generateResponse();
      setSubmitText("");
    }
  }, [submitText]);

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
            </div>
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
      )}
    </div>
  );
};

export default ChatButton;
