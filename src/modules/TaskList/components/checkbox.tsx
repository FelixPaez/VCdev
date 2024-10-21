import '../css/checkbox.css'
type CHECKPROPS={
    isListView:boolean,
    setIsListView: (isListView:boolean) => void
}

const Checkbox:React.FC<CHECKPROPS> = ({isListView, setIsListView}) => {
  return (
    <div className='checkbox-container'>
      
        <input
        className='box'
          type="checkbox"
          id="listView"
          checked={isListView}
          onChange={() => setIsListView(!isListView)}
        />
        Cambiar vista     
    </div>
  );
};

export default Checkbox;
