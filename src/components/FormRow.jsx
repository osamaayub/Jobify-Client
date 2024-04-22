
const FormRow = ({type,name,labelText,DefaultValue}) => {
  return (
    <div className="form-row">
      <label  htmlFor={name} className="form-label">
        {labelText||name}
      </label>
      <input
        type={type}
        name={name}
        className="form-input"
        id={name}
        defaultValue={DefaultValue||''}
        required
      />
    </div>
  )
}

export default FormRow
