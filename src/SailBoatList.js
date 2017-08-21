import React, {Component} from 'react';
import SailBoatRow from './SailBoatRow';
import PropTypes from 'prop-types';

class SailBoatList extends Component {
    render () {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Builder</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.sailboats !== undefined
                            ? this.props.data.sailboats.map((sailboat) => {
                                return (<SailBoatRow   key={sailboat.boat_id} 
                                                sailboat={sailboat}/>);
                            })
                            : null}
                    </tbody>
                </table>
            </div>
        );
    }
}

SailBoatList.propTypes = {
    data: PropTypes.object.isRequired
};

export default SailBoatList;