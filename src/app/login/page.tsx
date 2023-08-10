import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
        <div className="flex h-screen items-center justify-center">
            <Card className="p-10 w-[400px]">
                <CardTitle className="mb-8">Olá, Kudika Digital.👋🏾</CardTitle>
            <form action="" className="flex flex-col gap-3">
                <label htmlFor="" >Nome de usuário</label>
                <Input className="w-full" placeholder="kudikadigital" />
                <label htmlFor="">Senha</label>
                <Input className="w-full" placeholder="**********" />
                <Button className="w-full mt-2">Entrar</Button>
            </form>
            </Card>
        </div>
    </div>
  );
}
