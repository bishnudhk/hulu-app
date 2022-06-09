import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // navigate directly to the home page 
  const navigate = useNavigate()
  // console.log(user.eamil)

  // for to logout function
  // async function
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex item-center justify-between p-4 z-[100] w-full absolute ">
      <Link to="/">
        <h1 className="text-green-600 text-4xl">hulu</h1>
      </Link>
      {/* if user?.email true display Account else : display Sign In( ) */}
      {/* user ley login garey xa vaney Account ko dekhauxa natra sign in dekhauxa
       */}
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
         
            <button onClick={handleLogout}
             className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Logout
            </button>
         
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
