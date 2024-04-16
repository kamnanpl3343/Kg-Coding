import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "./store/todoStore";
function UniqueItems({ todoName, todoDate, keyValue }) {
  const { handleDelete } = useContext(TodoItemsContext);
  return (
    <>
      <div className="row">
        <div className="col-6">
          <p>{todoName}</p>
        </div>
        <div className="col-4">
          <p>{todoDate}</p>
        </div>
        <div className="col-2 my-1">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(todoName, keyValue)}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </>
  );
}
export default UniqueItems;
