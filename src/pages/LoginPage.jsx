import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Typography from "../components/ui/Typography";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    try {
      loginUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error.message === "User not found.") {
        toast((t) => (
          <span className="flex items-center gap-2">
            User not found.{" "}
            <button 
              type="button"
              className="underline font-black hover:text-primary transition-colors"
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/register");
              }}
            >
              REGISTER HERE
            </button>
          </span>
        ));
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-secondary">
      <div className="bg-white p-12 border-4 border-black shadow-[12px_12px_0px_0px_#000] w-full max-w-md">
        <div className="mb-8 text-center">
          <Typography variant="h2">Welcome to SkyMart</Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="space-y-1">
            <Input
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Please enter a valid gmail domain address",
                },
              })}
            />
            {errors.email && (
              <Typography variant="caption" className="text-red-500! block mt-1">
                {errors.email.message}
              </Typography>
            )}
          </div>

          <div className="space-y-1">
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <Typography variant="caption" className="text-red-500! block mt-1">
                {errors.password.message}
              </Typography>
            )}
          </div>

          <Button type="submit" className="w-full mt-4">Login</Button>
          
          <Typography variant="caption" className="text-center block mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="underline text-black">
              Register
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}
