"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  // we can also refresh the message
  const router = useRouter();
  const newsItemSlug = params.news_slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
