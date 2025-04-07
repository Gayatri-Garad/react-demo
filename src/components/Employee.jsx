import React from "react";

const Employee = (props) => {
  const { name, city } = props;

  function test() {
    console.log("testing");
  }

  return (
    <>
      <h1>Employee Detalis</h1>
      <div className="heading">
        <h1>Employee Name is {name} </h1>
        <h1>Empoloyee City is {city} </h1>
      </div>
    </>
  );
};

export default Employee;
