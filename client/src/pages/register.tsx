import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { throttle } from "lodash";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import {
  setFirstName,
  setLastName,
  setUsername,
  setEmail,
  setPassword,
  resetRegister,
} from "../store/registerSlice";
import { RootState, AppDispatch } from "../store/store";

import DefaultLayout from "@/layouts/default";
import { Link } from '@nextui-org/link';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, username, email, password } = useSelector(
    (state: RootState) => state.register,
  );

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "first_name":
        dispatch(setFirstName(value));
        break;
      case "last_name":
        dispatch(setLastName(value));
        break;
      case "username":
        dispatch(setUsername(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      default:
        break;
    }
  };

  const throttledHandleFormChange = throttle(handleFormChange, 1000);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:80/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
        }),
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Network response never came back");
      }

      const data = await response.json();

      console.log("Success:", data);
      if (!data) {
        console.log("Error: ", data);
        throw new Error("Network response was not ok");
      }
      navigate("/login");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-8 w-1/3">
        <h1 className="font-semibold text-xl">Register</h1>
        <form
          className="grid grid-cols-2 grid-rows-4 gap-y-12 gap-x-4"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            className="col-span-1 row-start-1"
            id="first_name"
            label="First Name"
            name="first_name"
            placeholder="Enter Your First Name"
            type="text"
            value={firstName}
            onChange={throttledHandleFormChange}
          />
          <Input
            isRequired
            className="col-span-1 row-start-1"
            id="last_name"
            label="Last Name"
            name="last_name"
            placeholder="Enter Your Last Name"
            type="text"
            value={lastName}
            onChange={throttledHandleFormChange}
          />
          <Input
            isRequired
            className="col-span-2 row-start-2"
            id="email"
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={throttledHandleFormChange}
          />
          <Input
            isRequired
            className="col-span-1 row-start-3"
            id="username"
            label="Username"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={throttledHandleFormChange}
          />
          <Input
            isRequired
            className="col-span-1 row-start-3"
            id="password"
            label="Password"
            name="password"
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={throttledHandleFormChange}
          />
          <Button
            className="col-span-2 row-start-4 bg-slate-400 font-semibold tracking-wide"
            type="submit"
          >
            Register
          </Button>
        </form>
        <div>
          Already have an account? <Link href="/login">Login</Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
