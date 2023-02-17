import React from "react";
import ImageGallery from "react-image-gallery";
import "./ImageGallery.css";

const images = [
  
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608574/nitsmun/DIP_8467-compressed_judxet.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/v1676608574/nitsmun/DIP_8467-compressed_judxet.jpg",
  },
  
  // {
  //   original: "./Images/juniormun2022/DSC_0648-compressed.jpg",
  //   thumbnail: "./Images/juniormun2022/DSC_0648-compressed.jpg",
  // },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608631/nitsmun/DIP_8541-compressed_p8vwws.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608631/nitsmun/DIP_8541-compressed_p8vwws.jpg",
  },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608686/nitsmun/DIP_8466-min_uo9cb4.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608686/nitsmun/DIP_8466-min_uo9cb4.jpg",
  },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608741/nitsmun/DSC_0672-compressed_ykaeke.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608741/nitsmun/DSC_0672-compressed_ykaeke.jpg",
  },
  {
    original:"https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608838/nitsmun/DSC_0675-compressed_rgbn1x.jpg",
    thumbnail:"https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608838/nitsmun/DSC_0675-compressed_rgbn1x.jpg",
  },
  {
    original:"https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608928/nitsmun/Carousel1_qehbvi.jpg",
    thumbnail:"https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676608928/nitsmun/Carousel1_qehbvi.jpg",
  },
  {
    original:"https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609083/nitsmun/Carousel2_kzhips.jpg",
    thumbnail:"https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609083/nitsmun/Carousel2_kzhips.jpg",
  },
  // {
  //   original: "./Images/juniormun2022/DIP_8615-min.jpg",
  //   thumbnail: "./Images/juniormun2022/DIP_8615-min.jpg",
  // },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609120/nitsmun/Carousel3_dbzhad.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609120/nitsmun/Carousel3_dbzhad.jpg",
  },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609169/nitsmun/Carousel4_afpbs9.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609169/nitsmun/Carousel4_afpbs9.jpg",
  },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609310/nitsmun/Carousel5_lyifbs.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609310/nitsmun/Carousel5_lyifbs.jpg",
  },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609410/nitsmun/Carousel6_nslfwv.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609410/nitsmun/Carousel6_nslfwv.jpg",
  },
  {
    original: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609452/nitsmun/Carousel7_hpy50l.jpg",
    thumbnail: "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676609452/nitsmun/Carousel7_hpy50l.jpg",
  },
  // {
  //   original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330783871_950456856336269_2291632173842180090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=PxTobkjI1bkAX_6FG3L&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBwLSsdRhHrWy_6hFKv2BYC2vJoFDxAkZ-jB-",
  //   thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330783871_950456856336269_2291632173842180090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=PxTobkjI1bkAX_6FG3L&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBwLSsdRhHrWy_6hFKv2BYC2vJoFDxAkZ-jB-",
  // },
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
