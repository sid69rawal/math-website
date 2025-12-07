import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Middle School Math Tutoring Grades 6-8 | Mississauga Math Academy",
  description: "Middle school math tutoring for Grades 6-8 in Mississauga. Algebra, geometry, fractions & EQAO prep. Expert tutors, small groups, proven results.",
  keywords: "math tutor Mississauga grades 6-8, middle school math tutoring Mississauga, math tutor for grade 6, grade 6 math help, grade 7 math tutoring, grade 8 math programs, EQAO math prep Ontario, algebra tutoring",
  openGraph: {
    title: "Middle School Math Tutoring Grades 6-8 | Mississauga",
    description: "Middle school math tutoring for Grades 6-8 in Mississauga. Algebra, geometry & EQAO prep.",
    type: "website",
    url: "https://levelupmathacademy.ca/courses/grades-6-8",
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/courses/grades-6-8",
  },
};

export default function Grades68Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
