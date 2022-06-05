import type { InferGetServerSidePropsType } from "next";
import Layout from "@components/layout/layout";
import { BlogEntryType } from "@utils/types";
import { GET_BLOGS } from "@utils/constants";
import { getApiUrl } from "@utils/helper";
import BlogList from "components/blog/blog-list";

const BlogsPage = ({
  blogEntries,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Blog">
      <main className="contenedor">
        <BlogList blogEntries={blogEntries} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = getApiUrl(GET_BLOGS);
  const response = await fetch(url);
  const blogEntries: BlogEntryType[] = await response.json();

  return {
    props: {
      blogEntries,
    },
  };
}

export default BlogsPage;
