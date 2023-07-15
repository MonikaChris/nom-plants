export default function ProgressBar({row, rowLength}) {

  //Calculate percent of progress bar filled
  const percent = row.length/rowLength * 100;
  
  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{width: `${percent}%`}}></div>
      </div>
    </>
  )
}