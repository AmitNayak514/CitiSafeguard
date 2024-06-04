import prismadb from "@/lib/prismadb";

const HistoryPage = async () => {
  const report = await prismadb.report.findMany({});
  return <div></div>;
};

export default HistoryPage;
