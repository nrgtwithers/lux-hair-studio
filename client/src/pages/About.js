import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <h4>MEET THE OWNERS</h4>
                <div className='row'>
                <div className="col-md-3"><img src="https://github.com/nrgtwithers/lux-hair-studio/blob/master/Christine-B.png?raw=true" className='right' /></div>
                <div className="col-md-9"><p><strong>Christine Baine</strong> Lemon drops sugar plum jelly carrot cake sweet roll tootsie roll macaroon dragée. Toffee tart bear claw gingerbread lemon drops. Icing apple pie marshmallow jelly gummi bears. Gummies halvah brownie gingerbread. Cotton candy caramels apple pie marzipan pie jelly beans. Gummies powder oat cake apple pie tart. Jujubes sesame snaps brownie chocolate bar. Cheesecake gummies icing tiramisu carrot cake apple pie cotton candy tart. Sugar plum soufflé chupa chups. Dragée apple pie tiramisu cupcake chocolate bar.</p></div>
                <div className="col-md-1"></div>
                </div>
                <div className='row'>
                <div className="col-md-9"><p className="right"><strong>Crystal Schemansky</strong> Lemon drops sugar plum jelly carrot cake sweet roll tootsie roll macaroon dragée. Toffee tart bear claw gingerbread lemon drops. Icing apple pie marshmallow jelly gummi bears. Gummies halvah brownie gingerbread. Cotton candy caramels apple pie marzipan pie jelly beans. Gummies powder oat cake apple pie tart. Jujubes sesame snaps brownie chocolate bar. Cheesecake gummies icing tiramisu carrot cake apple pie cotton candy tart. Sugar plum soufflé chupa chups. Dragée apple pie tiramisu cupcake chocolate bar.</p></div>
                <div className="col-md-3"><img src="https://github.com/nrgtwithers/lux-hair-studio/blob/master/Crystal-S.png?raw=true" className="left" /></div>
                </div>
            </div>              
                )
            }
        };
        
export default About;