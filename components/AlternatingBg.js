const AlternatingBg = ({ components }) => {
  return (
    <>
      {components.map((Component, idx) => (
        <Component
          key={idx}
          bgColor={`${idx % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
        />
      ))}
    </>
  );
};

export default AlternatingBg;
