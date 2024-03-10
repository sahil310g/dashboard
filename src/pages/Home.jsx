import React from 'react';
import logo from "../asstes/home_logo.png"
import ChatButton from '../components/ChatButton';
import "../styles/Home.css";

function Home({chatList, setChatList}) {
  return (
    <div className='home'>
      <img className='home-img' src={logo} alt="" />
      <ChatButton chatList={chatList} setChatList={setChatList}/>
    </div>
  )
}

export default Home