import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-between flex-col items-center">
      <div className="w-screen h-screen flex p-3  justify-between">
        <h1 className="text-3xl">Todoist</h1>
        <div className="flex gap-3 justify-center items-start">
          <Link
            className="border-1 p-2 rounded-lg hover:bg-neutral-800"
            href="/signin"
          >
            Sign In
          </Link>
          <Link
            className="border-1 p-2 rounded-lg hover:bg-neutral-800"
            href="/singup"
          >
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
