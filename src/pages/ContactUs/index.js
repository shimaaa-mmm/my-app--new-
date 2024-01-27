import { Fragment } from "react"
import { Link } from "react-router-dom"

export default function ContactUs(){
    return(
        <Fragment>
            <div>
                <h2>ContactUs</h2>
                <Link to="About-us/">next</Link>
            </div>
        </Fragment>
    )
}