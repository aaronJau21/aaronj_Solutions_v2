import { Navbar } from "@/components/layouts/Navbar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}