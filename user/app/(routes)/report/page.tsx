import Heading from "@/components/Heading";
import LawSection from "@/components/LawSection";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const ReportPage: React.FC = () => {
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
