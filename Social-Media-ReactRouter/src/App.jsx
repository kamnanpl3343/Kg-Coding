import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import { useReducer, useState } from "react";
import PostListProvider from "./store/storeList";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <PostListProvider>
        <Navbar />
        <div className="main">
          <Sidebar/>

          <div className="content">
            <Outlet />
          </div>
        </div>

        <Footer />
      </PostListProvider>
    </>
  );
}

export default App;
