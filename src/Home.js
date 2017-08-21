import React, {Component} from 'react';
// import axios from 'axios';
import SailBoatList from './SailBoatList';
// import {API_URL} from './globalVars';
import boatdata from './sampleData.js';


class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data:{}
        };
    }
    componentDidMount () {
        this.setState({
            data: boatdata
        });
        // const url = this.props.match.url === '/'
        //             ? '/sailboats'
        //             : this.props.match.url + this.props.location.search;
        // axios.get(`${API_URL}${url}`)
        //     .then((res) => {
        //         console.log(this.props.location.search);
        //         console.dir(res.data);
        //         this.setState({
        //             data: res.data
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

    }
    render() {
        return (
            <div>
                <h2>{'Latest SailBoats'}</h2>
                    <SailBoatList data={this.state.data} />
            </div>   
        );
    }
    
}

export default Home;