import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import type { AuthType, AuthFormData } from "../types/AuthType";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  type: AuthType;
};

const AuthForm = ({ type }: Props) => {
  const [form, setForm] = useState<AuthFormData>({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  

  const handleChange = (field: keyof AuthFormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.email ||
      !form.password ||
      (type === "signup" && !form.username)
    ) {
      setError("All fields are required");
      return;
    }
      
    setError("");

    console.log(type, form);

    if (type === "login"){
      localStorage.setItem("user", JSON.stringify(form))
      navigate("/cart")
    }

    if (type === "signup"){
      navigate("/login")
    }

    // Clear form
    setForm({
      username: "",
      email: "",
      password: "",
    });



  };



  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 p-6 border rounded-xl"
    >
      <h2 className="text-2xl mb-4 text-center">
        {type === "login" ? "Login" : "Sign Up"}
      </h2>

      {type === "signup" && (
        <Input
          placeholder="Username"
          value={form.username || ""}
          onChange={(e) => handleChange("username", e.target.value)}
        />
      )}

      <Input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <Button text={type === "login" ? "Login" : "Sign Up"} />
      {type === "login" && (
        <p className=" text-sm text-ceneter mt-4 text-center">
          Dont have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font medium hover:underline"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      )}

      
      
      {type === "signup" && (
        <p className=" text-sm text-ceneter mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font medium hover:underline"
          >
            {" "}
          login
          </Link>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
