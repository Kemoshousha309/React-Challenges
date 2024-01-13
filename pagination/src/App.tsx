import { useEffect, useState } from "react";
import "./App.css";
import { Page } from "./comps/Page/Page";
import { Pagination } from "./comps/Pagination/Pagination";

export interface Record {
  id: number;
  title: string;
  userId: number;
  body: string;
}
type Records = undefined | Record[];
type Pages = null | Record[][];

function App() {
  const [pages, setRecords] = useState<Pages>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((records) => {
        // convertin to pages
        const recs = records as Records;
        const pages: Pages = [];
        if (recs) {
          for (let i = 0; i < recs.length; i += 5) {
            const page = recs.slice(i, i + 5);
            pages.push(page);
          }
          console.log(pages);
        }
        setRecords(pages);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextClickHandler = () => {
    if(pages) {
      if(currentPage+1 >= pages.length) return
      setCurrentPage(currentPage+1)
    }
  }
  const prevClickHandler = () => {
    if(currentPage-1 < 0) return;
    setCurrentPage(currentPage-1)
  }
  const pageClickHandler = (page: number) => {
    setCurrentPage(page)
  }

  if (!pages) return <h2>Loading ....</h2>;
  return (
    <div className="container">
      <Page records={pages[currentPage]} />
      <Pagination
        nextClick={nextClickHandler}
        pervClick={prevClickHandler}
        pageClick={pageClickHandler}
        current={currentPage}
        pagesNumber={pages.length}
      />
    </div>
  );
}

export default App;
