import React from "react";
import Link from "next/link";

// CSS

import newsContainerStyles from "../styles/components/NewsContainer.module.css";

// Icons

import { ArrowRight } from "react-feather";

const NewsContainer = ({ ...props }) => {
  return (
    <>
      {props.newsData.data.map((data, index) => {
        return (
          <div
            className={newsContainerStyles.news_container_main}
            style={{
              width: `calc(100% / ${props.shownNews})`,
              margin: `${
                index === 0
                  ? "10px 10px 10px 0px"
                  : index + 1 === props.shownNews
                  ? `10px 0px 10px 10px`
                  : 10
              }`,
            }}
            key={data.announcementcode}
          >
            <h1 className={newsContainerStyles.news_no}>
              {data.announcementcode}
            </h1>
            <h1 className={newsContainerStyles.news_title}>
              {data.title.length > 80
                ? `${data.title.substring(0, 80)}...`
                : data.title}
            </h1>
            <div className={newsContainerStyles.news_content}>
              {`${data.description.substring(0, 200)}...`}
            </div>
            <div className='btn_go_to_news'>
              <Link href={`/news/${data.announcementcode}`}>
                <a>
                  <ArrowRight />
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsContainer;
