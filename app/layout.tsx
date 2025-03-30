import "../styles/globals.css";

export const metadata = {
  title: "NVY",
  description: "Digital Marketing Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
