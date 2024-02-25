import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  let { name } = useParams();
  let navigate = useNavigate();

  let GoBackHandler = () => {
    navigate("/user");
    // navigate(-1);
  }

  return (
    <div className="w-1/2  mt-10">
      <h1 className="text-red-200 text-5xl mb-10">User Details</h1>

      <h1 className="text-3xl mt-10">{name}</h1>
      <button onClick={GoBackHandler}
      className="bg-red-300 text-white mt-10 p-3 rounded-md">
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
