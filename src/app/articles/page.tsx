import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function Articles() {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-9">
      <div className="container">
        <Header />
      </div>

      <div className="container pt-20">
      <div className="flex flex-row items-center justify-between">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Publicar artigo
      </h2>
      </div>
      
      </div>

    </div>
  );
}
