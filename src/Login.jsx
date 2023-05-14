import { auth } from "./components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

export default function Login() {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate("/home");
      const user = result.user;
      console.log(user.uid);
    } catch (errors) {
      let errorCode = errors.code;
      if (errorCode === "auth/wrong-password") {
        const errorPassword = document.querySelector("#error-password");
        errorPassword.innerHTML = "Wrong password";
      } else if (errorCode === "auth/user-not-found") {
        document.querySelector("#error-email").innerHTML =
          "This account doesn't exist";
      }
      console.error("Encountered some errors!", errors);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  return (
    <>
      <header className=" mx-auto max-w-screen  py-[25px] px-5 md:px-10 lg:px-[50px] ">
        <nav>
          <h1 className="font-medium  text-xl">
            <span class="text-folly">Blood</span>MED
          </h1>
        </nav>
      </header>
      <main className=" mt-[60px] container mx-auto  px-5 md:px-10 lg:px-[50px] w-screen">
        <form
          className="md:flex md:justify-center md:items-center "
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col space-y-10">
            <div className="space-y-2.5">
              <h1 className="text-3xl">
                Welcome back!
                <br />
                Login{" "}
              </h1>
              <p className="font-light text-sm">
                Enter your login details to login
              </p>
            </div>
            <div className="space-y-5 md:w-[380px] w-full">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="peer h-8 w-full border-none bg-transparent text-base p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 "
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Email
                  </span>
                </label>
                <p className="text-munshell text-xs" id="error-email"></p>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                >
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 text-base"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Password
                  </span>
                </label>
                <p className="text-munshell text-xs" id="error-password"></p>
              </div>
            </div>
            <button
              className="bg-folly"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
