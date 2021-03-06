import React, { useState, useContext } from "react";
import API from "../../env";
import UserContext from "../../store/UserContext";

const SearchPost = () => {
  const ctx = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const clickHandler = async () => {
    const response = await fetch(`${API}/api/posts/tag/${inputValue}`);
    const data = await response.json();

    ctx.setPosts(data);
  };

  return (
    <div className="card w-full bg-base-300 p-4 shadow-lg">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input grow"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button onClick={clickHandler} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPost;
