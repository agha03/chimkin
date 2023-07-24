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
        onClick: () => navigate("/ViewChickens"),
        src: "https://picsum.photos/id/123/1200/400",
        altText: "Ancient Rome",
        caption: "Ancient Rome",
        key: 1,
      },
      {
        onClick: () => navigate("/SubmitChicken"),
        src: "https://picsum.photos/id/456/1200/400",
        altText: "Jurassic Age",
        caption: "Jurassic Age",
        key: 2,
      },
      {
        onClick: () => navigate("/RateChickens"),
        src: "https://picsum.photos/id/678/1200/400",
        altText: "Medevial Era",
        caption: "Medevial Era",
        key: 3,
      },
      {
          onClick: () => navigate("/"),
        src: "https://picsum.photos/id/6/1200/400",
        altText: "Home",
        caption: "Main Pagge",
        key: 4,
      }
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
    );
  }
  
  export default Carouseler;