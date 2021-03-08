import React, { Component } from 'react';
import './home.css'
import ListGroup from 'react-bootstrap/ListGroup';
import ReactMarkdown from "react-markdown";
import test from "../markdown/test.md"
import test2 from "../markdown/test2.md"
function alertClicked() {
    alert('You clicked the third ListGroupItem');
}
class Home extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }
    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(test).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }
    render() {
        const { markdown } = this.state;
        return (
            <div className="page">
                <div className="Left-panel">
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Link 1
                    </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                    </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="Main-field">
                    <div className="Page-name">webapi 21.11.1.11</div>
                    <ReactMarkdown source={markdown} />
                </div>
            </div>
        );
    }
}
export default Home;