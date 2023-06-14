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

export const setLocalStorage = (key: string, val: string) => {
  localStorage.setItem(key, val);
};

export const getLocalStorage = (key: string, defaulVal: any) => {
  if (!key) return defaulVal;
  return localStorage.getItem(key) || defaulVal;
};
