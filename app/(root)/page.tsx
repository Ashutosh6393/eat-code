import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./_components/Navbar";
import { useTheme } from "next-themes";

export default function Home() {
  return (
    <div className="flex z-10 flex-col items-center justify-center h-screen">
      <Navbar />
      <Button>
        click here
      </Button> 
    </div>
    
  );
}
