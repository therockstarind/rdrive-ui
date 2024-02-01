'use client'
import { Card, Image } from '@nextui-org/react'
import { siteConfig } from '®/config/site'

const ImageCard = () => {
  return (
    <Card
      className="FolderCard dark:data-[hover=true]:bg-default/40"
      shadow="none"
      isHoverable
      isPressable
    >
      <div className="flex h-40 items-center justify-center">
        <Image
          src={
            'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666344481.20013313.png' ||
            siteConfig.fallback
          }
          alt="Xiaomi-12-Pro-(Dimensity-Edition)"
          className="mx-auto my-10 h-48 w-48 object-contain object-center"
          isBlurred
        />
      </div>
    </Card>
  )
}
export default ImageCard
