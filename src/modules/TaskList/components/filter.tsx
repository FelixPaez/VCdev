import '../css/filter.css'
type FILTERPROPS ={
    filter: "all" | "completed" | "pending" ,
    setFilter: (e:"all" | "completed" | "pending") => void
}


const Filter:React.FC<FILTERPROPS> = ({filter, setFilter}) => {
    return (
        <div className='options'>         
          <select
            id="filter"
            className="select-filter"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as "all" | "completed" | "pending")
            }
          >
            <option value="all">Todas</option>
            <option value="completed">Completadas</option>
            <option value="pending">Pendientes</option>
          </select>          
        </div>        
      );
  };

export default Filter;
