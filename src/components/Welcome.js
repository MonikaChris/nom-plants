import { Outlet } from "react-router-dom";

function Welcome() {
  return (
    <div className="homepage">
      <div className="welcome">
        <h2>Welcome to Nom Nom Plants!</h2>
        <p className="first-line">
          Nom Nom Plants is a place for users to track how many different plants
          they eat per week by growing virtual gardens.
        </p>
        <p>
          Recent research suggests that consuming at least 30 different plant
          varieties per week supports a healthy gut microbiome, which is itself
          associated with greater health and wellbeing. Diversifying your plant
          diet can be a fun and colorful way to improve your health, and we're
          here to help!
        </p>
        <p>
          If 30 different plants sounds like a lot, don't fret! "Plants" applies
          to much more than just fruits and vegetables. Think whole grains,
          nuts, seeds, legumes, herbs, and spices as well! For inspiration,
          click the Demo button to see Lovebug's weekly gardens, and all the
          different plants she likes to eat.
        </p>
        <p>
          Through the demo, you can also explore the app's features. Click the
          "back" and "forward" leaf buttons at the top of the page to view
          different weeks, and click on individual plants to edit or delete
          them. Add new plants by clicking the + icon. The chart button lets you
          visualize your gardening progress.
        </p>
        <p>
          When you're ready to start growing your own gardens, click the
          register button to sign up!
        </p>
      </div>
      <Outlet />
    </div>
  );
}

export default Welcome;
