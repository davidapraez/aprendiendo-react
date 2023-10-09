import { useState, useEffect, useMemo, useCallback } from "react";
import List from "./list";

const initialUSers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Gilbert" },
  { id: 3, name: "Emmanuel" },
  { id: 4, name: "Pablo" },
  { id: 5, name: "Camilo" },
  { id: 6, name: "Camilo" },
];

function App() {
  const [users, setUsers] = useState(initialUSers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("Nuevo");

  const guardarUser = () => {
    const newId = Math.max(...users.map((user) => user.id)) + 1;
    const newUser = { id: newId, name: text };
    setUsers([...users, newUser]);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const printUsers = useCallback(() => {
    console.log("changed users", users);
  }, [users]);
  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
      console.log("se elimiu");
      console.log(users);
    },
    [users]
  );
  ///https://www.youtube.com/watch?v=HmudQUYnQQg

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("filter process");
        return user.name.toLowerCase().includes(text);
      }),
    [search, users]
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <button onClick={() => guardarUser()}>Guardar usuario</button>
        <List users={filteredUsers} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
