import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
