"use client"
import { Button, Image } from "@nextui-org/react"
import { AspectRatio, Separator } from "@radix-ui/themes"
import { motion } from "framer-motion"
import { FadeContainer, fromLeftVariant, fromTopVariant } from "®lib/FramerMotionVariants"
import { Avatar, Card, Flex, Grid, Text } from "®rdrive/ui"
import AnimatedDiv from "../FramerMotion/AnimatedDiv"
import AnimatedVariant from "../FramerMotion/AnimatedVariant"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import FeedCard from "../blog/feedcard"

const User = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Container */}
            <Flex display="flex-col sm:flex-row" gap="gap-4">
                {/* User */}
                <Flex className="md:w-1/3" display="flex-col" gap="gap-3">
                <div className="relative">
                        <AspectRatio ratio={16 / 9} className="rounded-b-[100px] sm:rounded-md overflow-hidden opacity-90">
                            <Image 
                                src="/images/lyra.png" 
                                alt="Cover Image" 
                                className="rounded-none object-cover" 
                                width="100%"
                                height="100%"
                            />
                        </AspectRatio>
                        <Avatar
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png" 
                            fallback="R"
                            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-32 h-32 text-3xl"   
                        />
                </div>
                <Flex display="flex-col" align="items-center" m="mt-9">
                        <Text as="h1" size="text-2xl" font="font-bold" display="flex" align="items-center" gap="gap-2">
                            Rock Star 
                            <RiVerifiedBadgeFill className="text-blue-500" size={20}/>
                        </Text>
                        <Text size="text-xs sm:text-sm" color="text-muted-foreground">@rockstar</Text>
                </Flex>
                <div />
                {/* Counts */}
                <Flex justify="justify-around" align="items-center">
                    <Flex display="flex-col" align="items-center" gap="gap-1">
                        <Text as="h1" size="text-2xl" font="font-bold">300</Text>
                        <Text size="text-xs sm:text-sm" color="text-muted-foreground">Post</Text>
                    </Flex>
                    <Separator className="h-8" orientation="vertical" />
                    <Flex display="flex-col" align="items-center" gap="gap-1">
                        <Text as="h1" size="text-2xl" font="font-bold">200</Text>
                        <Text size="text-xs sm:text-sm" color="text-muted-foreground">Followers</Text>
                    </Flex>
                    <Separator className="h-8" orientation="vertical" />
                    <Flex display="flex-col" align="items-center" gap="gap-1">
                        <Text as="h1" size="text-2xl" font="font-bold">0</Text>
                        <Text size="text-xs sm:text-sm" color="text-muted-foreground">Following</Text>
                    </Flex>
                </Flex>
                <Flex />
                    {/* This button will be follow or edit based on user */}
                <Button radius="full" variant="light" className="mx-4 border border-border bg-default/20 dark:bg-default/40">
                    Follow
                </Button> 
                <div />
                {/* Social Icon */}
                <Flex justify="justify-center overflow-auto">
                {social.map((social, index) => (
                    <motion.div key={index} variants={fromLeftVariant} className="mx-4">
                        <Button isIconOnly size="lg" variant="light" href={social.link}>
                            <Image src={social.icon} alt={social.name} />
                        </Button>
                    </motion.div>
                ))}
                </Flex>
                <Card className="mx-auto p-3">
                    <Text as="p" color="text-muted-foreground" size="text-sm">About</Text>
                    <Text as="h1" size="text-base">
                        i wanna die in front of more then billoins people.
                    </Text>
                </Card>
                </Flex>
                {/* Card */}
                <Flex className="md:w-2/3" display="flex-col" gap="gap-3" p="p-2 sm:p-0">
                    <Text as="h1" size="text-2xl" font="font-bold">Activity</Text>
                    <div className="grid md:grid-cols-2 gap-3">
                        {Array.from({ length: 4 }, (_, index) => (
                            <AnimatedVariant key={index} variants={fromLeftVariant} mobileVariants={fromTopVariant}>
                            <div key={index} className={`rounded-md h-40 bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-500 to-blue-500' : 'from-indigo-500 via-purple-500 to-pink-500'}`}></div>
                            </AnimatedVariant>
                        ))}
                    </div>
                    <Text as="h1" size="text-2xl" font="font-bold">Recent Post</Text>
                    <Grid display="md:grid-cols-2 gap-3">
                        {data.map((feed) => (
                        <AnimatedVariant variants={fromLeftVariant} mobileVariants={fromTopVariant}>
                            <FeedCard feed={feed}/>
                        </AnimatedVariant>
                        ))}
                    </Grid>
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

const data = [
    {
        title: "Step-by-Step Guide to Settings - Demo 1",
        img: "https://www.minterapp.com/wp-content/uploads/2022/11/image4-1280x640.png",
        date: "1 day",
        time: "05:00",
        views: 1200,
        likes: 85,
        href: '/blogs/preview',
        author: {
            name: "Rock Star",
            username: "/rockstar",
            img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png"
        },
    },
    {
        title: "Exploring Settings for Efficiency - Demo 2",
        img: "https://www.foundingminds.com/wp-content/uploads/2023/12/hands-multitasking-with-laptop-notebook-1280x640.jpg",
        date: "2 days",
        time: "03:00",
        views: 950,
        likes: 78,
        href: '/blogs/preview',
        author: {
            name: "Rock Star",
            username: "/rockstar",
            img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png"
        },
    },
    {
        title: "Mastering Device Settings - Demo 3",
        img: "https://www.boat-lifestyle.com/cdn/shop/articles/WhatsApp_Image_2020-10-29_at_6.20.30_PM.jpg",
        date: "5 days",
        time: "04:00",
        views: 1800,
        likes: 120,
        href: '/blogs/preview',
        author: {
            name: "Rock Star",
            username: "/rockstar",
            img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png"
        },
    },
    {
        title: "Optimizing Your Experience - Demo 4",
        img: "https://www.gizchina.com/wp-content/uploads/images/2020/02/Xiaomi-redmi-note-6-pro-test-xiaotech-1280x640-1.jpg",
        date: "1 day",
        time: "03:30",
        views: 1350,
        likes: 95,
        href: '/blogs/preview',
        author: {
            name: "Rock Star",
            username: "/rockstar",
            img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png"
        },
    }
];