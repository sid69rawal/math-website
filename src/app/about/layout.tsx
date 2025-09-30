import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Level Up Math Academy | Expert Math Tutors Mississauga",
  description: "Meet our expert math tutors in Mississauga. 20+ years experience, personalized teaching approach, Grades 3-12. Learn about our mission and teaching philosophy.",
  keywords: "about Level Up Math Academy, math tutors Mississauga, expert math teachers, math tutoring experience, personalized math instruction",
  openGraph: {
    title: "About Level Up Math Academy | Expert Math Tutors",
    description: "Meet our expert math tutors with 20+ years experience. Personalized teaching approach for Grades 3-12.",
    type: "website",
    url: "https://levelupmathacademy.ca/about",
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
