import React, { useState } from "react";

// CSS

import newsContainerStyles from "../styles/components/NewsContainer.module.css";

// Icons

import { ArrowRight } from "react-feather";

import sampleData from "../sampleData.json";

const NewsContainer = ({ ...props }) => {
  return (
    <>
      {sampleData.map((data, index) => {
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
            key={data.newsno}
          >
            <h1 className={newsContainerStyles.news_no}>{data.newsno}</h1>
            <h1 className={newsContainerStyles.news_title}>
              {data.title.length > 80
                ? `${data.title.substring(0, 80)}...`
                : data.title}
            </h1>
            <div className={newsContainerStyles.news_content}>
              {`${data.description.substring(0, 200)}...`}
            </div>
            <div className='btn_go_to_news'>
              <ArrowRight />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsContainer;
