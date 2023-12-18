"use client";

import Link from "next/link";
import Button from "./components/as/button";
import Button2 from "./components/as-child/button";

const Page = () => (
  <div className="h-screen flex justify-center items-center flex-col">
    <div className="flex justify-center items-center gap-2">
      {/* as prop */}
      <Button onClick={() => console.log("hello")}>Test</Button>

      <Button href="#hello" as="a" className="bg-blue-300">
        Test2
      </Button>
    </div>

    <div className="flex justify-center gap-2 mt-2">
      {/* as child */}
      <Button2 asChild onClick={() => console.log("hello3")}>
        <Link href="#hello3" className="bg-teal-600">
          Test3
        </Link>
      </Button2>

      <Button2 asChild onClick={() => console.log("parent")}>
        <button className="bg-green-600" onClick={() => console.log("child")}>
          Test4
        </button>
      </Button2>
    </div>
  </div>
);

export default Page;
