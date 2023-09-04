import React from "react";

const User = (props) => {
  const { data } = props;
  return (
    <>
      <div className="text-center">
        <h1>{data.name}</h1>
        <h2>{data.age}</h2>
      </div>
    </>
  );
};

export default User;
