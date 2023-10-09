/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Item from "./Item";

const List = ({ users, handleDelete }) => {
  useEffect(() => {
    // console.log("list render");
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <Item key={user.id} user={user} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default List;
