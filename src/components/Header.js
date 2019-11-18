import React, { Component } from 'react'
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
    DropdownItem,
    Button,
    ButtonGroup } from 'reactstrap';

import './Header.css'


export default class Header extends Component {
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
            <div id="Header"> 
                <div className="container d-flex justify-content-around">
                    <Button className="customHeader active"  size="sm" active>Creative I</Button>
                    <Button className="customHeader"  size="sm">Creative II</Button>
                    <Button className="customHeader"  size="sm">Targeted Selection</Button>
                    <Button className="customHeader" size="sm">Compare All Blocks</Button>
                    <Button className="customHeader" size="sm">Selective Compare</Button>
                    <Button className="customHeader" size="sm">Clear</Button>                   
                </div>
 
                {/* <ButtonGroup  size="sm" className="">
                    <Button className="customHeader" style={{marginRight:'0.2rem'}}>Creative I</Button>
                    <Button className="customHeader" style={{marginLeft:'0.2rem', marginRight:'0.2rem'}}>Creative II</Button>
                    <Button className="customHeader" style={{marginLeft:'0.2rem', marginRight:'0.2rem'}}>Targeted Selection</Button>
                    <Button className="customHeader" style={{marginLeft:'0.2rem', marginRight:'0.2rem'}}>Compare All Blocks</Button>
                    <Button className="customHeader" style={{marginLeft:'0.2rem', marginRight:'0.2rem'}}>Selective Compare</Button>
                    <Button className="customHeader" style={{marginLeft:'0.2rem'}}>Clear</Button>
                </ButtonGroup>       */}
            </div>
        )
    }
}
