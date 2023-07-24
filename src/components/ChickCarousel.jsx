import React, { useState } from 'react';
import { deleteChicken, getAllChickens } from "../utils/api";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const [chickens, setChickens] = useState();
function refreshChickens() {
    setErrorMsg(null);
    setLoading(true);
    getAllChickens()
      .then((data) => setChickens(data))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }
  useEffect(refreshChickens, []);
  
  function handleDelete(id) {
    playDelete()
    setErrorMsg(null);
    setLoading(true);
    deleteChicken(id)
      .then(() => refreshChickens())
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  
export default function ChickenViewer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === chickens.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? chickens.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = chickens.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={chickens.imgurl}
      >
        <img src={chickens.imgurl}  />
        <CarouselCaption
          captionHeader={chickens.name}
          captionText={chickens.description}
          
        />
      </CarouselItem>
    );
  });

  return (
    <>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
     
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </>
  );
}

;