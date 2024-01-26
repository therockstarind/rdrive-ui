"use client"

import { Button, Image, Input } from "@nextui-org/react"
import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import { useMediaQuery } from "®/hooks/use-media-query"
import { cn } from "®/lib/utils"
import { Dialog, DialogContent } from "®ui/dialog"
import { Drawer, DrawerContent } from "®ui/drawer"


export default function Login({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [showOtpForm, setShowOtpForm] = React.useState(false);
  const handleSendOtp = () => {
    setShowOtpForm(true);
  };

  const content = showOtpForm ? (
    <OtpForm />
  ) : (
    <LoginForm onSendOtp={handleSendOtp} />
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
            {content}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="p-4">{content}</div>
      </DrawerContent>
    </Drawer>
  )
}
type LoginFormProps = {
    onSendOtp: () => void;
    className?: string;
  };
  const LoginForm: React.FC<LoginFormProps> = ({ onSendOtp, className }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSendOtp();
    };
  return (
    <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center mx-auto">
        <Image src="/user/login.png" alt="Login" width={150} height={150} isBlurred/>
      </div>
      <div className="grid gap-2">
        <Input
          type="number"
          radius="sm"
          label="Please enter your phone number"
          placeholder="10 Digits..."
          labelPlacement="outside"
        />
      </div>
      <Button radius="sm" type="submit" color="primary">Send OTP</Button>
    </form>
  )
}
function OtpForm({ className }: React.ComponentProps<"form">) {
    return (
      <form className={cn("grid items-start gap-4", className)}>
        <div className="flex flex-col justify-center mx-auto">
          <Image src="/user/otp.png" alt="OTP" width={150} height={150} isBlurred/>
        </div>
        <div className="grid gap-2">
          <Input
            type="number"
            radius="sm"
            label="We've sent an OTP on input phone"
            placeholder="Enter 4 digit OTP"
            labelPlacement="outside"
          />
        </div>
        <Button radius="sm" color="primary">Verify OTP</Button>
        <div className="flex flex-col justify-center items-center text-sm">
            <p className="LinkText">Resend OTP</p>
            <p className="LinkText" >Change phone number</p>
        </div>
      </form>
    )
  }