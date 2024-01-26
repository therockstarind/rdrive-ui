"use client";
import { Button } from "@nextui-org/react";
import { Flex } from "@radix-ui/themes";
import { BsStar } from "react-icons/bs";
import { fromRightVariant } from "®/lib/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import { Share } from "../Share";
import { Eye } from "../icons";

const StarShare = () => {
    const hover = 'border border-border rounded-full'
    return (
      <AnimatedHeading variants={fromRightVariant}>  
        <Flex gap="3" align="center" justify="center" display={{ initial: 'flex', sm: 'none'}}>
        <Button variant="light"  className={`${hover}`}>
            <Eye /> 3
          </Button>
          <Share />
          <Button variant="light"  className={`${hover}`}>
            <BsStar size={20}/> 5
          </Button>
        </Flex>
        <Flex gap="3" align="center" justify="center" display={{ initial: 'none', sm: 'flex'}}>
        <Button  size="sm" variant="light"  className={`${hover}`}>
            <BsStar size={20} /> 5
          </Button>
            <Share />
          <Button size="sm" variant="light" className={`${hover}`}>
            <Eye /> 3
          </Button> 
        </Flex>
    </AnimatedHeading>
    )
}
export default StarShare;