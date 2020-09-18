import { useEffect, useState } from "react";

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const useContentful = (query) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  
  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({data, errors}) => {
        if (data) setData(data)
        if (errors) setErrors(errors)
      }).catch((error) => setErrors([error]))
  }, [query]);
  
  return { data, errors };
};

export default useContentful;