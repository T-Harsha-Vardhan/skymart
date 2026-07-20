import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Typography from "../components/ui/Typography";
import Input from "../components/ui/Input";
import { registerUser } from "../services/authServices";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      const user = {
        id: crypto.randomUUID(),
        ...data,
      };

      registerUser(user);

      navigate("/login");
    } catch (error) {
      if (error.message === "Email is already exists.") {
        toast((t) => (
          <span className="flex items-center gap-2">
            Email already exists.{" "}
            <button 
              type="button"
              className="underline font-black hover:text-primary transition-colors"
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/login");
              }}
            >
              LOGIN HERE
            </button>
          </span>
        ));
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-primary">
      <div className="bg-white p-12 border-4 border-black shadow-[12px_12px_0px_0px_#000] w-full max-w-md">
        <div className="mb-8 text-center">
          <Typography variant="h2">Join SkyMart</Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="space-y-1">
            <Input
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must contain at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <Typography variant="caption" className="text-red-500! block mt-1">
                {errors.name.message}
              </Typography>
            )}
          </div>

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

          <Button type="submit" className="w-full mt-4">Create Account</Button>
          
          <Typography variant="caption" className="text-center block mt-2">
            Already have an account?{" "}
            <Link to="/login" className="underline text-black">
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}
