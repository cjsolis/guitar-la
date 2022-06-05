import type { InferGetServerSidePropsType, NextPage } from "next";
import Layout from "@components/layout/layout";
import GuitarList from "components/shop/guitar-list/guitar-list";
import { getApiUrl } from "@utils/helper";
import {
  GET_BLOGS_WITH_LIMIT,
  GET_COURSES,
  GET_GUITARS,
} from "@utils/constants";
import Course from "components/course/course";
import BlogList from "components/blog/blog-list";

const HomePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ guitars, course, blogEntries }) => {
  return (
    <Layout title="Home" guitar={guitars[3]}>
      <main className="container">
        <h1 className="heading">Our Collection</h1>
        <GuitarList guitars={guitars} />
      </main>
      <Course course={course} />
      <section>
        <BlogList blogEntries={blogEntries} />
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const urlGuitars = getApiUrl(GET_GUITARS);
  const urlCourses = getApiUrl(GET_COURSES);
  const urlBlogs = getApiUrl(GET_BLOGS_WITH_LIMIT(3));

  const [responseGuitars, responseCourses, responseBlogEntries] =
    await Promise.all([fetch(urlGuitars), fetch(urlCourses), fetch(urlBlogs)]);

  const [guitars, course, blogEntries] = await Promise.all([
    responseGuitars.json(),
    responseCourses.json(),
    responseBlogEntries.json(),
  ]);

  return {
    props: {
      guitars,
      course,
      blogEntries,
    },
  };
}

export default HomePage;
