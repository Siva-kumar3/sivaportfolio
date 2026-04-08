import BlogsMain from "@/components/layout/main/BlogsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Sitecore Developer | React & Next.js | XM Cloud Expert",
  description: "Portfolio of Siva, Sitecore XM Cloud developer using React and Next.js."
};
export default function Blogs() {
  return (
    <PageWrapper isInnerPage={true}>
      <BlogsMain />
    </PageWrapper>
  );
}
