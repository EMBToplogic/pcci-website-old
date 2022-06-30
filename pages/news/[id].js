import { API_ROUTE } from "../../config";
import React from "react";
import dayjs from "dayjs";

// Components

import Navbar from "../../components/Navbar";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";

// CSS

import newsPageStyles from "../../styles/news/NewsPage.module.css";

const NewsDetails = ({ news }) => {
  return (
    <>
      <BackButton />
      <Navbar />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header
            title={news[0].title}
            style={{ fontSize: "2em" }}
            customButton={dayjs(news[0].announcementdate).format(
              "MMM DD, YYYY"
            )}
          />
          <div className={newsPageStyles.news_details_container}>
            {news[0].description}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${API_ROUTE}/announcements`);
  const data = await res.json();

  const paths = data.data.map((news) => {
    return {
      params: { id: news.announcementcode.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${API_ROUTE}/announcements`);
  const data = await res.json();

  const filteredData = data.data.filter((filteredNews) => {
    if (filteredNews.announcementcode.toString() === id) {
      return filteredNews;
    }
  });

  return {
    props: { news: filteredData },
  };
};

export default NewsDetails;
