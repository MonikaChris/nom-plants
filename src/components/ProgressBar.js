export default function ProgressBar({row, GARDEN_ROW_LENGTH}) {

  //Calculate percent of progress bar filled
  const seedIndex = row.findIndex(elem => elem === 0);
  const numerator = seedIndex === -1 ? GARDEN_ROW_LENGTH : seedIndex;
  const percent = numerator/GARDEN_ROW_LENGTH * 100;
  
  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{width: `${percent}%`}}></div>
      </div>
    </>
  )
}