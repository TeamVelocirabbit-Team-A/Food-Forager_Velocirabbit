import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@nextui-org/input";
import { throttle } from "lodash";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";
import { RootState } from "@/store/store";
import { setPassword, setUsername } from "@/store/loginSlice";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const { username, email, password } = useSelector(
    (state: RootState) => state.login,
  );

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;

    switch (inputName) {
      case "username":
        console.log("username", value);
        dispatch(setUsername(value));
        break;
      case "password":
        console.log("password", value);
        dispatch(setPassword(value));
        break;
      default:
        break;
    }
  };

  const throttledHandleFormChange = throttle(handleFormChange, 1000);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      throw new Error("Form is missing required fields");
    }

    setWasSubmitted(true);
  };

  useEffect(() => {
    if (wasSubmitted) {
      const login = async () => {
        try {
          const response = await fetch("http://localhost:80/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
            mode: "cors",
          });

          if (!response.ok) {
            setWasSubmitted(false);
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log("Login successful:", data);

          // Handle successful login (e.g., navigate to another page)
          navigate("/");
        } catch (error) {
          console.error("Error during login:", error);
        }
      };

      login();
    }
  }, [wasSubmitted]);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-8 w-1/3">
        <h1 className="font-semibold text-xl">Login</h1>
        <form
          className="grid grid-cols-1 grid-rows-3 gap-y-12 gap-x-4"
          onSubmit={handleLogin}
        >
          <Input
            isRequired
            className="col-span-1 row-start-1"
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
            className="col-span-1 row-start-2"
            id="password"
            label="Password"
            name="password"
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={throttledHandleFormChange}
          />
          <Button
            isLoading={wasSubmitted}
            className="col-span-2 row-start-3 bg-slate-400 font-semibold tracking-wide"
            type="submit"
          >
            Login
          </Button>
        </form>
        <div>
          Don&apos;t have an account? <Link href="/register">Register</Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;
