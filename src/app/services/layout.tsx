import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Tutoring Services Mississauga | Advanced Functions & Calculus Vectors | Grades 3-12",
  description: "Comprehensive math tutoring services in Mississauga for Grades 3-12. Expert math tutoring including Advanced Functions and Calculus and Vectors. Elementary, middle school & high school programs. In-person & online options available.",
  keywords: "math tutor Mississauga, math tutoring services Mississauga, math tutoring, math tutor services, Advanced Functions tutoring, Calculus and Vectors tutoring, grade 3-12 math programs, elementary math tutoring, high school math help, math tutoring Ontario, online math tutoring Canada, best math tutor Mississauga",
  openGraph: {
    title: "Math Tutoring Services Mississauga | Level Up Math Academy",
    description: "Comprehensive math tutoring services for Grades 3-12 in Mississauga. Expert tutors, small groups, proven results.",
    type: "website",
    url: "https://levelupmathacademy.ca/services",
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
