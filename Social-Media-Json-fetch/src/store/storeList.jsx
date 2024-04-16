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
  isLoading: false,
  deleteList: () => {},
});
const reducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Add_Item") {
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
  const [isLoading, setIsLoading] = useState(false);

  const addList = (res) => {
    dispatchAction({
      type: "Add_Item",
      payLoad: {
        res,
      },
    });
  };
  const addFetchDataList = (posts) => {
    dispatchAction({
      type: "Add_Fetch_Data",
      payLoad: {
        posts,
      },
    });
  };

  //useCallBack
  // const deletePost = useCallback(
  //   (itemVal) => {
  //     dispatchAction({
  //       type: "Delete_Item",
  //       payLoad: { itemVal },
  //     });
  //   },
  //   [dispatchAction]
  // );

  //UseMemo
  // const arr = [1, 2, 5, 8, 9];
  // const sortArr = useMemo(
  //   (arr) => {
  //     arr.sort;
  //   },
  //   [arr]
  // );

  const deleteList = (itemVal) => {
    dispatchAction({
      type: "Delete_Item",
      payLoad: { itemVal },
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addFetchDataList(data.posts);
        setIsLoading(false);
      });
    return () => {
      controller.abort();
      console.log(
        "this return statement is called when the conponent will be no longer available i.e when we change the component state"
      );
    };
  }, []);

  return (
    <PostListData.Provider value={{ currList, addList, deleteList, isLoading }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
