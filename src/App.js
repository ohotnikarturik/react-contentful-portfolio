import React from "react";
import "./App.css";
import useContentful from "./hooks/useContentful";
import { Person } from "./components/person";

const query = `
query {
  person(id: "1rNEKPzvK91G1YW7xY8wjt") {
    name
    socialGithub
    socialFacebook
    socialLinkedin
    bio{
      json
    }
    image{
      title
      url
    }
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

  const { person } = data;

  return (
    <div className="App">
      <Person person={person}/>
    </div>
  );
}

export default App;
