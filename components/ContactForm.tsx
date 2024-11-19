'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {User, MailIcon, ArrowRightIcon, MessageSquare} from "lucide-react"

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-y-4">
      {/* user name */}
      <div className="relative flex items-center ">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6 " size={20} />
      </div>
      {/* user email */}
      <div className="relative flex items-center ">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6 " size={20} />
      </div>
      {/* text area */}
      <div className="relative flex items-center ">
        <Textarea placeholder="Type your message here..." />
        <MessageSquare className="absolute top-4 right-6 " size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Message Me
        <ArrowRightIcon size={20}/>
      </Button>
    </form>
  )
}
