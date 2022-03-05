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
        return <li className="list-group-item d-flex justify-content-between align-items-start">{currentEl}</li>;
      })}</ul>
    </div>
  );
}

export default ToDoList;
