import React, { useState, useEffect } from "react";
import axios from "axios";

function Snippets() {
  const [snippets, setSnippets] = useState([]); // Define snippets state variable

  useEffect(() => {
    axios.get("http://localhost:5000/snippets")
      .then(res => {
        setSnippets(res.data);
      })
      .catch(err => console.log(err));
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
      <h2>Code Snippets</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Language</th>
            <th scope="col">Input</th>
            <th scope="col">Code</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{snippet.username}</td>
              <td>{snippet.language}</td>
              <td>{snippet.stdin}</td>
              <td><pre>{snippet.code}</pre></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Snippets;
