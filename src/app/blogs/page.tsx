"use client"
import { Pagination } from "@nextui-org/react"
import { Flex, Grid } from "@radix-ui/themes"
import AnimatedDiv from "®/components/FramerMotion/AnimatedDiv"
import AnimatedVariant from "®/components/FramerMotion/AnimatedVariant"
import BlogCard from "®/components/blog/card"
import { FadeContainer, fromLeftVariant, fromTopVariant } from "®/lib/FramerMotionVariants"

const Demo = [
    {
        title: "Demo 1",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://www.minterapp.com/wp-content/uploads/2022/11/image4-1280x640.png",
    },
    {
        title: "Demo 2",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://www.foundingminds.com/wp-content/uploads/2023/12/hands-multitasking-with-laptop-notebook-1280x640.jpg",
    },
    {
        title: "Demo 3",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://www.boat-lifestyle.com/cdn/shop/articles/WhatsApp_Image_2020-10-29_at_6.20.30_PM.jpg",
    },
    {
        title: "Demo 4",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://www.gizchina.com/wp-content/uploads/images/2020/02/Xiaomi-redmi-note-6-pro-test-xiaotech-1280x640-1.jpg",
    },
    {
        title: "Demo 5",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://worldpodcasts.com/wp-content/uploads/2023/04/Redmi-Note-12-series-1280x640.jpg",
    },
    {
        title: "Demo 6",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://worldpodcasts.com/wp-content/uploads/2019/03/mtp-101-pic-1280x640.jpg",
    },
    {
        title: "Demo 7",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://cdn.editorji.com/yOLfUIKJQe.jpg",
    },
    {
        title: "Demo 8",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://cdn.editorji.com/kDdiF2jbJ7.jpg",
    },
    {
        title: "Demo 9",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://worldpodcasts.com/wp-content/uploads/2020/09/galaxyzfold2_mysticbronze-1280x640.jpg",
    },
    {
        title: "Demo 10",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://worldpodcasts.com/wp-content/uploads/2022/02/PXL_20220216_230801515-1280x640.jpg",
    },
    {
        title: "Demo 11",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://worldpodcasts.com/wp-content/uploads/2020/09/27_galaxys20fe_cloud_lavender_handson-1280x640.jpg",
    },
    {
        title: "Demo 12",
        description: `First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.`,
        img: "https://cdn.editorji.com/zzPy827dWP.jpg",
    },
]

export default function Blog() {
  return (
    <Grid gap="5">
    <AnimatedDiv variants={FadeContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Demo.map((card, index) => (
        <AnimatedVariant key={index} variants={fromLeftVariant} mobileVariants={fromTopVariant}>
            <BlogCard title={card.title} description={card.description} img={card.img}  />
        </AnimatedVariant>
        ))}
     </AnimatedDiv>
     <Flex justify="center">
     <Pagination
      total={5}
      classNames={{
        base: "",
        wrapper: "rounded-full border border-border p-2",
        item: "text-sm bg-transparent rounded-full p-0",
        cursor:
          "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white rounded-full p-0 font-bold",
      }}
      />
      </Flex>
    </Grid>
  )
}
