import {useState} from "react";

export default function TestModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-folly text-rasin-black w-fit "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add to inventory
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl border-2 border-rasin-black">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-seasalt outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b-2 border-solid border-rasin-black rounded-t">
                  <h3 className="text-lg font-medium">
                    Modal title
                  </h3>
                   <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-rasin-black font-light">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t-2 border-solid border-rasin-black r">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}