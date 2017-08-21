import React, { Component } from 'react';

import axios from 'axios';
//import {API_URL} from './globalVars';

class SailBoat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sailboat:{}
        };
    }
    componentDidMount () {
        axios.get('http://localhost:8080/sailboats/1')
            .then((res) => {
                this.setState({
                    sailboat: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render () {
        return (
            <div>
                <header>
                    <p>
                        {this.state.sailboat.vesselName}
                    </p>
                </header>
                <div>
                    <div>
                        <div>
                            <figure>
                            <img src={this.state.sailboat.imgURL} alt={this.state.sailboat.imgURL}/>
                            </figure>
                        </div>
                        <div>
                            <p>{this.state.sailboat.builder}</p>
                            <p>{this.state.sailboat.lengthOverAll}</p>
                            <p>{this.state.sailboat.boatId}</p>
                            <p>{this.state.sailboat.vesselClass}</p>
                            <p>{this.state.sailboat.construction}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// `${API_URL}${this.props.match.url}`
export default SailBoat;