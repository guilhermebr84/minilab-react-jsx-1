const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function ToDoList() {
  return (
    <div>
      <ul className="list-group">{tasks.map((currentEl) => {
        return <li className="list-group-item"><input className="form-check-input me-1" type="checkbox" value=""/>{currentEl}</li>;
      })}</ul>
    </div>
  );
}

export default ToDoList;
