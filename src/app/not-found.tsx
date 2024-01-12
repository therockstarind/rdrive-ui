"use client"
import { Button, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
 
export default function NotFound() {
    const router = useRouter();
    return (
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <Image src="/icons/404.png" alt="" width={400} height={400} isBlurred/>
          <div className="flex flex-col text-center gap-4">
          <h1 className="text-5xl font-bold" >Page not Found</h1>
          <p className="text-muted-foreground font-mono">Sorry, but we can't find that page or it has been deleted or removed</p>
          </div>
          <Button variant="bordered" className="w-full max-w-48" onPress={() => router.push('/')}>BACK TO HOME</Button>
    </div>
  )
}