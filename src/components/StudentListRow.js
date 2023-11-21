import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props) {
  const { _id, name, email, rollNo } = props.obj; //objecg destructuion

  const handleClick = () => {
    Axios.delete(
      "https://crud-deployment-backend-1-z5ez.onrender.com/studentRoute/delete-student/" +
        _id
    )
      .then((res) => {
        if (res.status === 200) {
          alert("record deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };
  const edit = () => {};

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollNo}</td>
      <td class="d-flex justify-content-center">
        <Link
          onClick={edit}
          className="text-decoration-none text-light me-4"
          to={"/edit-student/" + _id}
        >
          <button className="btn btn-success">Edit</button>
        </Link>
        <button onClick={handleClick} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
export default StudentListRow;
