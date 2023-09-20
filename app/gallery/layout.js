import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

export const metadata = {
  title: "Artists",
  description: "Artists of Black Flag Tattoo Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <Contact />
    </html>
  );
}
