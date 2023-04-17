import { Link } from "react-router-dom";

export default function Button(props){
    return(
        <>
          <Link to={props.to} className= {props.className} onChange={props.onChange}>{props.name}</Link>
        </>
    )
}