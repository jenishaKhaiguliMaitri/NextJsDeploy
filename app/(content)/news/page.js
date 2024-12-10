import NewsList from "@/component/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const News = async () => {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }
  const news = await response.json();
  return (
    <div>
      <h1>News</h1>
      <NewsList newsList={news} />
    </div>
  );
};

export default News;
