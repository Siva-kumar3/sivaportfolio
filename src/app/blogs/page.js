import BlogsMain from "@/components/layout/main/BlogsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Blog - Siva - Personal Portfolio React  NextJs Template",
  description: "Blog - Siva - Personal Portfolio React  NextJs Template",
};

export default function Blogs() {
  return (
    <PageWrapper isInnerPage={true}>
      <BlogsMain />
    </PageWrapper>
  );
}
