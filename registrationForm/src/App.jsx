import { useState } from "react";
import "./App.css";
import InputControl from "./Components/InputControl/InputControl";

const initForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function App() {
  const [form, setform] = useState(initForm);
  const [submited, setSubmited] = useState(false)
  const [loading, setloading] = useState(false)

  const handleChange = (event, id) => {
    const value = event.target.value;
    const newForm = {
      ...form,
      [id]: value,
    };
    setform(newForm);
  };

  const handleSubmit = (event) => {
    // we can handle valiation with native html 
    event.preventDefault();
    // submiting
    setloading(true)
    setTimeout(() => {
      setSubmited(true)
      setloading(false)
    }, 500)
  }

  if(submited) {
    return (
      <h1>Submited Successfully</h1>
    )
  }

  if(loading) {
    return (
      <h2>Loading ...</h2>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputControl
          value={form.firstName}
          handler={handleChange}
          id="firstName"
          label="first Name"
          type="text"
          required={true}
        />
        <InputControl
          value={form.lastName}
          handler={handleChange}
          id="lastName"
          label="last Name"
          type="text"
          required={true}
        />
        <InputControl
          value={form.email}
          handler={handleChange}
          id="email"
          label="email"
          type="email"
          pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"
        />
        <InputControl
          value={form.password}
          handler={handleChange}
          id="password"
          label="password"
          type="password"
          required={true}
          minLength={5}
        />
        <InputControl  id="submit" label="submit" type="submit" />
      </form>
    </>
  );
}

export default App;
