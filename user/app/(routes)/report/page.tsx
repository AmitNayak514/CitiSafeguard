import Heading from "@/components/Heading";
import LawSection from "@/components/LawSection";
import Container from "@/components/ui/container";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export const revalidate = 0;

const ReportPage: React.FC = () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  return (
    <>
      <div>
        <Heading
          title="Report a Violation"
          description="See a traffic violation? Help us make the roads safer by reporting it here. Your report can make a difference!"
        />
        <Container>
          <LawSection />
        </Container>
      </div>
    </>
  );
};

export default ReportPage;
