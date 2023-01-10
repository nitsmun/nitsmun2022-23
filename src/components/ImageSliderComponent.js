import React from "react";
import ImageGallery from "react-image-gallery";
import "./ImageGallery.css";

const images = [
  {
    original: "./Images/juniormun2022/DIP_8467-compressed.jpg",
    thumbnail: "./Images/juniormun2022/DIP_8467-compressed.jpg",
  },
  {
    original: "./Images/juniormun2022/DIP_8541-compressed.jpg",
    thumbnail: "./Images/juniormun2022/DIP_8541-compressed.jpg",
  },
  // {
  //   original: "./Images/juniormun2022/DSC_0648-compressed.jpg",
  //   thumbnail: "./Images/juniormun2022/DSC_0648-compressed.jpg",
  // },
  {
    original: "./Images/juniormun2022/DIP_8466-min.jpg",
    thumbnail: "./Images/juniormun2022/DIP_8466-min.jpg",
  },
  {
    original: "./Images/juniormun2022/DSC_0672-compressed.jpg",
    thumbnail: "./Images/juniormun2022/DSC_0672-compressed.jpg",
  },
  {
    original: "./Images/juniormun2022/DSC_0675-compressed.jpg",
    thumbnail: "./Images/juniormun2022/DSC_0675-compressed.jpg",
  },
  // {
  //   original: "./Images/juniormun2022/DIP_8615-min.jpg",
  //   thumbnail: "./Images/juniormun2022/DIP_8615-min.jpg",
  // },
  {
    original: "./Images/Carousel1.jpg",
    thumbnail: "./Images/Carousel1.jpg",
  },
  {
    original: "./Images/Carousel2.jpg",
    thumbnail: "./Images/Carousel2.jpg",
  },
  {
    original: "./Images/Carousel3.jpg",
    thumbnail: "./Images/Carousel3.jpg",
  },
  {
    original: "./Images/Carousel4.jpg",
    thumbnail: "./Images/Carousel4.jpg",
  },
  {
    original: "./Images/Carousel5.jpg",
    thumbnail: "./Images/Carousel5.jpg",
  },
  {
    original: "./Images/Carousel6.jpg",
    thumbnail: "./Images/Carousel6.jpg",
  },
  {
    original: "./Images/Carousel7.jpg",
    thumbnail: "./Images/Carousel7.jpg",
  },
];

class ImageSliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myImageRef = React.createRef();
    this.onFullscreen = this.onFullscreen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onMoveToSlide = this.onMoveToSlide.bind(this);
  }

  onFullscreen() {
    this.myImageRef.current.fullScreen();
  }
  onPlay() {
    this.myImageRef.current.play();
  }
  onPause() {
    this.myImageRef.current.pause();
  }
  onMoveToSlide() {
    this.myImageRef.current.slideToIndex(2);
  }

  onEventTrigger(eventName) {
    console.log("Event Name ", eventName);
  }

  render() {
    return (
      <div className="wrapper">
        <ImageGallery
          items={images}
          infinite={true}
          lazyLoad={true}
          autoPlay={true}
          slideDuration={1000}
          onSlide={() => this.onEventTrigger("onSlide")}
          onClick={() => this.onEventTrigger("onClick")}
          onTouchMove={() => this.onEventTrigger("onTouchMove")}
          ref={this.myImageRef}
        />
      </div>
    );
  }
}
export default ImageSliderComponent;
