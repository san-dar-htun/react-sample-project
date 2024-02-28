import React, { useRef } from "react";

const Form = ({ fetchWeather }) => {
  const searchKey = useRef("");
  return (
    <div className="w-100 d-flex justify-content-center mt-3">
      <input
        type="text"
        ref={searchKey}
        className="form-control ms-5"
        placeholder="Enter country....."
      />
      <button
        type="button"
        className="btn btn-primary ms-2 me-5"
        onClick={() => fetchWeather(searchKey.current.value)}
      >
        Search
      </button>
    </div>
  );
};

export default Form;
