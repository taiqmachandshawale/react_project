import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const handleInputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.value);

    const { value, name,  } = event.target;

    setFullName((prevValue) => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email,
      //     phone: prevValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email,
      //     phone: prevValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value,
      //     phone: prevValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: prevValue.email,
      //     phone: value,
      //   };
      // }
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("form Submitted");
  };
  return (
    <>
      <div className="main-div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello,It's Me {fullName.fName} {fullName.lName}
            </h1>

            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input
              style={{ width: 250 }}
              type="text"
              placeholder="Enter Your Name"
              //   default it is passing the Object to the function called.
              name="fName"
              onChange={handleInputEvent}
              value={fullName.fName}
            />
            <br />
            <input
              style={{ width: 250 }}
              type="text"
              placeholder=" Enter Last Name"
              name="lName"
              onChange={handleInputEvent}
              value={fullName.lName}
            />
            <input
              style={{ width: 250 }}
              type="email"
              placeholder="Email Id"
              name="email"
              onChange={handleInputEvent}
              value={fullName.email}
            />
            <input
              style={{ width: 250 }}
              type="number"
              placeholder="Enter Phone Number"
              name="phone"
              onChange={handleInputEvent}
              value={fullName.phone}
            />
            <button type="submit">Click Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
