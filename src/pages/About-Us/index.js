import { Fragment } from "react"
import { Link } from "react-router-dom"


export default function AboutUs (){
    return(
        <Fragment>
            <div>
                <h2>About-Us</h2>
                <Link to="/">go to HomePage</Link>
            </div>
        </Fragment>
    )
}