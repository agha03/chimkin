import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";


function Carouseler(args) {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const items = [
      {
        onClick: () => navigate("/view"),
        src: "https://wikifarmer.com/wp-content/uploads/2017/06/Chicken-Coop-%E2%80%93-Hen-House.jpg",
        altText: "View All Chick'nz",
        caption: "View All Chick'nz",
        key: 1,
      },
      {
        onClick: () => navigate("/submit"),
        src: "https://i.ytimg.com/vi/K3g_-ldYUf0/maxresdefault.jpg",
        altText: "Submit Chick'n",
        caption: "Submit Chick'n",
        key: 2,
      },
      {
        onClick: () => navigate("/rate"),
        src: "https://www.shutterstock.com/shutterstock/photos/2308584623/display_1500/stock-photo-closeup-image-of-a-young-woman-making-thumb-up-hand-sign-while-holding-a-plate-of-fried-chicken-2308584623.jpg",
        altText: "Rate your Chick'n",
        caption: "Rate your Chick'n",
        key: 3,
      },
    ];
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} onClick={item.onClick} />
          <CarouselCaption
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
  
    return (
      <>
      <Header />
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
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
  
  export default Carouseler;