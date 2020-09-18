import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useContentful from "./hooks/useContentful";

const query = `
query {
  person(id: "1rNEKPzvK91G1YW7xY8wjt") {
    name
  }
}
`;

function App() {
  let { data, errors } = useContentful(query);

  if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(", ")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { name } = data.person;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
