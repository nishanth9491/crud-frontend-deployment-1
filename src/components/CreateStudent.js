import React, { useState } from "react";
import StudentForm from "./SudentForm";
import Axios from "axios";

const CreateStudent = () => {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
    console.log(childData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name: arr[0], email: arr[1], rollNo: arr[2] };
    Axios.post(
      "https://crud-deployment-backend-1-z5ez.onrender.com/studentRoute/create-student",
      data
    )
      .then((res) => {
        if (res.status === 200) {
          console.log("added");
          alert("Record added succesfully");
        } else {
          Promise.reject();
        }
      })
      .catch((error) => {
        console.error("Error adding record:", error);
        alert("An error occurred while adding the record");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue=""
        emailValue=""
        rollNoValue=""
      >
        Create Student
      </StudentForm>
    </form>
  );
};

export default CreateStudent;
