import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import postData from "@/components/data/datapost";
import CardPost from "@/components/CardPost";
import Footer from "@/components/Footer";

export default function Home() {
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
          <div className="flex flex-row items-center gap-5">
            <Link
              href="/articles"
              className={buttonVariants({ variant: "outline" })}
            >
              Postar artigo +
            </Link>
          </div>
        </div>
        <form className="pt-8">
          <Input placeholder="Pesquise aqui..." />
        </form>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Seja muito bem-vindo(a) à sua central de controle! Aqui, você tem o
          poder de moldar a experiência dos leitores do nosso blog e dar vida às
          suas ideias. Nesta plataforma, você encontrará todas as ferramentas
          necessárias para gerenciar e aprimorar o conteúdo do nosso blog de
          forma simples e eficiente.
        </p>
        <section className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {postData.map((post) => (
            <CardPost
              key={post.id}
              title={
                post.title.length > 50
                  ? `${post.title.substring(0, 50)}...`
                  : post.title
              }
              description={
                post.description.length > 200
                  ? `${post.description.substring(0, 200)}...`
                  : post.description
              }
              avatar={post.avatar}
              author={post.author}
              userr={post.userr}
              link={`/articles/view/${post.id}`}
            />
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}
