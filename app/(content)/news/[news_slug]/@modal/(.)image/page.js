import ModalBackDrop from "@/component/modal-backdrop";
// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const InterceptedImagePage = async ({ params }) => {
  const newsItemSlug = params.news_slug;
  // const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
