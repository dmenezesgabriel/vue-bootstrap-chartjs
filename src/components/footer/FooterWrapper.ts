import { h } from "vue";

const FooterWrapper = (props: any, context: any) => {
  const slotDefault = h("div", context.slots.default());
  const slotBottom = h("div", context.slots.bottom());
  const col = h("div", { class: "col-12" }, [slotBottom]);
  const row = h("div", { class: "row text-center text-white" }, [col]);
  const container = h("div", { class: "container" }, [row]);
  const footerBottom = h("div", { class: "footer__bottom pt-5 pb-5" }, [
    container,
  ]);
  return h("footer", { class: "footer", role: "contentinfo" }, [
    slotDefault,
    footerBottom,
  ]);
};

export default FooterWrapper;
