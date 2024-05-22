const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <>
      <div className="number-container">
        <p className="error-text">{error}</p>
        <div className="flex">
          {arrNumber.map((value, i) => (
            <div
              isSelected={value === selectedNumber}
              className={
                value === selectedNumber ? "number-box-selected" : "number-box"
              }
              key={i}
              onClick={() => numberHandler(value)}
            >
              {value}
            </div>
          ))}
        </div>
        <p className="select-number">Select Number</p>
      </div>
    </>
  );
};

export default NumberSelector;
