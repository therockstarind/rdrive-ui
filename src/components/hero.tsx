'use client'
import { Image, Input } from '@nextui-org/react'
import { GoSearch } from 'react-icons/go'
import { MdOutlineKeyboardVoice } from 'react-icons/md'
import { Flex, Grid, Text } from '®/rdrive/ui'

const Hero = () => {
  return (
    <main className="mx-auto my-20 flex w-full max-w-3xl flex-col gap-4">
      <Input
        type="search"
        placeholder="Search the rdrive"
        radius="full"
        size="sm"
        startContent={<GoSearch size={24} />}
        endContent={<MdOutlineKeyboardVoice size={24} />}
      />
      {/* this will be most search & recent searches here. */}
      <Grid gap="gap-8" className="grid-cols-4 sm:grid-cols-8">
        <App
          name="Telegram"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a4ad768d20f0e787d31ddca68fa7d703_low_res_Telegram.png"
        />
        <App
          name="Window 11"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b897cb95c17c66b561f3f1054dc648fa_low_res_Windows_11_Parallels.png"
        />
        <App
          name="PhotoShop"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7558bf5a80efe2e7b3dd217376115e5c_O1kbfhj02a.png"
        />
        <App
          name="Android Studio"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/785cbaf333072fa10c62e276c49b254e_dF0olj4AQ0.png"
        />
        <App
          name="Redmi K20"
          icon="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1563365982.72134410!400x400!85.png"
        />
        <App
          name="FRP"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d1505a5ff95ae87f319e3384e784edf1_low_res_Google_Mail.png"
        />
        <App
          name="Apple 11"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7dfc9688b0ab9303f8ebfa47939c5edf_fvfDRfaP5X.png"
        />
        <App
          name="Blog Post"
          icon="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/98469c05addb8e656b03be8ad7e699de_low_res_Pencil_2D.png"
        />
      </Grid>
    </main>
  )
}

export default Hero

type AppProps = {
  name: string
  icon: string
}

const App = ({ name, icon }: AppProps) => (
  <Flex display="flex-col" align="items-center" gap="gap-1">
    <Image src={icon} alt={name} width={40} height={40} />
    <Text size="line-clamp-1 text-xs">{name}</Text>
  </Flex>
)
