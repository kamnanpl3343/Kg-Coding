import { FaDeleteLeft } from "react-icons/fa6";
function UniqueItems({ todoName, todoDate, handleDelete, keyValue }) {
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
