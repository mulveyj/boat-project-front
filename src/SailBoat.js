import React, { Component } from 'react';

import axios from 'axios';
import {API_URL} from './globalVars';

class SailBoat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sailBoat:{}
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}${this.props.match.url}`)
            .then((res) => {
                this.setState({
                    SailBoat: res.data.SailBoat
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
                        {this.state.SailBoat.title}
                    </p>
                </header>
                <div>
                    <div>
                        <div>
                            <figure>
                            <img src={this.state.SailBoat.avatarUrl} alt={this.state.SailBoat.avatarUrl}/>
                            </figure>
                        </div>
                        <div>
                            <p>{this.state.SailBoat.author}</p>
                            <p>{this.state.SailBoat.createdAt}</p>
                            <p>{this.state.SailBoat.id}</p>
                        </div>
                    </div>
                    <div>
                        <p>{this.state.SailBoat.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SailBoat;