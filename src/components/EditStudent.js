import React, { useEffect, useState } from "react";
import StudentForm from "./SudentForm";
import { useParams } from "react-router-dom";
import Axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const [initialValue, setInitialValue] = useState({});
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://crud-deployment-backend-1-z5ez.onrender.com/studentRoute/update-student/" +
        id
    )
      .then((res) => {
        if (res.status === 200) {
          setInitialValue(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  useEffect(() => {
    console.log(initialValue);
  }, [initialValue]);
  const getState = (childData) => {
    setNewData(childData);
  };
  const handleSubmit = () => {
    const data = { name: newData[0], email: newData[1], rollNo: newData[2] };
    Axios.put(
      "https://crud-deployment-backend-1-z5ez.onrender.com/studentRoute/update-student/" +
        id,
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record updated");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue={initialValue.name}
        emailValue={initialValue.email}
        rollNoValue={initialValue.rollNo}
      >
        Update Student
      </StudentForm>
    </form>
  );
};

export default EditStudent;
