import React from "react";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className=" bg-[#0D1116] overflow-x-hidden ">
      <HomeContents />
      <Footer />
    </div>
  );
}

export default Home;

function BigTitle(props) {
  return <p className=" font-bold text-[50px] ">{props.title}</p>;
}

function HomeContents() {
  return (
    <section className=" w-[80vw] h-[60vh] mx-[auto] mt-10 mb-[200px] ">
      <BigTitle title="Popular titles" />
    </section>
  );
}
