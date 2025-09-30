import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elementary Math Tutoring Grades 3-5 | Mississauga Math Academy",
  description: "Elementary math tutoring for Grades 3-5 in Mississauga. Build strong foundations in addition, multiplication, fractions & geometry. Small groups, expert tutors.",
  keywords: "elementary math tutoring Mississauga, grade 3 math help, grade 4 math tutoring, grade 5 math programs, primary math tutoring Ontario, EQAO math prep",
  openGraph: {
    title: "Elementary Math Tutoring Grades 3-5 | Mississauga",
    description: "Elementary math tutoring for Grades 3-5 in Mississauga. Build strong foundations with expert tutors.",
    type: "website",
    url: "https://levelupmathacademy.ca/courses/grades-3-5",
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/courses/grades-3-5",
  },
};

export default function Grades35Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
