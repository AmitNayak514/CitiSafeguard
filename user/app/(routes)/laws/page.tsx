import Heading from "@/components/Heading";
import LawSection from "@/components/LawSection";
import Container from "@/components/ui/container";

const LawsPage: React.FC = async () => {
  return (
    <div className="">
      <Heading
        title="Laws"
        description={
          "This page shows a list of traffic laws, fines, and other related information."
        }
      />
      <Container>
        <LawSection />
      </Container>
    </div>
  );
};

export default LawsPage;
