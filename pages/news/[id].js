import { API_ROUTE } from "../../config";
import React from "react";

const NewsDetails = ({ newsDetails }) => {
  console.log(newsDetails);
  return <div>Details Page</div>;
};

const getStaticPaths = async () => {
  const res = await fetch(`${API_ROUTE}/announcements`);
  const data = await res.json();

  const paths = data.map((news) => {
    return {
      params: { id: news.announcementcode.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default NewsDetails;
