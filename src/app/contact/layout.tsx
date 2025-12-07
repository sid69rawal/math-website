import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Level Up Math Academy | Book Free Assessment Mississauga",
  description: "Contact Level Up Math Academy for math tutoring in Mississauga. Book your free assessment today. Phone, email, and location information. Expert math tutors for Grades 3-12.",
  keywords: "contact Level Up Math Academy, math tutor Mississauga contact, math tutoring Mississauga contact, book free assessment, math tutor phone number, math tutoring location",
  openGraph: {
    title: "Contact Level Up Math Academy | Book Free Assessment",
    description: "Contact us for math tutoring in Mississauga. Book your free assessment today.",
    type: "website",
    url: "https://levelupmathacademy.ca/contact",
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
