import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    Hello World!
                </Jumbotron>
            </div>              
                )
            }
        };
        
export default Home;