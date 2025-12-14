import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High School Math Tutoring Grades 9-12 | Advanced Functions & Calculus Vectors | Mississauga",
  description: "Expert math tutoring for Grades 9-12 in Mississauga. Advanced Functions, Calculus and Vectors tutoring. Functions, university prep. Expert tutors, small groups, proven results.",
  keywords: "math tutor Mississauga grades 9-12, Advanced Functions tutoring Mississauga, Calculus and Vectors tutoring, Advanced Functions, Calculus Vectors, grade 9 math help, grade 10 math tutoring, grade 11 Functions, grade 12 Advanced Functions, grade 12 Calculus Vectors, high school math tutoring Ontario, university math prep",
  openGraph: {
    title: "High School Math Tutoring Grades 9-12 | Advanced Functions & Calculus Vectors",
    description: "Expert math tutoring for Grades 9-12 in Mississauga. Advanced Functions and Calculus and Vectors tutoring with expert tutors.",
    type: "website",
    url: "https://levelupmathacademy.ca/courses/grades-9-12",
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/courses/grades-9-12",
  },
};

export default function Grades912Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

