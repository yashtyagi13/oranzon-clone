import "../styles/globals.css";

export const metadata = {
  title: "Oranzon Clone",
  description: "A clone of the Oranzon website using Next.js with TypeScript",
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
