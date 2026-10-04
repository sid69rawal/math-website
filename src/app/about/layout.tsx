import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Level Up Math Academy | Expert Math Tutors Mississauga",
  description: "Meet our expert math tutors in Mississauga. 20+ years experience, personalized teaching approach, Grades 3-12. Learn about our mission and teaching philosophy.",
  keywords: "about Level Up Math Academy, math tutor Mississauga, math tutors Mississauga, expert math tutor, expert math teachers, math tutoring experience, personalized math instruction, Jyoti Agarwal math tutor, Kunal Agarwal math tutor",
  openGraph: {
    title: "About Level Up Math Academy | Expert Math Tutors",
    description: "Meet our expert math tutors with 20+ years experience. Personalized teaching approach for Grades 3-12.",
    type: "website",
    url: "https://levelupmathacademy.ca/about",
    images: [
      {
        url: "https://levelupmathacademy.ca/hero_img.png",
        width: 800,
        height: 600,
        alt: "About Level Up Math Academy",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Level Up Math Academy | Expert Math Tutors",
    description: "Meet our expert math tutors with 20+ years experience. Personalized teaching approach for Grades 3-12.",
    images: ["https://levelupmathacademy.ca/hero_img.png"],
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

