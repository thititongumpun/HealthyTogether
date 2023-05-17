import { Inter } from "next/font/google";


export const metadata = {
  title: "Register",
  description: "Register Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
