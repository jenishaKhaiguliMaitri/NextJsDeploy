import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = ({ params }) => {
  const newsSlug = params.news_slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className={"news-article"}>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetails;
