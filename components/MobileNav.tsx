import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav 
              containerStyles='flex flex-col gap-y-6 '
              linkStyles='text-2xl' underlineStyles={undefined} />
          </div>
          <Socials 
            containerStyles='flex items-center gap-x-4'
            iconsStyles='text-3xl'
            />
        </div>
      </SheetContent>
    </Sheet>
  )
}