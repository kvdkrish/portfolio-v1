interface IOption {
  block?: "center" | "end" | "nearest" | "start";
  behavior?: "auto" | "smooth";
}

export const scrollToEle = (val: string, { block, behavior }: IOption = {}) => {
  const ele = document.querySelector(val);
  ele?.scrollIntoView({
    block: block || "start",
    behavior: behavior || "smooth",
  });
};
