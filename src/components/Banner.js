import { getPreviousWeek, getNextWeek, getCurrentWeek } from "../dateUtility";
import AuthAPI from "../api/authAPI";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Banner({ user, week, setWeek, total, setPlantModal }) {
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const dateParts = week.split('-');
  const month = months[Number(dateParts[0]) - 1];
  const date = `${month} ${dateParts[1]}, ${dateParts[2]}`;

  const api = new AuthAPI();

  const DEMO_EMAIL = "lovebug@veggies.com";

  const goBackOneWeek = () => {
    console.log(`week: ${week}`);
    setWeek(getPreviousWeek(week));
  }

  const goForwardOneWeek = () => {
    setWeek(getNextWeek(week));
  }

  const isCurrentWeek = () => {
    return week === getCurrentWeek();
  }

  const logout = async () => {
    await api.logout();
    setAuth({});
    navigate('/');
  }

  return (
    <>
      <div className="week-banner">
        <button onClick={goBackOneWeek} className='back-button'/>
        <div className="week-text">Week of {date}</div>
        <button onClick={goForwardOneWeek} disabled={isCurrentWeek()} className='forward-button'/>
      </div>
      
      <div className="button-row">
        <div className="total-text">Plants Nom'd: {total}</div>
        <div>
        <button onClick={() =>  setPlantModal(true)} className="add-plant-button">+</button>
        <button className="nom-history-button">
          <img className="chart-icon" src={require('../images/bar-chart.png')} alt="Nom History"/>
        </button>
        <Link to="/">
          <img className="home-icon" src={require('../images/home.png')} alt="Home Button" />
        </Link>

        {user !== DEMO_EMAIL && (
          <button onClick={logout} className="generic-button logout-button">Logout</button>
        )}
        </div>        
      </div> 
    </>
  )
}