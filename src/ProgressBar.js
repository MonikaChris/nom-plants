export default function ProgressBar({row, gardenRowLength}) {

  //Calculate percent of progress bar filled
  const seedIndex = row.findIndex(elem => elem === 0);
  const numerator = seedIndex === -1 ? gardenRowLength : seedIndex;
  const percent = numerator/gardenRowLength * 100;
  
  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{width: `${percent}%`}}></div>
      </div>
    </>
  )
}