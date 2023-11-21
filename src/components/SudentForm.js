import React, { useState } from "react";

const StudentForm = (props) => {
  const [name, setName] = useState(props.nameValue);
  const [email, setEmail] = useState(props.emailValue);
  const [rollNo, setrollNo] = useState(props.rollNoValue);

  const arr = [name, email, rollNo];

  const handleClick = () => {
    props.getState(arr);
    console.log(arr);
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0px auto " }}>
      <input
        defaultValue={props.nameValue}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="form-control my-3"
        placeholder="Enter Name"
        type="text"
      />
      <input
        defaultValue={props.emailValue}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="form-control my-3"
        placeholder="Enter email"
        type="email"
      />

      <input
        defaultValue={props.rollNoValue}
        onChange={(e) => {
          setrollNo(e.target.value);
        }}
        className="form-control my-3"
        placeholder="Enter rollNo"
        type="rollNo"
      />
      <button
        onClick={handleClick}
        className="btn btn-success my-3 mx-auto d-block"
        type="submit"
      >
        {props.children}
      </button>
    </div>
  );
};

export default StudentForm;
