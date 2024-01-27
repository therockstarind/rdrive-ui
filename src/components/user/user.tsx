import { Avatar, Flex, Grid, Text } from "@radix-ui/themes"
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
    <div className="rounded-b-[50px] sm:rounded-md overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300">
        <img className="w-full transform hover:scale-110 transition duration-500 ease-in-out" src="/images/lyra.png" alt="Cover Image" />
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-[hsl(var(--ring))] p-2">
        <img className="w-24 h-24 rounded-full" src="/icons/rdrive.png" alt="Profile Image" />
    </div>
    </div>
</div>
<div className="mt-6 px-4 text-center">
        <h3 className="text-lg font-semibold">Username</h3>
        <p className="text-gray-600">@username</p>
    </div>
        </Flex>
        {/* Card */}
        <Flex className="md:w-3/4" direction="column" gap="3">
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-md h-40 bg-gradient-to-r from-cyan-500 to-blue-500"></div> 
                    <div className="rounded-md h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                    <div className="rounded-md h-40 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div> 
                    <div className="rounded-md h-40 bg-gradient-to-r from-cyan-500 to-blue-500"></div> 
                    <div className="rounded-md h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                </div>
        </Flex>
    </Flex>
</AnimatedDiv>
    )
}
export default User