import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/featured/Featured";
import MailList from "../../components/MailList/MailList";
import "./Home.css"
function Home () {
  return (
<div>
  <Navbar />
  <Header />
  <Featured />
  <MailList />
</div>
  );
}

export default Home;