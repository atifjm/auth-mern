import { useState } from "react";
import "./Register.scss";

const Register = () => {

  const initialInputValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [input, setInput] = useState(initialInputValues);
  const [focused, setFocused] = useState(false);

  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      errorMessage: "Username must be between 3-16 characters and should'nt include any special character",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Please provide valid email",
      required: true,
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage: "Password must be between 6-20 characters",
      required: true,
      pattern: "^[A-Za-z0-9]{6,20}$",
      label: "Password",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Your Password",
      errorMessage: "Passwords donot match", 
      required: true,     
      pattern: input.password,
      label: "Confirm Password",
    },
  ];

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput(initialInputValues)
  };

  const handleBlur = () => {
    setFocused(true)
  }

  return (
    <div className="register">
      <form className="registeration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        {inputs.map((item) => (
          <div className="form-item" key={item.id}>
            <label className="item-label">{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              required = {item.required}
              pattern={item.pattern}
              className="item-input"
              value={input[item.name]}
              onChange={(e) => handleChange(e)}
              onBlur={handleBlur} focused={focused.toString()}
            />
            <span>{item.errorMessage}</span>
          </div>
        ))}

        <div className="btn">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
