import { CourseType } from "@utils/types";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles/course.module.css";

export interface ICourseProps {
  course: CourseType;
}

const Course: FC<ICourseProps> = ({ course }) => {
  const { title, content, image } = course;

  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
          <Link href="#">
            <a>Go to course</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image.url});
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </section>
  );
};

export default Course;
