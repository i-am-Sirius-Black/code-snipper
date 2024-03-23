import React, { useState } from "react";
import axios from "axios";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    language: "",
    stdin: "",
    code: "",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    axios
      .post("http://localhost:5000/submit", formData)
      .then((res) => console.log("Data submitted Successfully"))
      .catch((err) => console.log(err));
    console.log(formData);
  }

  function handleRun() {
    return {};
  }

  return (
    <>
      <div className="container-section-1">
        <div className="div-main">
          <div className="div-main-1">
            <div className="div-1 header-form-left">
              <div className="username">
                <input
                  className="form-control"
                  onChange={handleFormChange}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="@username"
                  value={formData.username}
                />
              </div>

              <div className="button-select">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>
                    Language
                  </InputLabel>
                  <Select
                    onChange={handleFormChange}
                    name="language"
                    // id="language"
                    value={formData.language}
                  >
                    <MenuItem value="76">C++</MenuItem>
                    <MenuItem value="62">Java</MenuItem>
                    <MenuItem value="93">JavaScript</MenuItem>
                    <MenuItem value="92">Python</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="div-2 header-form-right">
              <div className="button-run">
                <button className="btn btn-success" onClick={handleRun}>
                  Run
                </button>
              </div>

              <div className="button-submit">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="div-1">
              <div className="code-textarea">
                <Textarea
                  onChange={handleFormChange}
                  id="code"
                  name="code"
                  color="neutral"
                  disabled={false}
                  minRows={15}
                  placeholder="Write Your Code..."
                  size="lg"
                  variant="outlined"
                />
              </div>
            </div>

            <div className="div-2">
              <div className="div-2-inside">
                <div className="stdin">
                  <Textarea
                    onChange={handleFormChange}
                    id="stdin"
                    name="stdin"
                    placeholder="Stdin..."
                    minRows={9.2}
                    value={formData.stdin}
                  />
                </div>

                <div className="output">
                  <Textarea
                    id="output"
                    name="output"
                    placeholder="output..."
                    minRows={7}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
