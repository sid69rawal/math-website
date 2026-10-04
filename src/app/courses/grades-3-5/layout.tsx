import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elementary Math Tutoring Grades 3-5 | Mississauga Math Academy",
  description: "Elementary math tutoring for Grades 3-5 in Mississauga. Build strong foundations in addition, multiplication, fractions & geometry. Small groups, expert tutors.",
  keywords: "math tutor Mississauga grades 3-5, math tutoring, elementary math tutoring Mississauga, math tutor for grade 3, grade 3 math help, grade 4 math tutoring, grade 5 math programs, primary math tutoring Ontario, EQAO math prep, mental math Mississauga",
  openGraph: {
    title: "Elementary Math Tutoring Grades 3-5 | Mississauga",
    description: "Elementary math tutoring for Grades 3-5 in Mississauga. Build strong foundations with expert tutors.",
    type: "website",
    url: "https://levelupmathacademy.ca/courses/grades-3-5",
    images: [
      {
        url: "https://levelupmathacademy.ca/hero_img.png",
        width: 800,
        height: 600,
        alt: "Elementary Math Tutoring Grades 3-5",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elementary Math Tutoring Grades 3-5 | Mississauga",
    description: "Elementary math tutoring for Grades 3-5 in Mississauga.",
    images: ["https://levelupmathacademy.ca/hero_img.png"],
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

