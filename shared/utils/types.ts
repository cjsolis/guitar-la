export type ImageType = {
  url: string;
};

export type BlogEntryType = {
  content: string;
  id: string;
  image: ImageType;
  summary: string;
  title: string;
  published_at: string;
  url: string;
};

export type GuitarType = {
  description: string;
  id: string;
  image: ImageType;
  price: number;
  name: string;
  published_at: string;
  url: string;
};

export type CourseType = {
  title: string;
  content: string;
  image: ImageType;
};
