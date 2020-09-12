import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './styles/VerticalNavBarComponent.css';
import { StickyContainer, Sticky } from 'react-sticky';

const VerticalNav = (props) => {
  return (

    <StickyContainer>
        <Sticky>

        {() => (

            <div className="sticky-inner">
                <div className="back-ground">
                    <p>Menu</p>
                    <Nav vertical>
                        <NavItem>
                        <NavLink  href="#" active >Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#">Events and Drives</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#">Food Donations</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#">Login</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink disabled href="#">Settings</NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                 </div>   
                </div>
            
          )}
                
            </Sticky>
        </StickyContainer>
  );
}

export default VerticalNav;

