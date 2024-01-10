"use client";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import { Flex, Tooltip } from "@radix-ui/themes";
import { BiDislike, BiLike } from 'react-icons/bi';
import { fromRightVariant } from "®/lib/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import { Share } from "../Share";
import { Eye } from "../icons";

const LikeShare = () => {
    const hover = 'border border-border rounded-full'
    return (
      <AnimatedHeading variants={fromRightVariant}>  
        <Flex gap="3" align="center" justify="center" display={{ initial: 'flex', sm: 'none'}}>
        <Button variant="light"  className={`${hover}`}>
            <Eye />  3
          </Button>
          <Share />
          <Flex gap="3">
            <Tooltip content="was this help full?">
            <ButtonGroup variant="light" className={`${hover}`} radius="full">
            <Button>
              <BiLike size={20} /> 0
            </Button> 
            <Divider orientation="vertical" />
            <Button isIconOnly>
              <BiDislike size={20} />
            </Button> 
            </ButtonGroup>
            </Tooltip>
            </Flex>
        </Flex>
        <Flex gap="3" align="center" justify="center" display={{ initial: 'none', sm: 'flex'}}>
            <Flex gap="3">
            <Tooltip content="was this help full?">
            <ButtonGroup variant="light" className={`${hover}`} radius="full">
            <Button>
              <BiLike size={20} /> 0
            </Button> 
            <Divider orientation="vertical" />
            <Button isIconOnly>
              <BiDislike size={20} />
            </Button> 
            </ButtonGroup>
            </Tooltip>
            </Flex>
            <Share />
          <Button variant="light" className={`${hover} p-0`}>
            <Eye /> 3
          </Button> 
        </Flex>
    </AnimatedHeading>
    )
}
export default LikeShare;