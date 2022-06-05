import { formatDate } from "@utils/helper";
import { BlogEntryType } from "@utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "@styles/blog-entry.module.css";

export interface BlogEntryProps {
  blogEntry: BlogEntryType;
}

const BlogEntry: FC<BlogEntryProps> = ({ blogEntry }) => {
  const { id, title, summary, image, published_at, url } = blogEntry;

  return (
    <article>
      <Image
        priority={true}
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`blog image ${id}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>Read entry</a>
        </Link>
      </div>
    </article>
  );
};

export default BlogEntry;
