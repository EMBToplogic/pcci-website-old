import React from "react";
import Link from "next/link";

// Components

import Header from "../Header";
import Buttons from "../Buttons";
import NewsContainer from "../NewsContainer";

// CSS

import newsStyles from "../../styles/components/home/News.module.css";

const News = ({ news }) => {
  return (
    <div
      className={newsStyles.news_main}
      style={{
        height: "100%",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Header
        title={"News"}
        customButton={
          <Buttons
            text={
              <Link href='news'>
                <a>View All Articles</a>
              </Link>
            }
            type='primary'
          />
        }
      />
      <div className={newsStyles.news_inner}>
        <NewsContainer shownNews={3} newsData={news} />
      </div>
    </div>
  );
};

export default News;
