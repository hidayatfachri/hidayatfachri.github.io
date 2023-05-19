import { Link } from "react-router-dom";
import "./ServiceListStyles.css";

function ServiceListData(props){
    return(
        <div className="s-card" >
                <div className="s-image"> 
                    <img alt="image" src={props.image}></img>
                </div>
                <div className="title">
                    <h4>{props.title}</h4>
                </div>
                <p>{props.text}</p>
                <Link exact to={props.url}>
                    <h5>Pelajari Lebih lanjut <i class="fa-solid fa-arrow-right"></i> </h5>
                </Link>
        </div>
    )
}

export default ServiceListData;