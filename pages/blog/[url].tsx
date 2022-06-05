import Layout from "@components/layout/layout";
import { GET_BLOGS, GET_BLOGS_BY_URL } from "@utils/constants";
import { formatDate, getApiUrl } from "@utils/helper";
import { BlogEntryType } from "@utils/types";
import Image from "next/image";
import { InferGetServerSidePropsType, NextPage } from "next/types";
import styles from "@styles/blog-entry.module.css";

const BlogPage: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ blogEntry }) => {
  const { id, title, content, image, published_at } = blogEntry;

  return (
    <Layout title={`Blog - ${title}`}>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.entry}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`Entry image ${id}`}
          />
          <div className={styles.content}>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = getApiUrl(GET_BLOGS);
  const response = await fetch(url);
  const blogEntries: BlogEntryType[] = await response.json();
  const paths = blogEntries.map((blogEntry) => ({
    params: { url: blogEntry.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }: any) {
  const fullUrl = getApiUrl(GET_BLOGS_BY_URL(url));
  const response = await fetch(fullUrl);
  const blogEntry: BlogEntryType[] = await response.json();

  return {
    props: {
      blogEntry: blogEntry[0],
    },
  };
}

export default BlogPage;
