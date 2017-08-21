import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SailBoatRow = (props) => {
    return (
        <tr>
            <th><Link to={'/SailBoats/' + props.sailboat.boat_id}>{props.sailboat.vesselName}</Link></th>
        </tr>
    );
};

SailBoatRow.propTypes = {
    sailboat: PropTypes.object.isRequired
};

export default SailBoatRow;