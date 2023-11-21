import React, { useState, useEffect } from "react";
import Axios from "axios";
import StudentListRow from "./StudentListRow";

const StudentList = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://crud-deployment-backend-1-z5ez.onrender.com/studentRoute/"
    )
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <StudentListRow obj={val} key={ind} />;
    });
  };

  return (
    <table
      style={{ maxWidth: "60%", margin: "50px auto" }}
      className="table table-bordered table-striped table-success"
    >
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Email</th>
          <th className="text-center">Roll Number</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>{ListItems()}</tbody>
    </table>
  );
};

export default StudentList;
