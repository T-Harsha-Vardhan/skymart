import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Typography from "../components/ui/Typography";
import { registerUser } from "../services/authServices";
import { useNavigate } from "react-router";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setError,
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
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Typography variant="h2">Welcome to SkyMart</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          className="border-border rounded border p-2"
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
          <Typography variant="caption" className="text-red-500!">
            {errors.name.message}
          </Typography>
        )}

        <input
          className="border-border rounded border p-2"
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
          <Typography variant="caption" className="text-red-500!">
            {errors.email.message}
          </Typography>
        )}

        <input
          className="border-border rounded border p-2"
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
          <Typography variant="caption" className="text-red-500!">
            {errors.password.message}
          </Typography>
        )}

        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}
