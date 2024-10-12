import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { throttle } from "lodash";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import DefaultLayout from "@/layouts/default";

type RegisterFormData = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        body: JSON.stringify(formData),
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
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
      <div className="register-container">
        <h1>Register</h1>
        <form className="register_form" onSubmit={handleSubmit}>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              isRequired
              id="first_name"
              label="First Name"
              name="first_name"
              placeholder="Enter Your First Name"
              type="text"
              value={formData.first_name}
              onChange={throttledHandleFormChange}
            />
            <Input
              isRequired
              id="last_name"
              label="Last Name"
              name="last_name"
              placeholder="Enter Your Last Name"
              type="text"
              value={formData.last_name}
              onChange={throttledHandleFormChange}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              isRequired
              label="Email"
              placeholder="Enter Your Email"
              type="email"
            />
            <Input
              isRequired
              label="Password"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
