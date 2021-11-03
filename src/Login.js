import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./login.css";

function Login() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [profilepic, setprofilepic] = useState("");
  const dispatch = useDispatch();

  const logintoApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Name is Required");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepic,
          })

          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilepic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://cdn5.f-cdn.com/contestentries/48061/9349086/5294dab19b387_thumb900.jpg"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Full Name"
          type="text"
        ></input>

        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          type="email"
        ></input>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></input>
        <input
          value={profilepic}
          onChange={(e) => setprofilepic(e.target.value)}
          placeholder="Image"
          type="text"
        ></input>
        <button type="submit" onClick={logintoApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login_register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}
export default Login;
