//import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Selector extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <button className='btn btn-block sm-2 btn-primary active'>Link 1</button>
                        <button className='btn btn-block sm-2 btn-primary'>Link 2</button>
                    </div>
                    <div className="col">
                    Content
                    </div>         
                </div>
            </div>            
        );
    }
}

export default Selector;<h1>Selector comes here</h1>