import Appbar from "./common/Appbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Appbar />
        <div className="relative overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
