import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  currItem: [],
  addList: () => {},
  deleteList: () => {},
  addApiList: () => {},
  isLoading: false,
});

const reducerAction = (currState, action) => {
  let newCurrState = currState;

  if (action.type === "Add_List") {
    newCurrState = [action.payload.addData, ...currState];
    // console.log(newCurrState);
  } else if (action.type === "Delete_List") {
    newCurrState = currState.filter(
      (post) => post.id !== action.payload.itemId
    );
  } else if (action.type === "Add_Api_List") {
    newCurrState = action.payload.posts;
  }
  return newCurrState;
};

const PostListProvider = ({ children }) => {
  const [currItem, dispatchAction] = useReducer(reducerAction, []);
  const [isLoading, setIsLoading] = useState(false);

  const addList = (addData) => {
    // console.log(id, userId, title, body, reactions, tags);
    dispatchAction({
      type: "Add_List",
      payload: {
        addData,
      },
    });
  };

  const addApiList = (posts) => {
    // console.log(id, userId, title, body, reactions, tags);
    dispatchAction({
      type: "Add_Api_List",
      payload: {
        posts,
      },
    });
  };

  const deleteList = (itemId) => {
    dispatchAction({
      type: "Delete_List",
      payload: {
        itemId,
      },
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((resData) => {
        addApiList(resData.posts);
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  //console.log("currItem value is:", currItem);
  // console.log(`current item is bla bla vla ${currItem}`);

  return (
    <PostListContext.Provider
      value={{
        currItem,
        addList,
        deleteList,
        addApiList,
        isLoading,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
