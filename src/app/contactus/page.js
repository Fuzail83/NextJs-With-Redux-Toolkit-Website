"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/postSlice";
import { useRouter } from "next/navigation";
import { useDebounce } from "../common/useDebounce";
import Input from "../common/Input";
import validatePostForm from "../validations/postValidations";
import Tab from "../common/Tab";
const ContactUs = () => {
  // const [inputValue, setInputValue] = useState("");
  // const debouncedInputValue = useDebounce(inputValue, 500);
  const router = useRouter();

  // console.log("router", router);

  const dispatch = useDispatch();
  const initialState = {
    title: "",
    body: "",
  };
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleBodyChange = (e) => {
  //   setBody(e.target.value);
  // };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const error = { ...errors };
    delete error[fieldName];
    setErrors(error);
    setData({ ...data, [fieldName]: fieldValue });
    console.log("feildValue", fieldValue);
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    // Validate form fields
    // const validationErrors = {};
    // if (!title) {
    //   validationErrors.title = "Name is required";
    // }
    const err = validatePostForm(data);

    // if (Object.keys(err).length === 0) {
    //   setErrors(err);
    // } else {
    //   const params = {
    //     data: data,
    //   };
    //   console.log("params", params);
    //   dispatch(addData(params));
    //   // Reset the input fields
    //   // setTitle("");
    //   // setBody("");
    //   setData(initialState);
    //   router.push("/movie");
    // }
    if (Object.keys(err).length === 0) {
      const params = {
        ...data,
      };
      dispatch(addData(params));
      setData(initialState);
      router.push("/movie");
    } else {
      setErrors(err);
    }
  };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // useEffect(() => {
  //   // Perform any action with debounced input value
  //   console.log("Debounced input value:", debouncedInputValue);
  // }, [debouncedInputValue]);

  return (
    <div>
      <h2>Add New Movie</h2>

      <Input
        type="text"
        placeholder="Title"
        value={data.title}
        name="title"
        onChange={(e) => handleChange(e)}
        error={errors.title}
      />
      <Input
        placeholder="Body"
        value={data.body}
        name="body"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}>Add New Movie</button>
      {/* <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      /> */}
      {/* <Tab /> */}
    </div>
  );
};

export default ContactUs;
