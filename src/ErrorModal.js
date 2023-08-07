export default function ErrorModal({ errorMessage, setErrorMessage }) {
  return (
    <div className="modal">
      <h2>{errorMessage}</h2>
      <button onClick={() => setErrorMessage("")}>OK</button>
    </div>
  )
}