//import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Selector extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            selection: React.Children.toArray(props.children)[0].props.name
        }

    }
    render() {
        /*
        We are binding dynamically to all the children elements specified under the Selector component
        For every child, we are creating a Button
            -Handle OnClick and set the selected state
            -Use a method to get the className dynamically
        */
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        {
                            React.Children.map(this.props.children, c=>
                            <button 
                                name={c.props.name}
                                onClick={(ev)=>this.onClick(ev)}
                                className={this.getMenuClassName(c)}>{c.props.name}</button>
                                )
                        }
                    </div>
                    <div className="col">
                    Content
                    </div>         
                </div>
            </div>            
        );
    }
    onClick(ev)
    {
        console.log(`got a click ${ev.target.name}`)
        this.setState({
            selection:ev.target.name
        });
    }
    getMenuClassName(child)
    {
        let activeButtonState='btn-primary active'
        let inactiveButtonState='btn-secondary'
        let buttonState= (this.state.selection === child.props.name) ? activeButtonState:inactiveButtonState;
        let className=`btn btn-block sm-2 ${buttonState}`;
        return className;
    }
}

export default Selector;<h1>Selector comes here</h1>