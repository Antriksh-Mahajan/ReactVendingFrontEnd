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
import FinancialAdvisor from "./Components/FinancialAdvisor";
import AskedQuestions from "./Components/AskedQuestions";
import EndHomePage from "./Components/EndHomePage";
import ReadMore from "./Components/ReadMore";
import SliderWithText from "./SliderWithText";
import PostAPI from "./Components/PostAPI";
import ContactUs from "./Components/ContactUs";

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

  <ReadMore data={data} />;
  return (
    <div>
      {/* <PostAPI /> */}
      <Navbar />
      <FrontMain data={data} />
      {/* <VideoURLPage data={data} /> */}
      <MiddlePartOfMain data={data} />
      <MainProductCarousel />
      <VideoImg data={data} />
      <Blog data={data} />
      <FinancialAdvisor data={data} />
      <SliderWithText data={data} />

      <AskedQuestions data={data} />
      <EndHomePage data={data} />
      <ContactUs />
      <Footer />
    </div>
  );
}
