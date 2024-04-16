import { createContext, useContext, useReducer } from "react";

export const PostListData = createContext({
  currList: [],
  addList: () => {},
  deleteList: () => {},
});
const reducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Add_Item") {
    newPostList = [action.payLoad, ...currPostList];
  } else if (action.type === "Delete_Item") {
    newPostList = currPostList.filter(
      (itm) => itm.id !== action.payLoad.itemVal
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [currList, dispatchAction] = useReducer(reducer, []);

  const addList = (id, userId, postTitle, postBody, postReaction, postTag) => {
    dispatchAction({
      type: "Add_Item",
      payLoad: {
        id: id,
        title: postTitle,
        body: postBody,
        reactions: postReaction,
        userId: userId,
        tags: postTag,
      },
    });
  };

  const deleteList = (itemVal) => {
    dispatchAction({
      type: "Delete_Item",
      payLoad: { itemVal },
    });
  };
  console.log(`current item is bla bla vla ${currList}`);

  return (
    <PostListData.Provider value={{ currList, addList, deleteList }}>
      {children}
    </PostListData.Provider>
  );
};

const Default_Post_List = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "hii frns i am going to the mumbai",
    reactions: 2,
    userId: "user-2",
    tags: ["vacation", "mumbai"],
  },
  {
    id: "2",
    title: "Going to mumbai",
    body: "i am going to the mumbai",
    reactions: 2,
    userId: "user-5",
    tags: ["vacation", "mumbai"],
  },
];

export default PostListProvider;
