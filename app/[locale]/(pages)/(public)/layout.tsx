import Footer from "@/components/footer/Footer";
import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";


function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <div className="content overflow-x-hidden px-0 bg-white min-h-fit ">
        <PublicNavbar />
        <div className="">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicPageLayout;
