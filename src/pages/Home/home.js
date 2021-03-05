import React from 'react'
import './home.css'
import ListGroup from 'react-bootstrap/ListGroup'
function alertClicked() {
    alert('You clicked the third ListGroupItem');
}
function Home() {
    return (
        <div>
            <div className="Left-panel">
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="#link1">
                        Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        This one is a button
                </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}
export default Home;