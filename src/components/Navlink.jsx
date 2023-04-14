import { Link } from "react-router-dom"

export default function Navlink(props){
    return(
       <Link to={props.to} className={props.className}>{props.name}</Link>
    )
}