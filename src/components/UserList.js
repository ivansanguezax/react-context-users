import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/user/UserContext";

export default function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          href="#!"
          key={user.id}
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start align-items-center"
          onClick={() => getProfile(user.id) }
        >
        <img src={user.avatar} className="img-fluid m-4 rounded-circle" alt=""/>
         <p>
         {`${user.first_name} ${user.last_name}`}
         </p>
        </a>
      ))}
    </div>
  );
}
