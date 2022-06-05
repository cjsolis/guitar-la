import Link from "next/link";
import React from "react";
import styles from './styles/not-found.module.css'

const NotFoundError = () => {
  return (
    <div className={styles.not_found}>
      <h1 className="">404</h1>
      <h2>Page not found</h2>
      <Link href="/">Go home</Link>
    </div>
  );
};

export default NotFoundError;
