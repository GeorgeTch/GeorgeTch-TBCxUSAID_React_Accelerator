"use client";
import { useState } from "react";

interface Profile {
  name: string;
  lastName: string;
  email: string;
}

function Profile() {
  const profileInfo: Profile = {
    name: "Jakob",
    lastName: "Simpson",
    email: "SimpsonJ@gmail.com",
  };
  let { name, lastName, email } = profileInfo;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  // console.log(password, confirmPassword);

  return (
    <div className="profile-container">
      <div className="static-profile-info">
        <ul>
          <li>Name: {name}</li>
          <li>Last Name: {lastName}</li>
          <li>Email: {email}</li>
        </ul>
      </div>
      <form className="profile-form" action="">
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordInput}
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Profile;
