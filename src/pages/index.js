import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Designed from "@/components/pages/Designed";
import Raw from "@/components/pages/Raw";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [designed, setDesigned] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      <div className={`container mx-auto px-4 pb-9`}>
        <div className="flex flex-col items-center">
          <Navbar designed={designed} setDesigned={setDesigned} />
          <Raw />
        </div>
      </div>
      {/*designed ? <Designed /> : <Raw />*/}
    </main>
  );
}
