const Para = (props: any) => {
  const { content, first } = props;
  return <p className={(first ? "about-para bg-photo" : "about-para")}>{content}</p>;
};

export default Para;
