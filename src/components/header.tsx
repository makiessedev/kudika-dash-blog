import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

  import Logo from '@/assets/darklogo.png'
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import Image from "next/image";

import React from 'react'
import Link from "next/link";
import Rabisco from '@/assets/rabisco.svg'

export default function header() {
  return (
    <header className="flex justify-between">
          <div>
            <Link href="/" title="Kudika Digital">
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight">Kudika-dash</span>
            </Link>
            <Image src={Rabisco} alt="..." height={19} />
          </div>

          {/* <nav>
            <ul className="flex justify-between gap-10">
              <li>
                <Link href="/" className="font-medium text-primary underline underline-offset-4">Home</Link>
              </li>
              <li>
                <Link href="/articles" className="font-medium text-primary underline underline-offset-4">Artigos</Link>
              </li>
            </ul>
          </nav> */}

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="leading-7 [&:not(:first-child)]:mt-6 font-medium">Administrador</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/kudikadigital.png" />
                  <AvatarFallback>KD</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Kudika Digital</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
  )
}
