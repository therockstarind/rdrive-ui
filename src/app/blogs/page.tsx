"use client"
import AnimatedDiv from "®/components/FramerMotion/AnimatedDiv"
import AnimatedVariant from "®/components/FramerMotion/AnimatedVariant"
import FeedCard from "®/components/blog/feedcard"
import { FadeContainer, fromLeftVariant, fromTopVariant } from "®/lib/FramerMotionVariants"
import { Page } from "®rdrive/ui"

const Demo = [
    {
        title: "Step-by-Step Guide to Settings - Demo 1",
        img: "https://www.minterapp.com/wp-content/uploads/2022/11/image4-1280x640.png",
        date: "1 day",
        time: "05:00",
        views: 1200,
        likes: 85,
        href: '/blogs/demo1',
        author: "/rockstar1",
    },
    {
        title: "Exploring Settings for Efficiency - Demo 2",
        img: "https://www.foundingminds.com/wp-content/uploads/2023/12/hands-multitasking-with-laptop-notebook-1280x640.jpg",
        date: "2 days",
        time: "03:00",
        views: 950,
        likes: 78,
            href: '/blogs/demo1',
    author: "/rockstar1",
    },
    {
        title: "Mastering Device Settings - Demo 3",
        img: "https://www.boat-lifestyle.com/cdn/shop/articles/WhatsApp_Image_2020-10-29_at_6.20.30_PM.jpg",
        date: "5 days",
        time: "04:00",
        views: 1800,
        likes: 120,
            href: '/blogs/demo1',
    author: "/rockstar1",
    },
    {
        title: "Optimizing Your Experience - Demo 4",
        img: "https://www.gizchina.com/wp-content/uploads/images/2020/02/Xiaomi-redmi-note-6-pro-test-xiaotech-1280x640-1.jpg",
        date: "1 day",
        time: "03:30",
        views: 1350,
        likes: 95,
            href: '/blogs/demo1',
    author: "/rockstar1",
    },
    {
        title: "Discovering Hidden Settings - Demo 5",
        img: "https://worldpodcasts.com/wp-content/uploads/2023/04/Redmi-Note-12-series-1280x640.jpg",
        date: "2 days",
        time: "06:00",
        views: 2000,
        likes: 150,
            href: '/blogs/demo1',
    author: "/rockstar1",
    },
    {
        title: "Advanced Settings Techniques - Demo 6",
        img: "https://worldpodcasts.com/wp-content/uploads/2019/03/mtp-101-pic-1280x640.jpg",
        date: "3 days",
        time: "04:30",
        views: 1700,
        likes: 130,
            href: '/blogs/demo1',
    author: "/rockstar1",
    },
];

export default function Blog() {
  return (
    <Page>
    <AnimatedDiv variants={FadeContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Demo.map((feed) => (
        <AnimatedVariant variants={fromLeftVariant} mobileVariants={fromTopVariant} >
            <FeedCard card={feed}/>
        </AnimatedVariant>
        ))}
     </AnimatedDiv>
    </Page>
  )
}
