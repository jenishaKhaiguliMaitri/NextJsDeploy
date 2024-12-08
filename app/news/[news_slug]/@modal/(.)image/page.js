import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.news_slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
