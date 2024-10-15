import { Link } from "react-router-dom";
import errorImg from "../../resources/img/error.png"

const Page404 = () => {
  return (
    <div>
      <img src={errorImg} 
        alt="404" 
          style={{'display': 'block', 'margin': '0 auto', 'marginBottom': '30px'}}/>
      
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
      <Link 
        style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'color': '#a10819'}} 
        to={"/marvel-project"}>Back to main page
      </Link>
    </div>
  )
}

export default Page404;