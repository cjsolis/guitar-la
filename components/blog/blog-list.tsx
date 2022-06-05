import { BlogEntryType } from "@utils/types";
import React, { FC } from "react";
import BlogEntry from "./blog-entry";
import styles from "./styles/blog.module.css";

export interface IBlogListProps {
  blogEntries: BlogEntryType[]
}

const BlogList: FC<IBlogListProps> = ({ blogEntries }) => {
  return (
    <div className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {blogEntries.map((blogEntry) => (
          <BlogEntry key={blogEntry.url} blogEntry={blogEntry} />
        ))}{" "}
      </div>
    </div>
  );
};

export default BlogList;
