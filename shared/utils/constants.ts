// API endpoints
export const GET_BLOGS = "/blogs";
export const GET_GUITARS = "/guitars";
export const GET_COURSES = "/courses";
export const GET_BLOGS_WITH_LIMIT = (limit: number) => `/blogs?_limit=${limit}`;
export const GET_BLOGS_BY_URL = (url: string): string => `/blogs?url=${url}`;
export const GET_GUITARS_BY_URL = (url: string): string => `/guitars?url=${url}`;

// Base URLs
export const BASE_API_URL = process.env.API_URL || "http://localhost:1337";
