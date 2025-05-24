import React from "react";
import Search from "../SearchComponents/Search";
import '../../styles/Header.css'; 
function Main() {
  return (
    <>
        <div className="main-container">
        <div className="main-search">
             <Search/>
        </div>
        </div>
    </>
  );
}

export default Main;