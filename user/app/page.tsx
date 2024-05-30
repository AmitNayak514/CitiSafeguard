import Navbar from "@/components/Navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { GridBackground } from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="bg-neutral-950 flex flex-col -mt-24 md:-mt-16 lg:-mt-20 xl:-mt-24">
        <ContainerScroll
          titleComponent={
            <div className="flex items-center flex-col">
              <Button
                size={"lg"}
                className="p-8 mb-8 md:mb-0 text-2xl text-white/60 w-fit  rounded-full bg-[#1F1F1F] hover:text-black/80 hover:bg-white transition flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-700"
              >
                <span className="md:text-center font-sans ">Get Started</span>
              </Button>
              <h1 className="text-7xl sm:text-8xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans font-bold">
                {"Don't"} Be a Red Light Runner
              </h1>
            </div>
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-neutral-950/90 dark:bg-neutral-950/90 py-24 ">
        <h1 className="text-8xl mb-10 text-white  font-semibold  ">Features</h1>
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 ">
          <CardContainer className="inter-var flex-1">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl h-96 dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] rounded-xl p-6 border">
              <div className="h-[16.5rem]">
                <CardItem
                  translateZ="50"
                  className="text-4xl font-bold text-neutral-600 dark:text-white "
                >
                  Report Traffic Violation
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Help improve road safety by reporting violations. Earn rewards
                  for contributing to a safer community.
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Easy reporting with photo/video evidence
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Verified reports earn rewards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Contribute to a safer driving environment
                    </li>
                  </ul>
                </CardItem>
              </div>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-white text-white dark:text-black text-xs font-bold"
                >
                  Report Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var flex-1">
            <CardBody className="bg-gray-50 h-96 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] rounded-xl p-6 border">
              <div className="h-[16.5rem]">
                <CardItem
                  translateZ="50"
                  className="text-4xl font-bold  text-neutral-600 dark:text-white "
                >
                  Community Engagement
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Connect with other users and report traffic concerns together.
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Discuss traffic issues and safety concerns
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Collaborate on reporting dangerous
                      situations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Build a stronger community for safer roads
                    </li>
                  </ul>
                </CardItem>
              </div>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-white text-white dark:text-black text-xs font-bold"
                >
                  Join Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var flex-1">
            <CardBody className="bg-gray-50 h-96 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] rounded-xl p-6 border">
              <div className="h-[16.5rem]">
                <CardItem
                  translateZ="50"
                  className="text-4xl font-bold text-neutral-600 dark:text-white "
                >
                  View Traffic Laws
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Stay informed about current traffic laws and regulations in
                  your area.
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Easy access to comprehensive traffic law
                      information
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Search by location for specific regulations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon /> Be a more informed and responsible driver
                    </li>
                  </ul>
                </CardItem>
              </div>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-white text-white dark:text-black text-xs font-bold"
                >
                  View Laws
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </main>
  );
}
