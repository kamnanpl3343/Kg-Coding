import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

import PostListProvider from "./store/Store";
import PostList from "./components/PostList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PostListProvider>
        <Header />
        <div className="main">
          <Sidebar />
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
