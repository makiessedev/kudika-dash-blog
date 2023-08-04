import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

type CardPostProps = {
    title: string;
    description: string;
    avatar: string;
    author: string;
    userr: string;
    link: string;
}

export default function CardPost({title, description, avatar, author, userr, link} : CardPostProps) {
  return (
    <Card className="w-[400px]">
            <CardHeader>
              <Link href={link}>
              <CardTitle  className="mb-3 pt-3 transition-all duration-300 hover:text-red-800">
                {title}
              </CardTitle>
              </Link>
              <CardDescription>
                {description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
              <span
                className="text-sm font-medium leading-none"
                title="CTO of Kudika Digital"
              >
                {author}
              </span>
              <Link href="#!">
                <span className="text-sm text-muted-foreground">
                  {userr}
                </span>
              </Link>
            </div>
            </CardFooter>
          </Card>
  )
}

