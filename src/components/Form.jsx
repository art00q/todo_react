function Form({ onSubmit, setTaskName, taskName }) {
  function onChange(event) {
    setTaskName(event.target.value);
  }

  return (
    <form onSubmit={ onSubmit } className="input">
      <input onChange={ onChange } value={ taskName } type="text" placeholder="Добавить" className="input__type text" />
      <button type="submit" className="input__submit"></button>
    </form>
  )
}

export default Form;