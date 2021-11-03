import React, { useEffect } from "react";
import Header from "./Header";
import Recents from "./Recents";

import { useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";

import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./firebase";

<Provider store="Store">
  <App />
</Provider>;
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {/*Header */}

      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="App_body">
          <Sidebar />
          <Feed />
          <Recents />
        </div>
      )}
    </div>
  );
}

export default App;
