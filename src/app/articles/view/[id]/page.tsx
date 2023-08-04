"use client";

import Header from "@/components/header";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Screen1 from "@/assets/screen1.png";
import Footer from "@/components/Footer";
// import { BsArrowLeftShort } from

export default function View() {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-9">
      <div className="container">
        <Header />
      </div>

      <div className="container pt-20">
        <div className="flex flex-row items-center justify-between py-6 mb-10">
        <Link href="/">
          <p className="leading-7 text-gray-400 [&:not(:first-child)]:mt-6">
            Voltar
          </p>
        </Link>
        <span>opções</span>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="mt-10 scroll-m-20 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
            Nome do Artigo aqui
          </h2>
          <p className="leading-8 tracking-normal text-[16px] px-60 text-center text-gray-500/100 [&:not(:first-child)]:mt-6">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            sunt animi nam voluptatibus nesciunt, temporibus blanditiis error
            expedita quidem consectetur.
          </p>
          <div className="flex flex-row gap-2 items-center justify-center mt-8">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ">
              <span
                className="text-sm font-medium leading-none"
                title="CTO of Kudika Digital"
              >
                Domingos Henriques
              </span>
              <Link href="https://github.com/euotiniel">
                <span className="text-sm text-muted-foreground">
                  @dominhosh51
                </span>
              </Link>
            </div>
          </div>
        </div>
        <section className="container mt-32 pl-52 pr-52 flex flex-col gap-3">
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            Uma estratégia de marketing eficaz é essencial para o sucesso de
            qualquer negócio. No entanto, criar uma estratégia de marketing pode
            parecer intimidador, especialmente para empresas que estão começando
            ou que não têm muita experiência em marketing. Felizmente, existem
            etapas que você pode seguir para criar uma estratégia de marketing
            sólida e eficaz.
          </p>
          <div className="mt-5">
            <Image src={Screen1} alt="Imagem no blog" />
          </div>
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            Neste guia passo a passo, você aprenderá como definir seus objetivos
            de marketing, analisar seu público-alvo, escolher as táticas certas
            de marketing, criar um plano de ação, monitorar e avaliar seu
            sucesso e muito mais. Com este guia, você terá as ferramentas
            necessárias para criar uma estratégia de marketing bem-sucedida e
            alcançar seus objetivos de negócios. Vamos falar sobre tudo isso
            neste artigo.
          </p>
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            O segundo passo na criação de uma estratégia de marketing eficaz é
            conhecer seu público-alvo. Quem são seus clientes ideais? Quais são
            suas necessidades e desejos? Como você pode ajudá-los a resolver
            seus problemas? Ao conhecer seu público-alvo, você pode criar
            mensagens de marketing e campanhas que ressoem com eles e os
            incentivem a tomar medidas. Alguns fatores importantes para entender
            sobre seu público-alvo incluem:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Aumentar as vendas</li>
            <li>Aumentar a consciencialização da marca</li>
            <li>Expandir a base de clientes</li>
            <li>Gerar leads</li>
          </ul>
          <p className="mt-6 border-l-2 pl-6 italic">
            Ao escolher suas táticas de marketing, leve em consideração seu
            público-alvo, suas vantagens competitivas e seus objetivos de
            marketing. Certifique-se de que suas táticas de marketing estejam
            alinhadas com sua estratégia geral.
          </p>
          <h2 className="mt-10 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            v1.0.2
          </h2>
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            O sexto e último passo na criação de uma estratégia de marketing
            eficaz é implementar e monitorar sua estratégia de marketing. Isso
            envolve colocar em prática seu plano de ação e monitorar o
            desempenho de suas campanhas de marketing. Ao monitorar sua
            estratégia de marketing, você pode identificar rapidamente quais
            táticas estão funcionando e quais não estão. Isso permite que você
            ajuste sua estratégia de marketing conforme necessário para
            maximizar seus resultados.
          </p>

          <h2 className="mt-10 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            ✨ News features
          </h2>
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            Neste guia passo a passo, você aprenderá como definir seus objetivos
            de marketing, analisar seu público-alvo, escolher as táticas certas
            de marketing, criar um plano de ação, monitorar e avaliar seu
            sucesso e muito mais. Com este guia, você terá as ferramentas
            necessárias para criar uma estratégia de marketing bem-sucedida e
            alcançar seus objetivos de negócios. Vamos falar sobre tudo isso
            neste artigo.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>New render components</li>
            <li>Aumentar as vendas</li>
            <li>Aumentar a consciencialização da marca</li>
            <li>Expandir a base de clientes</li>
            <li>Gerar leads</li>
            <li>Methor OOT, ir styles</li>
          </ul>

          <h2 className="mt-10 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Conclusão
          </h2>
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            Criar uma estratégia de marketing eficaz é crucial para o sucesso do
            seu negócio. Ao seguir estes seis passos, você pode criar uma
            estratégia de marketing bem pensada que ajude a alcançar seus
            objetivos de negócios. Lembre-se de que a estratégia de marketing
            não é uma solução única para todos os problemas. Deve ser uma
            abordagem consistente e em evolução que se adapte às mudanças no
            mercado e nas necessidades de seus clientes.
          </p>
          <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
            Experimente as estratégias de marketing que compartilhamos neste
            guia e nos conte como foram seus resultados. Entre em contato
            conosco se precisar de ajuda para implementar essas estratégias de
            marketing em seu negócio.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
