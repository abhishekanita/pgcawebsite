import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';




class Navigation extends React.Component{
    state = {
        isTop: true,
      };

    componentDidMount(){
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
          });
    }

    render() {
        let bg = this.state.isTop ? '' : 'white';
        let variant = this.state.isTop ? 'dark' : 'light';
        return (
            <Navbar collapseOnSelect expand="lg" bg={bg} variant={variant} className = 'shadow-sm' fixed = 'top' style = {{marginBottom: '10%', backgroundColor: 'rgba(45, 46, 46, 0.1)'}}>

            <Navbar.Brand as = {Link} className = 'ml-3' to = "/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mr-3">
                <NavDropdown alignRight title="Parliamentarians Group" id="collasible-nav-dropdown">
                    <NavDropdown.Item as = {Link} to = '/about/overview' >How do they work?</NavDropdown.Item>
                    <NavDropdown className="dropdown-submenu" drop = 'left' title="Active PAGs">
                        <NavDropdown.Item as = {Link} to = '/about/PAG/ClimateAction'> Climate Action</NavDropdown.Item>
                        <NavDropdown.Item as = {Link} to = '/about/PAG/Startups'> Startups</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown.Item as = {Link} to = '/about/PAG/initiatives' >Initiatives</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown alignRight title="Get Involved" id="collasible-nav-dropdown">
                    <NavDropdown.Item as = {Link} to = '/getInvolved/supportPAG' >Support a PAG</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = '/getInvolved/events'> Attend a Event</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = '/getInvolved/PAG/contact' >Contact Us</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown alignRight title="Resources" id="collasible-nav-dropdown">
                    <NavDropdown.Item as = {Link} to = '/resources/policyAnalysis' >Policy Analysis</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = '/resources/reports'> PAG Reports</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = '/resources/faq' >FAQs</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = '/resources/blogs' >Blogs</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = '/resources/caseStudies' >Case Studies</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;