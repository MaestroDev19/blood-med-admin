import Nav from "./components/Nav";

export default function Blog (){
    return(
        <>
        <Nav/>
        <main className="px-5 md:px-10">
        <div className=" space-y-2.5 my-[50px]">
          <h1 className="text-2xl md:text-3xl">
            <span className="font-normal">Blog</span>{" "}
          </h1>
          <p className="text-sm md:text-base  font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>
        </div>
        </main>
        </>
    )
}