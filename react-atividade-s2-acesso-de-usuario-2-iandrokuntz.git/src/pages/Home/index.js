import { Link } from "react-router-dom";
import { members } from "../members";
import "./style.css"

const Home = () => {


    return(
        <div>
            {members.map((item) => {
                return members.type === "pj" ? (
                    <Link to={`/company/${item.id}`}>{item.name}</Link>
                ) : (
                    <Link to={`/customer/${item.id}`}>{item.name}</Link>
                )
            })}
        </div>
    )
}

export default Home