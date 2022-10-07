import { h } from "vue";

interface Props {
  color: string;
}

const ScrollCue = (props: any) => {
  const style = () => import("@/assets/scss/components/_scroll-cue.scss");
  const arrow = h(
    "div",
    { class: "arrow" },
    Array.from({ length: 3 }, () =>
      h("span", {
        style: {
          "border-bottom": `5px solid ${props.color}`,
          "border-right": `5px solid ${props.color}`,
        },
      })
    )
  );

  return h("div", { class: "arrow-wrapper", style: style() }, [arrow]);
};

ScrollCue.props = {
  color: { type: String, required: true },
};

export default ScrollCue;
