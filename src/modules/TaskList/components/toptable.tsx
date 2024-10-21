import "../css/toptable.css";

type TOPTABLE = {
  totalTasks: number;
  completedTasks: number;
};

const TopTable: React.FC<TOPTABLE> = ({ totalTasks, completedTasks }) => {
  return (
    <div className="filter-content">
      <p>
        Total de tareas: <strong>{totalTasks} </strong>
      </p>
      <p>
        | Tareas completadas:
        <strong>{completedTasks}</strong>
      </p>
    </div>
  );
};

export default TopTable;
