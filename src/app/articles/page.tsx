import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

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
        <form action="" className="mt-10">
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="" className="leading-7 [&:not(:first-child)]:mt-6">
              Título
            </label>
            <Input
              placeholder="Ex: Passos para desenolver um software de qualidade..."
              className="w-full h-12"
              required
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="" className="leading-7 [&:not(:first-child)]:mt-6">
              Descrição
            </label>
            <textarea
              placeholder="Escreva uma pequena descrição sobre o que será abordado no artigo"
              className="flex h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>

          <div className="flex gap-2 my-5">
            <div className="w-full">
              <label
                htmlFor=""
                className="leading-7 [&:not(:first-child)]:mt-6"
              >
                Autor
              </label>
              <Input
                placeholder="Escreva uma pequena descrição sobre o que será abordado no artigo"
                className="w-full h-12"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="leading-7 [&:not(:first-child)]:mt-6"
              >
                Url Autor
              </label>
              <Input
                placeholder="Escreva uma pequena descrição sobre o que será abordado no artigo"
                className="w-full h-12"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="" className="leading-7 [&:not(:first-child)]:mt-6">
              Escreva o artigo aqui
            </label>
            <textarea
              placeholder=""
              className="flex h-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>

          <div className="flex flex-col gap-2 my-6">
            <Button variant="default">Publicar</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
