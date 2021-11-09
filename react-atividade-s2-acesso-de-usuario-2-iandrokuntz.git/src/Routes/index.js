import {Route, Switch} from "react-router-dom"
import Home from "../pages/Home"
import Customer from "../pages/Customer"
import Company from "../pages/Company"

const Routes = () => {

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/customer/:id">
                    <Customer/>
                </Route>
                <Route path="/company/:id">
                    <Company/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes