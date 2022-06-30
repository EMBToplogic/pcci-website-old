import React from "react";
import Link from "next/link";

// CSS

import newsGridStyles from "../styles/components/NewsGridContainer.module.css";

// Icons

import { ArrowRight } from "react-feather";

const NewsGridContainer = ({ news }) => {
  return (
    <div className={newsGridStyles.news_grid_main}>
      <h1 className={newsGridStyles.news_no}>{news.announcementcode}</h1>
      <h1 className={newsGridStyles.news_title}>{news.title}</h1>
      <div
        className={newsGridStyles.news_content}
      >{`${news.description.substring(0, 200)}...`}</div>
      <div className='btn_go_to_news'>
        <Link href={`/news/${news.announcementcode}`}>
          <a>
            <ArrowRight />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsGridContainer;
