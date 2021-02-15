const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: todos.length,
      },
    ]);
    setInputText("");
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Todos</option>
          <option value="completed">Completos</option>
          <option value="uncompleted">Incompletos</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
