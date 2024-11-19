import { TrendingUp, Boxes, Webhook } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
 } from "@/components/ui/card";

 const servicesData = [
  {
    icon: <TrendingUp size={72} strokeWidth={0.8} />,
    title: 'Search Engine Optimization',
    description: 'I provide the solution to rank the websites and increase their visibility on search engine. '
  },
  {
    icon: <Boxes size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'I create Fast & Responsive websites using Modern day technologies.'
  },
  {
    icon: <Webhook size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description: 'I create websites that are functional, visually appealing, and easy to use for the intended audience.'
  },
 ]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto text-violet-800">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 ">
          {servicesData.map((item,index) => {
            return (
              <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center 
              relative border-violet-500" key={index}>
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                    </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      </section>
  )
}

export default Services;