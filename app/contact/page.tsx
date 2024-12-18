import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

//components
import ContactForm from "@/components/ContactForm";
const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary font-semibold text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              I am a passionate Frontend Web Developer with 1 year of experience 
              & gaining expertise in building responsive and dynamic websites.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark
          bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-19 mb-12 xl:mb-24 text-base xl:text-lg">

            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={22} className="text-primary" />
              <div>Haider_asghar78963@hotmail.com</div>
            </div>
            
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={22} className="text-primary" />
              <div>Karachi, Pakistan.</div>
            </div>
            
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={22} className="text-primary" />
              <div>+92 322 2011500</div>
            </div>
          </div>
          <ContactForm  />
        </div>
      </div>
    </section>
  );
};

export default Contact;
