import NewsList from "@/component/news-list";
import { getNewsForYear } from "@/lib/news";
import React from "react";

const FilteredNewsPage = ({ params }) => {
  const newsYear = params.year;
  const filteredNews = getNewsForYear(newsYear);
  return <NewsList newsList={filteredNews} />;
};

export default FilteredNewsPage;
