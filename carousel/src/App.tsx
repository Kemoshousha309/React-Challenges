import { useRef, useState } from "react";
import "./App.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { IconContext } from "react-icons";

const srcs: string[] = [];


function App() {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [prevPageX, setPrevPageX] = useState(0)
  const [prevScrollLeft, setScrollLeft] = useState(0)
  const [moveStart, setmoveStart] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const forwardHandler = () => {
    const carousel = carouselRef.current as HTMLDivElement;
    carousel.scrollTo({
      left: carousel.scrollLeft + 300,
      behavior: "smooth"
    })
    // if (window <= (srcs.length - 3) * -300) {
    //   setWindow(0)
    // }else{
    //   setWindow(window - 300);
    // }
  };

  const backwordHandler = () => {
    const carousel = carouselRef.current as HTMLDivElement;
    carousel.scrollTo({
      left: carousel.scrollLeft - 300,
      behavior: "smooth"
    })
    // if (window == 0) {
    //   setWindow((srcs.length - 3) * -300)
    // }else {
    //   setWindow(window + 300);
    // }
  };

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setmoveStart(true);
    setPrevPageX(e.pageX)
    const carousel = carouselRef.current as HTMLDivElement;
    setscrollPosition(carousel.scrollLeft)
  }

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const carousel = carouselRef.current as HTMLDivElement;
    if(moveStart) {
     const posDiff =  e.pageX - prevPageX;
     carousel.scrollLeft = prevScrollLeft - posDiff
    }
  }

  const mouseUpHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setmoveStart(false)
  }
  return (
    <div className="wrapper">
      <div className="carousel" ref={carouselRef}
        onMouseMove={mouseMoveHandler}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      >
        <div
          className="img-container"
          style={{
            // transform: `translateX(${window}px)`,
          }}
        >
          {srcs.map((src, i) => {
            return (
              <img
                key={src+i}
                draggable={false}
                className="img"
                src={src}
                alt={`img${i}`}
                
              />
            );
          })}
        </div>
      </div>
      <div>
        <IconContext.Provider
          value={{
            className: "controls",
          }}
        >
          <MdArrowBackIos onClick={backwordHandler} />
          <MdArrowForwardIos onClick={forwardHandler} />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default App;

for (let i = 0; i < 10; i++) {
  srcs.push(`./src/assets/img${i + 1}.png`);
}
