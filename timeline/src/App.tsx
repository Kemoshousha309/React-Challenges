import { useEffect, useRef, useState } from "react";
import "./App.css";

type Image = {
  url: string;
  title: string;
  user: number;
  description: string;
  id: number;
};

function App() {
  const [offset, setOffset] = useState(0);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=4`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setImages([...images, ...data.photos]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [offset]);



  const scrollHandler = () => {
    const wrapperElement = wrapper.current as HTMLDivElement;
    const {scrollTop, clientHeight, scrollHeight} = wrapperElement;
    if(scrollTop + clientHeight == scrollHeight) {
      setLoading(true);
      setTimeout(() => {
        setOffset(offset + 10)
      }, 500);
    }
  }  

  return (
    <div ref={wrapper} onScroll={scrollHandler} className="wrapper">
      {images.map((i) => {
        return (
          <img
            loading="lazy"
            className="img"
            src={i.url}
            alt={i.description}
            key={i.id}
          />
        );
      })}
      {loading ? <div className="loading">Loading . . .</div> : null}
    </div>
  );
}

export default App;


