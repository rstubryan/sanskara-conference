const ContainerLayout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="container max-w-4xl p-5">{children}</div>
    </>
  );
};

export default ContainerLayout;
