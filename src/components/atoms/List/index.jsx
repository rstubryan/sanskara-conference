const BaseList = (props) => {
  const { label } = props;

  return (
    <>
      <ul className="my-3">
        <li>{label}</li>
      </ul>
    </>
  );
};

export default BaseList;
