import "/css/style.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Social Dance TV",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:bg-slate-200 box-border">
        <Header />
        {children}
      </body>
    </html>
  );
}
