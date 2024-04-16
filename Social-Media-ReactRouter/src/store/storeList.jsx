import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

export const PostListData = createContext({
  currList: [],
  addList: () => {},

  deleteList: () => {},
});
const reducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Add_Item") {
    console.log("Addlist");
    newPostList = [action.payLoad.res, ...currPostList];
    console.log(newPostList);
  } else if (action.type === "Add_Fetch_Data") {
    newPostList = action.payLoad.posts;
  } else if (action.type === "Delete_Item") {
    newPostList = currPostList.filter(
      (itm) => itm.id !== action.payLoad.itemVal
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [currList, dispatchAction] = useReducer(reducer, []);

  const addList = (res) => {
    dispatchAction({
      type: "Add_Item",
      payLoad: {
        res,
      },
    });
  };

  const deleteList = (itemVal) => {
    dispatchAction({
      type: "Delete_Item",
      payLoad: { itemVal },
    });
  };

  return (
    <PostListData.Provider value={{ currList, addList, deleteList }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
 