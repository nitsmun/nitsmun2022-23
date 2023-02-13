import React from "react";
import ImageGallery from "react-image-gallery";
import "./ImageGallery.css";

const images = [
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330987207_947896313237848_1824721231056822532_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=OCT6EqR9Mh0AX-F9cMD&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCIsceOfddgTbBKJ84AojwlNtF5H_l2Ih-E662dpyTdsw&oe=63F02FD4",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330987207_947896313237848_1824721231056822532_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=OCT6EqR9Mh0AX-F9cMD&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCIsceOfddgTbBKJ84AojwlNtF5H_l2Ih-E662dpyTdsw&oe=63F02FD4",
  },
  
  // {
  //   original: "./Images/juniormun2022/DSC_0648-compressed.jpg",
  //   thumbnail: "./Images/juniormun2022/DSC_0648-compressed.jpg",
  // },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330902225_1477906299413724_4306601410857901495_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=67H0I_genNYAX8CuGlS&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDwjTrq0vWDL5YzviR-c0UNAG5dxDVxlpB1ueEAwLNtgQ&oe=63EF4873",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330902225_1477906299413724_4306601410857901495_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=67H0I_genNYAX8CuGlS&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDwjTrq0vWDL5YzviR-c0UNAG5dxDVxlpB1ueEAwLNtgQ&oe=63EF4873",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330799341_557186629697571_6008962597625901705_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=dC_EpZIL_ToAX-h5KvN&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCvzqtzuDx0Tz71wVwnmjA9snxql3L04B6aYUSu2qROIQ&oe=63EEE680",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330799341_557186629697571_6008962597625901705_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=dC_EpZIL_ToAX-h5KvN&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCvzqtzuDx0Tz71wVwnmjA9snxql3L04B6aYUSu2qROIQ&oe=63EEE680",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330933781_567925365369635_7083937490508008454_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=yNpD9EueieMAX-UBYLr&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBaSxFPh-8voshlBHzLttJpBS9kIfvKBmsMW8RZRiEaVg&oe=63F03989",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330933781_567925365369635_7083937490508008454_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=yNpD9EueieMAX-UBYLr&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBaSxFPh-8voshlBHzLttJpBS9kIfvKBmsMW8RZRiEaVg&oe=63F03989",
  },
  // {
  //   original: "./Images/juniormun2022/DIP_8615-min.jpg",
  //   thumbnail: "./Images/juniormun2022/DIP_8615-min.jpg",
  // },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330949841_590313792570989_1214184799898533664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=RDnzabW3_K0AX_JQc7G&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBfiHovsNLbqKH4MxzaaPcLfPZO-FwSFOIreyE_fAIMww&oe=63EF3311",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330949841_590313792570989_1214184799898533664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=RDnzabW3_K0AX_JQc7G&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBfiHovsNLbqKH4MxzaaPcLfPZO-FwSFOIreyE_fAIMww&oe=63EF3311",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330982569_744256323690016_7870665356271497817_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=r0uGLMbbTJsAX9E1o_B&tn=QK620zMwvRNJHCbs&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfARX5j6NkgzPG_EbLSJniWEIadLGtaVs-VWJuJ3iaYGOg&oe=63F00D94",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330982569_744256323690016_7870665356271497817_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=r0uGLMbbTJsAX9E1o_B&tn=QK620zMwvRNJHCbs&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfARX5j6NkgzPG_EbLSJniWEIadLGtaVs-VWJuJ3iaYGOg&oe=63F00D94",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330976524_2515665108589679_6915779678271823815_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=xY80rQOSih0AX_ISWDw&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAXlvOMY5-hAyDG_2Gj7q5c-YV8kx_WTvnCQ8aStEevCA&oe=63F01952",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330976524_2515665108589679_6915779678271823815_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=xY80rQOSih0AX_ISWDw&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAXlvOMY5-hAyDG_2Gj7q5c-YV8kx_WTvnCQ8aStEevCA&oe=63F01952",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330989389_1504593383363616_9060359337669408675_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Yype15cqI4wAX_m3Frg&tn=QK620zMwvRNJHCbs&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfATJvWqGYQsnUT30vTRRzB5wVqyHM6u8IOHcuuF1BjY7A&oe=63EF9F45",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330989389_1504593383363616_9060359337669408675_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Yype15cqI4wAX_m3Frg&tn=QK620zMwvRNJHCbs&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfATJvWqGYQsnUT30vTRRzB5wVqyHM6u8IOHcuuF1BjY7A&oe=63EF9F45",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330955878_6279526268758610_1204897958125280877_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=73F0MDLOr18AX-cg8U6&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDmXRlfuVc53B-1felO_TjfvznPmI891ShYGHSy35IEVg&oe=63EE80DC",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330955878_6279526268758610_1204897958125280877_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=73F0MDLOr18AX-cg8U6&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDmXRlfuVc53B-1felO_TjfvznPmI891ShYGHSy35IEVg&oe=63EE80DC",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330990573_727799338907915_1269189032963646080_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ykQ_99AB92kAX_sDyuq&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCcIQYNRO9t-YqeaFVB9GWn7IGIpLrIiAuV7FapFJNaBQ&oe=63EE5F6B",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330990573_727799338907915_1269189032963646080_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ykQ_99AB92kAX_sDyuq&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCcIQYNRO9t-YqeaFVB9GWn7IGIpLrIiAuV7FapFJNaBQ&oe=63EE5F6B",
  },
  {
    original: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330783871_950456856336269_2291632173842180090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=PxTobkjI1bkAX_6FG3L&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBwLSsdRhHrWy_6hFKv2BYC2vJoFDxAkZ-jB-tFWrCohw&oe=63EF7BD7",
    thumbnail: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330783871_950456856336269_2291632173842180090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=PxTobkjI1bkAX_6FG3L&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBwLSsdRhHrWy_6hFKv2BYC2vJoFDxAkZ-jB-tFWrCohw&oe=63EF7BD7",
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
