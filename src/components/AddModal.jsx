import { useState } from "react";
import { useFormik } from "formik";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./Firebase";
export default function AddModal() {
  const onSubmit = async(values)=>{
    await addDoc(collection(db, "inventory"), {
      donationID: values.donationid,
      bloodcomponent: values.bloodComponent,
      bloodtype:values.bloodtype,
      expdate:values.expdate,
      availability:values.availability
      
    });
    setShowModal(false)
  }
  const [showModal, setShowModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      donationid: "",
      bloodComponent:"",
      bloodtype:"",
      expdate:"",
      availability:"",
    },
    onSubmit
  });
  return (
    <>
      <button
        className="bg-folly text-rasin-black  "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add to inventory
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl border-2 border-rasin-black">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-seasalt outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b-2 border-solid border-rasin-black rounded-t">
                  <h3 className="text-lg font-medium">Add to inventory</h3>
                  <i
                    className="ri-close-line"
                    onClick={() => setShowModal(false)}
                  ></i>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    className="md:flex md:justify-center md:items-center "
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="flex flex-col space-y-10">
                      <div className="space-y-5 md:w-[380px] w-full">
                        <div className="space-y-1">
                          <label
                            htmlFor="donationid"
                            className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                          >
                            <input
                              type="text"
                              id="donationid"
                              placeholder="Donationid"
                              className="peer h-8 w-full border-none bg-transparent text-base p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 "
                              value={formik.values.donationid}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                              Donation ID
                            </span>
                          </label>
                          
                        </div>
                        
                        <div className="space-y-1">
                          <label
                            htmlFor="bloodComponent"
                            className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                          >
                            <input
                              type="text"
                              id="bloodComponent"
                              placeholder="bloodComponent"
                              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 text-base"
                              value={formik.values.bloodComponent}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                              Blood component
                            </span>
                          </label>
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="bloodtype"
                            className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                          >
                            <input
                              type="text"
                              id="bloodtype"
                              placeholder="Blood type"
                              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 text-base"
                              value={formik.values.bloodtype}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                              Blood type
                            </span>
                          </label>
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="expdate"
                            className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                          >
                            <input
                              type="date"
                              id="expdate"
                              placeholder="Expdate"
                              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 text-base"
                              value={formik.values.expdate}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                              Expiration date
                            </span>
                          </label>
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="availability"
                            className="relative block overflow-hidden  border-rasin-black px-3 pt-3 focus-within:border-rasin-black  focus-within:ring-rasin-black"
                          >
                            <input
                              type="text"
                              id="availability"
                              placeholder="Availability"
                              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent font-light focus:border-transparent focus:outline-none focus:ring-0 text-base"
                              value={formik.values.availability}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                              Availability
                            </span>
                          </label>
                        </div>
                        <button
                        className="bg-folly"
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        Add to inventory
                      </button>
                      </div>
                      
                    </div>
                  </form>
                </div>
                {/*footer*/}

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
