import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import { useReducer, useState } from "react";
import PostListProvider from "./store/storeList";

const reducer = (action) => {};

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <Navbar />
        <div className="main">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            {selectedTab === "Home" ? (
              <PostList />
            ) : (
              <CreatePost setSelectedTab={setSelectedTab} />
            )}
          </div>
        </div>
        <Footer />
      </PostListProvider>
    </>
  );
}

export default App;
