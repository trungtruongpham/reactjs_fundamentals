import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  

  useEffect(() => {
    console.log(token);
    console.log(isLoggedIn);
    
    if (token !== undefined && token !== null) {
      setIsLoggedIn(true);
    }

  }, [isLoggedIn]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);

          localStorage.setItem("token", res.data.results[0].login.uuid);
          localStorage.setItem("user", JSON.stringify({name: res.data.results[0].name, picture: res.data.results[0].picture}));
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <div className="p-4">
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-36 space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="border border-black"
          />
          {errors?.email?.type === "required" && (
            <span className="text-red-500">This field is required</span>
          )}

          <input
            type="password"
            placeholder="Password"
            defaultValue=""
            {...register("password", { required: true })}
            className="border border-black"
          />
          {errors?.password?.type === "required" && (
            <span>This field is required</span>
          )}

          <button type="submit" className="bg-gray-300 border rounded-md">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
