import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen overflow-hidden flex">
        {/**--------LEFT------------- */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  h-[100%] overflow-y-auto sidebar p-4">
          <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
              <Image src='/logo.png' width={32} height={32} alt=''/>
              <span className="hidden lg:block font-bold">SchoolName</span>
          </Link>

          <Menu/>
        </div>


        {/**--------RIGHT------------- */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] min-h-screen overflow-y-auto ">
         <Navbar/>
         {children}
          </div>
      
        </div>
    );
  }