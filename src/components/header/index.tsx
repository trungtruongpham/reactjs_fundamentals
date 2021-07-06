import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token !== undefined && token !== null) {
      setIsLoggedIn(true);
    }

    console.log(isLoggedIn);
    
  }, [isLoggedIn]);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="bg-gray-500 text-white">
      <ul className="flex space-x-4 p-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>{isLoggedIn ? <button onClick={logOut}>Logout</button> : <a href="/login">Login</a>}</li>
      </ul>
    </div>
  );
};

export default Header;
