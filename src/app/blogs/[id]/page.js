import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";
const blogs = getBlogs();
export const metadata = {
  title: "Sitecore Developer | React & Next.js | XM Cloud Expert",
  description: "Portfolio of Siva, Sitecore XM Cloud developer using React and Next.js."
};

export default async function BlogDetails({ params }) {
  const { id } = await params;

  const isExistBlog = blogs?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistBlog) {
    notFound();
  }
  return (
    <PageWrapper isInnerPage={true}>
      <BlogDetailsMain />
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return blogs?.map(({ id }) => ({ id: id.toString() }));
}
