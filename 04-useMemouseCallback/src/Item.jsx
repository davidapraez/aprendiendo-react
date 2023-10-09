import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Item = ({ user, handleDelete }) => {
  useEffect(() => {
    // console.log("item render");
  });

  return (
    <div>
      <li>{user.name}</li>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </div>
  );
};

export default Item;
