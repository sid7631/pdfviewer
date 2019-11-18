import React, { Component } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import './Navigation.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen:false,
        }
    }

    toggle = () => {
        this.setState({...this.state,isOpen:!this.state.isOpen});
    }

    render() {
        const isOpen = this.state.isOpen;

        return (
            <div id="Navigation"> 
            <Navbar color="" light expand="md">
              <NavbarBrand href="/">Version Control</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Dashboard</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <span>Siddharth</span><MdAccountCircle size={32} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Generate Report
                      </DropdownItem>
                      <DropdownItem>
                        View Error Checklist
                      </DropdownItem>
                      <DropdownItem>
                        Upload New Creative
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        SignOut
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}
