import PortfoliodetailsMain from "@/components/layout/main/PortfoliodetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getPortfolio from "@/libs/getPortfolio";
import { notFound } from "next/navigation";
const portfolio = getPortfolio();
export const metadata = {
  title: "Sitecore Developer | React & Next.js | XM Cloud Expert",
  description: "Portfolio of Siva, Sitecore XM Cloud developer using React and Next.js."
};

export default async function PortfolioDetails({ params }) {
  const { id } = await params;

  const isExistPortfolio = portfolio?.find(
    ({ id: id1 }) => id1 === parseInt(id)
  );
  if (!isExistPortfolio) {
    notFound();
  }
  return (
    <PageWrapper isInnerPage={true}>
      <PortfoliodetailsMain />
    </PageWrapper>
  );
}
export async function generateStaticParams() {
  return portfolio?.map(({ id }) => ({ id: id.toString() }));
}
