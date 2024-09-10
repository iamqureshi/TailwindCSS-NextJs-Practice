import Appbar from "./common/Appbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* this could be done by pr */}
      <body>
        {/* extra line */}
        <Appbar />
        <div className="relative overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
