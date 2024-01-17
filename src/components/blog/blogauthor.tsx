"use client"
import { Button, Tooltip } from "@nextui-org/react"
import { Avatar, Flex, Grid } from "@radix-ui/themes"
import { siteConfig } from "®/config/site"

type BlogAuthor = {
    toc?: any;
};

const BlogAuthor: React.FC<BlogAuthor> = ({ toc }) => {
  return (
        <Flex className="justify-between sticky top-0 z-50 bg-background py-1">
            <Flex align="center" gap="1">
                <Avatar src={siteConfig.logo} alt="User profile picture" fallback={""} />
                <Grid>
                    <h1 className="text-xl font-bold">Rock Star</h1>
                    <h1 className="text-xs tracking-wider text-muted-foreground">22 Jan 2024</h1>
                </Grid>
            </Flex>
            <Flex gap="2" align="center">
                <Tooltip content="Table of Content">{toc}</Tooltip>
                <Tooltip content="Follow"><Button radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">Follow</Button></Tooltip>
            </Flex>
        </Flex>
  )
}

export default BlogAuthor