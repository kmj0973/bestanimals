const SlickButtonFix = (props: {
  children: JSX.Element;
  slideCount?: number;
  currentSlide?: number;
}) => {
  const { children, currentSlide, slideCount, ...others } = props;
  return <span {...others}>{children}</span>;
};

export default SlickButtonFix;
