export default function Modal({visible,onClose}){
    if(!visible){
        return null;
    }
    return(
       <>
        <div className="fixed inset-0 bg-seasalt bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='bg-seasalt p-10 border relative w-[500px]' >
                <form className='flex justify-center items-center'>
                   <div className='flex flex-col space-y-10'>
                      <div className='flex flex-col space-y-5'>
                      <div>
                       <label for="donorID" className="block text-sm font-medium text-rasin-black">
                        Donor ID
                       </label>
                       <input type="text" id="donorID"  className="mt-1 w-full  border-rasin-black bg-seasalt sm:text-sm"/>
                      </div>
                      <div>
                       <label for="donationDate" className="block text-sm font-medium text-rasin-black ">
                        Donation Date
                       </label>
                       <input type="date" id="donationDate"   className="mt-1 w-full bg-seasalt border-rasin-black  sm:text-sm"/>
                      </div>
                      <div>
                       <label for="bloodGroup" className="block text-sm font-medium text-rasin-black">
                        Blood group
                       </label>
                       <select id="bloodGroup" className="mt-1 w-full bg-seasalt border-rasin-black  sm:text-sm">
                        <option selected value="">Select a blood group</option>
                        <option value="O+">O+</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="O-">O-</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="AB-">AB-</option>
                       </select>
                      </div>
                      <div>
                       <label for="UserEmail" className="block text-sm bg-seasalt font-medium text-rasin-black">
                        Quantity
                       </label>
                       <input type="number" id="UserEmail"  className="mt-1 w-full  border-rasin-black bg-seasalt  sm:text-sm"/>
                      </div>
                    </div>
                    <button className='p-3.5  bg-munshell text-seasalt text-center font-medium text-base'>Add donation</button>
                   </div> 
                </form>
            </div>
            <button className='absolute top-[160px] right-[510px]' onClick={onClose}><i class="ri-close-line"></i></button>
        </div>
       </>
    )
}