
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TbSeo } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Key } from "react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Haider Asghar",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 322 2011500",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Haider_asghar78963@hotmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "D.O.B 14 August,1993",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors In Commerce",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Karachi,Pakistan",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Karachi",
        qualification: "Bachelors in Commerce",
        years: "2013 - 2015",
      },
      {
        university: "Institute of Chartered Accountants of Pakistan",
        qualification: "Assessment of Fundamental Competencies",
        years: "2013 - 2014",
      },
      {
        university: "Govt. College of Commerce & Economics",
        qualification: "HSC",
        years: "2011 - 2013",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "MT Traders",
        role: "Administrator",
        years: "2017",
      },
      {
        company: "T.K Wear",
        role: "Sales Manager",
        years: "2018 - 2020",
      },
      {
        company: "T.K Wear",
        role: "Sales & Purchase Manager",
        years: "2020 - Present",
      },
    ],
  },
];

const skillData = [
      {
        icon: <TbSeo size={20} />,
        name: "Search Engine Optimization",
      },
      {
        icon: <ImHtmlFive size={20} />,
        name: "HTML",
      },
      {
        icon: <RiTailwindCssFill size={20} />,
        name: "Tailwind CSS",
      },
      {
        icon: <IoLogoJavascript size={20} />,
        name: "Javascript",
      },
      {
        icon: <SiTypescript size={18} />,
        name: "Typescript",
      },
      {
        icon: <RiNextjsFill size={20} />,
        name: "Next JS",
      },
      {
        icon: <TbBrandFramerMotion size={20} />,
        name: "Framer Motion",
      },
      {
        icon: <RiReactjsFill size={20} />,
        name: "React JS",
      },
      {
        icon: <FaWordpress size={20} />,
        name: "Wordpress",
      },
      
    ]

const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mx-auto w-1/3">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto text-violet-800">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center">
                    <h3 className="h3 mb-4"> Personal Information </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technologies, delivering dynamic & engaging
                      user experience. I'm here to bring your vision to life.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-5 mb-12 ml-1">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-3 mx-auto xl:mx-2"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="text-sm pr-10">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary text-3xl font-semibold text-violet-800">
                        Language Skills
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="text-lg">English, Urdu, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center">
                      My Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: { university: any; qualification: any; years: any; }, index: Key | null | undefined) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                        group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: { company: any; role: any; years: any; }, index: Key | null | undefined) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                        group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                    <div className="text-center xl:text-center">
                        <h3 className="h3 mb-8">That is what I use everyday</h3>
                        {/* skills */}
                        <div className="mb-16">
                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                            <div className="border-b border-border mb-4"></div>
                            {/* icons */}
                    <div className="grid xl:grid-cols-3 gap-5 mb-12 ml-1">
                      {skillData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-3 mx-auto xl:mx-2"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="text-sm pr-10">{item.name}</div>
                          </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* tools */}
                        <div>
                            {/* <h4 className="text-xl font-semibold mb-2 xl:text-center">Tools</h4>
                            <div className="border-b border-border mb-4"></div> */}
                            {/* tools list */}
                            {/* <div className="flex gap-x-8 justify-center xl:justify-start">
                                {getData(skillData, 'tools').data.map((item,index)=>{
                                    const {imgPath} = item;
                                    return (
                                        <div key={index}>
                                            <Image
                                            src={imgPath}
                                            width={48}
                                            height={48}
                                            alt=""
                                            priority />
                                        </div>
                                    )
                                })}
                            </div> */}
                        </div>
                    </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
