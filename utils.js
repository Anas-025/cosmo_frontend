export const getPureWidth = (element) => {
  const parentWidth = element.clientWidth;
  const parentPadding =
    parseFloat(getComputedStyle(element).paddingLeft) +
    parseFloat(getComputedStyle(element).paddingRight);
  return parentWidth - parentPadding;
};
