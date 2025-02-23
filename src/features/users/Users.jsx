import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const usersData = useSelector((state) => state.users);

  return (
    <section className="users">
      <h2 className="title">List of users</h2>

      {usersData.isLoading && <p>Loading...</p>}

      {!usersData.isLoading && usersData.errorMsg && (
        <p>{usersData.errorMsg}</p>
      )}

      {usersData.users.length > 0 && (
        <ul role="list" className="users-list">
          {usersData.users.map((user) => (
            <li key={user.id} className="users-list-item">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Users;
