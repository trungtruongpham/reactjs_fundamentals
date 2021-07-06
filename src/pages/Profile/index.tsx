import { useEffect, useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>({});
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");

  useEffect(() => {
    console.log(token);
    console.log(isLoggedIn);

    if (token !== undefined && token !== null) {
      setIsLoggedIn(true);
    }

    if (userData !== null && userData !== undefined) {
      setUser(JSON.parse(userData));
      console.log(user);
    }

  }, [isLoggedIn]);

  return (
    <div className="p-4">
      {isLoggedIn ? (
        <div>
             <p>You are logged in. Welcome</p>
             <p>{user.name.title} {user.name.first} {user.name.last} </p>
             <img src={user.picture.large} alt="userimage"  />
        </div>
      ) : (
        <div>
          <a href="/login">Return to login</a>
        </div>
      )}
    </div>
  );
};

export default Profile;
