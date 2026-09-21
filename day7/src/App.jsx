import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ric", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Mark", age: 22 }
  ]);

  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  const [search, setSearch] = useState([]);

  const handleDelete = (id) => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  const handleEditName = (id) => {
    const updatedName = prompt("New Name:");

    if (updatedName === "" || updatedName == null) {
      alert("No Name input");
      return;
    }

    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, name: updatedName }
          : u
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.age) {
      console.log("Error: need to fill out");
      return;
    }

    const newId =
      users.length > 0
        ? Math.max(...users.map((u) => u.id)) + 1
        : 1;

    setUsers((prev) => [
      ...prev,
      {
        id: newId,
        name: user.name,
        age: Number(user.age)
      }
    ]);

    setUser({
      name: "",
      age: ""
    });
  };

  const handleSearch = (searchValue) => {
    setSearch(
      users.filter((u) =>
        u.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            width: "500px",
            marginBottom: "1rem",
            borderBottom: "1px solid black",
            justifyContent: "space-between"
          }}
        >
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>

          <button onClick={() => handleDelete(user.id)}>
            Delete
          </button>

          <button
            onClick={() =>
              setUsers((prev) =>
                prev.map((u) =>
                  u.id === user.id
                    ? { ...u, age: u.age + 1 }
                    : u
                )
              )
            }
          >
            Update Age
          </button>

          <button onClick={() => handleEditName(user.id)}>
            Edit Name
          </button>
        </div>
      ))}

      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              name: e.target.value
            }))
          }
        />

        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          value={user.age}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              age: e.target.value
            }))
          }
        />

        <button type="submit">Register</button>
      </form>

      <h1>Search</h1>

      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <h1>Results:</h1>

      {search.length === 0 ? (
        <p>No users found.</p>
      ) : (
        search.map((s) => (
          <p key={s.id}>{s.name}</p>
        ))
      )}
    </>
  );
}

export default App;