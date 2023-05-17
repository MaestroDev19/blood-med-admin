import Nav from "./components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "./components/Firebase";
export default function Event() {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    await addDoc(collection(db, "events"), {
      name: values.title,
      date: values.date,
      desc: values.desc,
      type: values.type,
    });
    navigate("/home");
  };
  
  
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      date: "",
      article: "",
    },
    onSubmit,
  });
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10 lg:px-[80px] mb-[40px]">
        <h1 className="mt-[50px] text-4xl">Post</h1>
        <nav className="flex flex-col md:space-x-5 md:flex-row border-b-2 border-rasin-black md:border-transparent justify-center md:justify-start mt-[20px]   text-sm font-medium">
          <Link
            to="/blog"
            className="-mx-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly"
          >
            Blog
          </Link>
          <Link
            to="/event"
            className="-mx-px font-medium py-4 md:border-b-2 md:border-current text-folly"
          >
            Event
          </Link>
        </nav>
        <div className="space-y-2.5 my-[40px]">
          <h1 className="text-xl">
            <span className="font-normal">Blog</span>{" "}
          </h1>
          <p className="text-base lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>
        </div>
        <div className="mt-[40px] grid grid-cols-6  gap-x-4">
          <form className="col-span-6 md:col-span-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-10">
              <div className="space-y-5 w-full">
                <h1>Create event</h1>
                <div className="space-y-1">
                  <label
                    htmlFor="title"
                    className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                  >
                    <input
                      type="text"
                      id="title"
                      placeholder="Title"
                      className="peer h-8 w-full border-none bg-transparent text-base p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 "
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Name
                    </span>
                  </label>
                  <p className="text-munshell text-xs" id="error-email"></p>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="type"
                    className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                  >
                    <input
                      type="text"
                      id="type"
                      placeholder="Type"
                      className="peer h-8 w-full border-none bg-transparent text-base p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 "
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Type
                    </span>
                  </label>
                  <p className="text-munshell text-xs" id="error-email"></p>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="date"
                    className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                  >
                    <input
                      type="date"
                      id="date"
                      placeholder="Date"
                      className="peer h-8 w-full border-none bg-transparent text-base p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 "
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Date
                    </span>
                  </label>
                  <p className="text-munshell text-xs" id="error-email"></p>
                </div>
                <textarea
                  name="desc"
                  className="w-full text-outer-space bg-seasalt border-2 border-rasin-black px-3 pt-3 focus-within:border-transparent text-sm font-normal focus-within:ring-transparent "
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                <button
                  className="bg-folly p-4"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Create event
                </button>
              </div>
            </div>
          </form>
          <div className="col-span-6 md:col-span-2">
            <div>
              
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
