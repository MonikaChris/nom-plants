import { getPreviousWeek } from "./dateUtility";

export default function Banner({week, setWeek, total, setPlantModal}) {
  
  const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const dateParts = week.split('-');
  const month = months[Number(dateParts[0]) - 1];
  const date = `${month} ${dateParts[1]}, ${dateParts[2]}`;

  const goBackOneWeek = () => {
    console.log(`week: ${week}`);
    setWeek(getPreviousWeek(week));
  }

  return (
    <>
      <div className="week-banner">
        <button onClick={goBackOneWeek} className='back-button'/>
        <div className="week-text">Week of {date}</div>
        <button className='forward-button'/>
      </div>
      
      <div className="button-row">
        <div className="total-text">Plants Nom'd: {total}</div>
        <div>
        <button onClick={() =>  setPlantModal(true)} className="add-plant-button">+</button>
        <button className="nom-history-button">
          <img className="chart-icon" src={require('./images/bar-chart.png')} alt="Nom History"/>
        </button>
        </div>        
      </div> 
    </>
  )
}