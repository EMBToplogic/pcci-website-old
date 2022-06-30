import { API_ROUTE } from "../../config";
import React from "react";
import Image from "next/image";

// Components

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import NewsGridContainer from "../../components/NewsGridContainer";
import BackButton from "../../components/BackButton";

// CSS

import newsPageStyles from "../../styles/news/NewsPage.module.css";

const NewsPage = ({ news }) => {
  return (
    <>
      <BackButton />
      <Navbar />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header
            title={
              <Image
                src='/../public/images/the_voice.png'
                objectFit='contain'
                width='400'
                height='101'
              />
            }
            style={{
              fontSize: "2em",
            }}
            customButton={
              "The Official Newsletter of The Philippine Chamber of Commerce and Industry"
            }
          />
          <div className={newsPageStyles.news_page_container}>
            {news.data.map((news, index) => {
              return (
                <NewsGridContainer news={news} key={news.announcementcode} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${API_ROUTE}/announcements`);
  const news = await res.json();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news },
  };
};

export default NewsPage;
