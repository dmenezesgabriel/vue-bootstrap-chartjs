import { h } from "vue";

const directions: any = {
  upLeft:
    "M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,85.3C672,43,768,21,864,64C960,107,1056,213,1152,250.7C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  downLeft:
    "M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,85.3C672,43,768,21,864,64C960,107,1056,213,1152,250.7C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
  upRight:
    "M0,320L48,320C96,320,192,320,288,298.7C384,277,480,235,576,192C672,149,768,107,864,122.7C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
};

// @vue/component
const Wave = (props: any) => {
  const style = () => import("~/components/Wave/wave.scss");
  return h(
    "svg",
    {
      class: "wave",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 320",
    },
    [h("path", { d: directions[props.direction], style: style() })]
  );
};

export default Wave;
