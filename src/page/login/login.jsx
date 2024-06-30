import { Link } from "react-router-dom";
import PortfolioForm from "../../components/form/PortfolioForm";
import { Toaster } from "react-hot-toast";
import PortfolioInput from "../../components/form/PortfolioInput";

const LoginPage = () => {
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="md:flex justify-center items-center md:h-[100vh]">
      <Toaster />
      <div className="mt-6 bg-gray-50 w-[480px] h-[460px] rounded-md p-10 mx-auto shadow-md border-slate-950">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Login Please
        </h2>
        <p className="text-sm text-gray-400 text-center mb-8">
          Sign in to access your account
        </p>
        <PortfolioForm onSubmit={onSubmit}>
          <PortfolioInput
            type="email"
            name="email"
            label="Username Or Email"
            placeholder="Enter Your Email ..."
          />
          <PortfolioInput
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Password ..."
          />
          <input
            type="submit"
            value="Login"
            className="btn btn-color border-none btn-block rounded-3xl mt-4"
          />
          <p className="text-center mt-2">
            <small>
              New to here Please{" "}
              <Link to="/register" className="text-color font-bold">
                Sign Up
              </Link>
            </small>
          </p>
        </PortfolioForm>
      </div>
    </div>
  );
};

export default LoginPage;
