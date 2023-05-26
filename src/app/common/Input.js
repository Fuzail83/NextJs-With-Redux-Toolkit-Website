import React from "react";

const Input = ({ type, value, name, placeholder, onChange, label, error }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
