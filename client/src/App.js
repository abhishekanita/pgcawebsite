import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navigation from './containers/Layout/Navigation'
import Footer from './containers/Layout/Footer'

import Home from './containers/Home'

import Overview from './containers/About/Overview'
import SpecificPAG from './containers/About/PAGs/SpecficPAG'
import SpecificInitiative from './containers/About/Initiatives/SpecificInitiative'
import Initiatives from './containers/About/Initiatives/Initiatives'
import SpecificEvent from './containers/About/Events/SpecificEvent'

import SupportPAG from './containers/GetInvolved/SupportPAG/SupportPAG'
import Sponsor from './containers/GetInvolved/SupportPAG/Sponsor'
import ContactUs from './containers/GetInvolved/ContactUs/ContactUs'
import Events from './containers/About/Events/Events'

import Blogs from './containers/Resources/Blogs'
import CaseStudies from './containers/Resources/CaseStudies'
import FAQ from './containers/Resources/FAQ'
import PolicyAnalysis from './containers/Resources/PolicyAnalysis'
import Reports from './containers/Resources/Reports'
import SpecificResource from './containers/Resources/SpecificResource'

const App = () => {
    return (
        <div>
            <Router>
            <Navigation />
                <Switch>

                <Route exact path = '/' component = {Home}/>

                <Route exact path = '/about/overview' component = {Overview}/>
                <Route exact path = '/about/PAG/initiatives' component = {Initiatives}/>
                <Route exact path = '/about/PAG/:groupName' component = {SpecificPAG}/>              

                <Route exact path = '/getInvolved/supportPAG' component = {SupportPAG}/>
                <Route exact path = '/getInvolved/sponsor' component = {Sponsor}/>
                <Route exact path = '/getInvolved/events' component = {Events}/>
                <Route exact path = '/getInvolved/contact' component = {ContactUs}/>

                <Route exact path = '/resources/policyAnalysis' component = {PolicyAnalysis}/>
                <Route exact path = '/resources/blogs' component = {Blogs}/>
                <Route exact path = '/resources/caseStudies' component = {CaseStudies}/>
                <Route exact path = '/resources/FAQ' component = {FAQ}/>
                <Route exact path = '/resources/reports' component = {Reports}/>
                <Route exact path = '/resources/resource/:id' component = {SpecificResource}/>

                <Route exact path = '/about/PAG/:groupName/initiative/:initiativeName' component = {SpecificInitiative}/>
                <Route exact path = '/about/PAG/:groupName/event/:event' component = {SpecificEvent}/>      

                </Switch>
            </Router>
            <Footer />
        </div>
    )
}


export default App;