import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

export const metadata = {
  title: "Artists",
  description: "Artists of Black Flag Tattoo Studio",
};

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Contact />
    </section>
  );
}
