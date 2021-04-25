import React, { Component } from 'react'
import Cardui from './Cardui'
import './Cardui.css'
import yoimg1 from '../images/beginer1.jpg';
import yoimg2 from '../images/intermediate1.jpg';
import yoimg3 from '../images/advance.jpg';
export class Cards extends Component {
    render() {
        return (
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Cardui imgsrc={yoimg1} title="Beginner" para="Never done yoga before! but wants to start 
                        now. Navigate through our beginer level practice and sooner gain a  fitter body" explore="./yogabeginer"/>
                    </div>
                    <div className="col-md-4">
                        <Cardui imgsrc={yoimg2} title="Intermediate" para="Done practising basic yoga pose, wants more!
                         We have something for you. Take your step forward and start working on yourself now."explore="./intermediateyoga"/>
                    </div>
                    <div className="col-md-4">
                        <Cardui imgsrc={yoimg3} title="Advance" para="If We are not wrong you are already aware about benefis of yoga in your own life.
                        We have something more captivating and interesting for you"explore="./advanceyoga"/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Cards;
