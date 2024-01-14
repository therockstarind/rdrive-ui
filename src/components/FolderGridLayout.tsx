"use client"
import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AnimatedDiv from "./FramerMotion/AnimatedDiv";
import { FadeContainer, fromLeftVariant } from "®/lib/FramerMotionVariants";
import { motion } from "framer-motion";
import { siteConfig } from "®/config/site";

const FolderItems  = [
    {
      href: '/hello',
      title: 'Apple',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/412px-Apple_Computer_Logo_rainbow.svg.png',
    },
    {
      href: '/',
      title: 'Asus',
      img: '',
    },
    {
      href: '/',
      title: 'Google',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    },
    {
      href: '/',
      title: 'HTC',
      img: 'https://1000logos.net/wp-content/uploads/2021/05/HTC-logo.png',
    },
    {
      href: '/',
      title: 'Xiaomi-12-Pro-(Dimensity-Edition)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/2048px-Reliance_Jio_Logo_%28October_2015%29.svg.png',
    },
    {
      href: '/',
      title: 'Redmi K20 Pro',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Motorola_logo.svg/2560px-Motorola_logo.svg.png',
    },
];
const FolderGridLayout = () => {
    const router = useRouter();
    return(
        <AnimatedDiv variants={FadeContainer} className="FolderCardLayout">
            {FolderItems.map((card, index) => (
              <motion.div key={index} variants={fromLeftVariant}>
                <Card key={index} className="FolderCard borderRadius dark:data-[hover=true]:bg-default/40" shadow="none" isHoverable isPressable onPress={() => router.push('/Xiaomi-12-Pro-(Dimensity-Edition)')} aria-label={card.title}>
                    <div className="h-40 flex justify-center items-center mb-2"   >
                        <Image src={card.img || siteConfig.fallback } alt={card.title} isBlurred className="mx-auto my-10 h-40 object-center object-contain rounded-none"/>
                    </div>
                    <h1 className="text-center line-clamp-1">{card.title}</h1>
                </Card>
            </motion.div>
            ))}
        </AnimatedDiv>
    );
}

export default FolderGridLayout;

