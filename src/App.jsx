import { React, useEffect, useState } from "react";
import FrontMain from "./Components/FrontMain";
import axios from "axios";
import VideoURLPage from "./Components/VideoURLPage";
import MiddlePartOfMain from "./Components/MiddlePartOfMain";
import Navbar from "./Components/Navbar";
import MainProductCarousel from "./Components/MainProductCarousel";
// import MainProductCarousel from "./Components/MainProductCarousel";
import VideoImg from "./Components/VideoImg";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jobadvisor.darpanchandigarh.in/wp-json/wp/v2/vendingdata"
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <FrontMain data={data} />
      <VideoURLPage data={data} />
      <MiddlePartOfMain data={data} />
      {/* <MainProductCarousel /> */}
      <VideoImg data={data} />
      <Blog data={data} />
      <Footer />
    </div>
  );
}
