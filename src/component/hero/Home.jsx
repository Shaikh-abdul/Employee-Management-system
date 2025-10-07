

import ShowEmp from "../showEmp/ShowEmp";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Home() {
  return (
    <div>
    <Navbar/>
      <ShowEmp />
      <Footer />
    </div>
  );
}
