function ErrorModal({ errorMessage, clearErrorMessage }) {
  return (
    <div className="modal">
      <h2>{errorMessage}</h2>
      <button onClick={clearErrorMessage}>OK</button>
    </div>
  )
}

export default ErrorModal;
