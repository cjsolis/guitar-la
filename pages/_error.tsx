import type { NextPage } from "next";
import Layout from "@components/layout/layout";
import Link from "next/link";
import NotFoundError from "components/not-found/not-found";

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Not Found">
      <NotFoundError />
    </Layout>
  );
};

export default NotFoundPage;
