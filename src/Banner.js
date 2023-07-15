export default function Banner({week, total}) {

  const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const dateParts = week.split('-');
  const month = months[Number(dateParts[0]) - 1];
  const date = `${month} ${dateParts[1]}, ${dateParts[2]}`;


  return (
    <>
      <div className="week-banner">
        <button>Previous</button>
        <div className="week-text">Week of {date}</div>
        <button>Forward</button>
      </div>
      
      <div className="total-text">Total Plants Nom'd: {total}</div>
      
      <div className="button-row">
        <button>Add Plant</button>
        <button>Nom History</button>
      </div>
    </>
  )
}