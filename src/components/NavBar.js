import React from 'react'
import './NavBar.css';
import ListGroup from 'react-bootstrap/ListGroup'

function alertClicked() {
    
}

class Navbar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <div className="NavBarTop">
                    <ListGroup as="ul">
                        <ListGroup.Item action href="home" onClick={alertClicked} >
                            home
                        </ListGroup.Item>
                        <ListGroup.Item action href="about" onClick={alertClicked} >
                            about
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}
export default Navbar;