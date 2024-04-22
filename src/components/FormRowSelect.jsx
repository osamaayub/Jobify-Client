

const FormRowSelect = ({
  name,
  labelText,
  list,
  onChange
}) => {
  return (
    <div className="form-Row">
    <label htmlFor={name} className="form-label">
      {labelText||name}
    </label>
    <select className="form-select"
    name={name}
    id={name}
    onChange={onChange}
    >
    {list.map((listitem)=>{
      return(
        <option key={listitem} value={listitem}>
            {listitem}
        </option>
      );
    })}
    </select>
      
    </div>
  )
}

export default FormRowSelect
