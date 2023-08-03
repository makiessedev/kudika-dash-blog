import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
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
            Artigos Publicados
          </h2>
          <div>
            <Link
              href="/articles"
              className={buttonVariants({ variant: "outline" })}
            >
              Adicionar artigo +
            </Link>
          </div>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Seja muito bem-vindo(a) à sua central de controle! Aqui, você tem o
          poder de moldar a experiência dos leitores do nosso blog e dar vida às
          suas ideias. Nesta plataforma, você encontrará todas as ferramentas
          necessárias para gerenciar e aprimorar o conteúdo do nosso blog de
          forma simples e eficiente. 
          
        </p>
      </div>
    </div>
  );
}
