export default function Loading(){
    return(
        <>
         <div className="flex justify-center items-center h-screen">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid !text-folly border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
               <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap  !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
         </div>
        </>
    )
}