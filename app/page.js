import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section className="grid grid-cols-2 h-[50vh]">
          <div className=" flex flex-col gap-2  items-center justify-center">
            <p className="text-4xl font-bold cursor-pointer text-black" >THE LINK SHORTNER</p>

            <p className="text-2xl font-semibold cursor-pointer text-black">Shorten Your URL/LINK </p>
            <Link href="/Shorten">
              <button type="button" className="text-white bg-blue-700 mt-4 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Try Now</button>
            </Link>
          </div>

          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" alt="v" src={"/Vector.png"} fill={true} />
          </div>
        </section>
      </main>


 
    </>

  );
}
