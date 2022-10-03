import { h } from "vue";

const WaveUpLeft = () => {
  return h(
    "svg",
    {
      class: "wave",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 320",
    },
    [
      h("path", {
        d: "M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,85.3C672,43,768,21,864,64C960,107,1056,213,1152,250.7C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
      }),
    ]
  );
};

export default WaveUpLeft;