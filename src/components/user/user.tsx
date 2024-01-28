"use client"
import { Button, Image } from "@nextui-org/react"
import { AspectRatio, Avatar, Flex, Separator } from "@radix-ui/themes"
import { FadeContainer, fromLeftVariant, fromTopVariant } from "®lib/FramerMotionVariants"
import AnimatedDiv from "../FramerMotion/AnimatedDiv"
import { motion } from "framer-motion"
import AnimatedVariant from "../FramerMotion/AnimatedVariant"
import { Text } from "®/rdrive/ui"

const User = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Container */}
            <Flex direction={{ initial: "column", sm: "row" }} gap="4">
                {/* User */}
                <Flex className="md:w-1/3" direction="column" gap="3">
                <div className="relative">
                        <AspectRatio ratio={16 / 9} className="rounded-b-[50px] sm:rounded-md overflow-hidden opacity-90">
                            <Image 
                                src="/images/lyra.png" 
                                alt="Cover Image" 
                                className="rounded-none object-cover" 
                                width="100%"
                                height="100%"
                            />
                        </AspectRatio>
                        <Avatar 
                            size="8" 
                            src="/icons/rdrive.png" 
                            fallback="R"
                            className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 rounded-full sm:rounded-md"   
                        />
                </div>
                <Flex direction="column" align="center" mt="8">
                        <Text as="h3" font="bold">Rock Star</Text>
                        <Text as="p" color="gray">@rockstar</Text>
                </Flex>
                <div />
                {/* Counts */}
                <div className="flex justify-around items-center">
                    <Flex direction="column" align="center" gap="1">
                        <Text as="h3" font="bold">300</Text>
                        <Text as="p" color="gray">Post</Text>
                    </Flex>
                    <Separator className="h-8" orientation="vertical" />
                    <Flex direction="column" align="center" gap="1">
                        <Text as="h3" font="bold">200</Text>
                        <Text as="p" color="gray">Followers</Text>
                    </Flex>
                    <Separator className="h-8" orientation="vertical" />
                    <Flex direction="column" align="center" gap="1">
                        <Text as="h3" font="bold">0</Text>
                        <Text as="p" color="gray">Following</Text>
                    </Flex>
                </div>
                <div />
                    {/* This button will be follow or edit based on user */}
                <Button radius="full" variant="light" className="mx-4 border border-border bg-default/20 dark:bg-default/40">
                    Follow
                </Button> 
                <div />
                <Flex className="justify-center overflow-auto">
                {social.map((social, index) => (
                    <motion.div key={index} variants={fromLeftVariant} className="mx-4">
                        <Button isIconOnly size="lg" variant="light" href={social.link}>
                            <Image src={social.icon} alt={social.name} />
                        </Button>
                    </motion.div>
                ))}
                </Flex>
                </Flex>
                {/* Card */}
                <Flex className="md:w-2/3" direction="column" gap="3" p={{initial: '2', sm:'0'}}>
                    <div className="grid md:grid-cols-2 gap-3">
                        {Array.from({ length: 5 }, (_, index) => (
                            <AnimatedVariant key={index} variants={fromLeftVariant} mobileVariants={fromTopVariant}>
                            <div key={index} className={`rounded-md h-40 bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-500 to-blue-500' : 'from-indigo-500 via-purple-500 to-pink-500'}`}></div>
                            </AnimatedVariant>
                        ))}
                    </div>
                </Flex>
            </Flex>
        </AnimatedDiv>
    );
};

export default User;

const social = [
    {name:"Gmail", link:"https://gmail.com", icon:"/social/gmail.png"},
    {name:"YouTube", link:"https://youtube.com", icon:"/social/youtube.png"},
    {name:"WhatsApp", link:"https://whatsapp.com", icon:"/social/whatsapp.png"},
    {name:"Telegram", link:"https://telegram.com", icon:"/social/telegram.png"},
    {name:"GitHub", link:"https://github.com", icon:"/social/github.png"},
]