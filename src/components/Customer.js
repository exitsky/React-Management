import React from 'react';
import ExifOrientationImg from 'react-exif-orientation-img';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/* const exifOrientation => () {
    <div>
    </div>    
} 

class ExifOrientationImg extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.image}</h2>
            </div>
        )
    }
}*/


class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}


export default Customer;