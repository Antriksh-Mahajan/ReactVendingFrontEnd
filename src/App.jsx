import { React, useEffect, useState } from "react";
import FrontMain from "./Components/FrontMain";
import axios from "axios";
import VideoURLPage from "./Components/VideoURLPage";
import MiddlePartOfMain from "./Components/MiddlePartOfMain";
import Navbar from "./Components/Navbar";
import VideoImg from "./Components/VideoImg";

import Footer from "./Components/Footer";
import FinancialAdvisor from "./Components/FinancialAdvisor";
import AskedQuestions from "./Components/AskedQuestions";
import EndHomePage from "./Components/EndHomePage";
import ReadMore from "./Components/ReadMore";
import ContactUs from "./Components/ContactUs";
import LatestPostBLog from "./Components/LatestPostBLog";
import { Helmet } from "react-helmet";
import SliderWithTextCorrectCss from "./Components/SliderWithTextCorrectCss";

export default function App() {
  const [Pagedata, setPageData] = useState([]);
  const [Postdata, setPostData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jobadvisor.darpanchandigarh.in/wp-json/wp/v2/vendingdata"
        );

        setPageData(response.data);
      } catch (error) {
        console.error("Error fetching Page data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jobadvisor.darpanchandigarh.in/wp-json/wp/v2/posts?per_page=5&_embed"
        );

        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching Post data:", error);
      }
    }
    fetchData();
  }, []);

  <ReadMore data={Pagedata} />;
  return (
    <div>
      <Helmet>
        <title>Front Main</title>
        <meta name="App.js" content="All files middlewear to website" />
      </Helmet>

      <Navbar />
      {/* <MaterialTailwind /> */}

      <FrontMain data={Pagedata} />

      {/* <VideoURLPage data={data} /> */}
      <MiddlePartOfMain data={Pagedata} />
      <VideoImg data={Pagedata} />
      <LatestPostBLog />
      <FinancialAdvisor data={Pagedata} />
      <SliderWithTextCorrectCss Postdata={Postdata} />
      <AskedQuestions data={Pagedata} />
      {/* <EndHomePage data={data} /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
}
