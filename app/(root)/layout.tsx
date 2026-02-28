import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
};

export function DotBackground({ children }: props) {
  return (
    <div className="relative h-screen w-full bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px] -z-0",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {children}

      
      {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p> */}
    </div>
  );
}

export default DotBackground;
