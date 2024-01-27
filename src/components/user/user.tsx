"use client"
import { Image } from "@nextui-org/react"
import { Avatar, Flex, Separator, Text } from "@radix-ui/themes"
import { FadeContainer } from "®/lib/FramerMotionVariants"
import AnimatedDiv from "../FramerMotion/AnimatedDiv"

const User = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Container */}
            <Flex direction={{ initial: "column", sm: "row" }} gap="4">
                {/* User */}
                <Flex className="md:w-2/4" direction="column" gap="3">
                <div className="relative rounded-lg mx-auto">
                        <div className="rounded-b-[50px] sm:rounded-md overflow-hidden opacity-90">
                            <Image 
                                src="/images/lyra.png" 
                                alt="Cover Image" 
                                className="rounded-none object-cover" 
                            />
                        </div>
                        <Avatar 
                            size="9" 
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" 
                            fallback="R"
                            className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 rounded-full sm:rounded-md"   
                        />
                </div>
                <div className="mt-16 text-center">
                        <h3 className="text-lg font-semibold">Username</h3>
                        <p className="text-gray-600">@username</p>
                </div>
                <div>                   
                </div>
                {/* Counts */}
                <div className="flex justify-around items-center">
                    <Flex direction="column" align="center" gap="1">
                        <Text as="p" size="8" weight="bold">300</Text>
                        <Text as="p" size="2" color="gray">Post</Text>
                    </Flex>
                    <Separator className="h-8" orientation="vertical" />
                    <Flex direction="column" align="center" gap="1">
                        <Text as="p" size="8" weight="bold">200</Text>
                        <Text as="p" size="2" color="gray">Followers</Text>
                    </Flex>
                    <Separator className="h-8" orientation="vertical" />
                    <Flex direction="column" align="center" gap="1">
                        <Text as="p" size="8" weight="bold">0</Text>
                        <Text as="p" size="2" color="gray">Following</Text>
                    </Flex>
                </div>
                </Flex>
                {/* Card */}
                <Flex className="md:w-3/4" direction="column" gap="3" p={{initial: '2', sm:'0'}}>
                    <div className="grid md:grid-cols-2 gap-3">
                        {Array.from({ length: 5 }, (_, index) => (
                            <div key={index} className={`rounded-md h-40 bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-500 to-blue-500' : 'from-indigo-500 via-purple-500 to-pink-500'}`}></div>
                        ))}
                    </div>
                </Flex>
            </Flex>
        </AnimatedDiv>
    );
};

export default User;
