const FilterBtn = (props) => {
  const { type, filterType, onChangeType } = props;

  const atClick = (e) => {
    onChangeType(type);
  };
  
  let allClass = "btn";
  if (filterType === type) allClass += " btn-secondary";
  else allClass += " btn-outline-secondary";

  return (
    <button type="button" className={allClass} onClick={atClick}>
      {type}
    </button>
  );
};

export default FilterBtn;
