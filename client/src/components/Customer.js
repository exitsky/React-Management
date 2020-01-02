import React from 'react';
//import ExifOrientationImg from 'react-exif-orientation-img';
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


//import { EXIF } from "exif-js";
/*
EXIF.getData(document.getElementById('imgElement'), function() {
  const allMetaData = EXIF.getAllTags(this);
 
  let direction;
  if (allMetaData.GPSImgDirection) {
    const directionArry = allMetaData.GPSImgDirection; // 方位角
    direction = directionArry.numerator / directionArry.denominator;
  }
 
  let Longitude;
  if (allMetaData.GPSLongitude) {
    const LongitudeArry = allMetaData.GPSLongitude;
    const longLongitude =
      LongitudeArry[0].numerator / LongitudeArry[0].denominator +
      LongitudeArry[1].numerator / LongitudeArry[1].denominator / 60 +
      LongitudeArry[2].numerator / LongitudeArry[2].denominator / 3600;
    Longitude = longLongitude.toFixed(8);
  }
 
  let Latitude;
  if (allMetaData.GPSLatitude) {
    const LatitudeArry = allMetaData.GPSLatitude;
    const longLatitude =
      LatitudeArry[0].numerator / LatitudeArry[0].denominator +
      LatitudeArry[1].numerator / LatitudeArry[1].denominator / 60 +
      LatitudeArry[2].numerator / LatitudeArry[2].denominator / 3600;
    Latitude = longLatitude.toFixed(8);
  }
 
  console.log(direction, Longitude, Latitude);
  //return ' ' + Longitude;
});
*/

/*
EXIF.getOrientation(document.getElementById('imgElement'), () => { 
    new Promise((resolve, reject) => {   
        const img = new Image();    
        img.src = window.URL.createObjectURL(document.getElementById('imgElement'));    
        img.onload = () => {      
           // 获取图片元数据（EXIF 变量是引入的 exif-js 库暴露的全局变量）     
           EXIF.getData(img, function () {        
           // 获取图片旋转标志位        
           let orientation = EXIF.getTag(this, "Orientation");        
           resolve(orientation || 1)      
         })    
        }    
       img.onerror = (err) => {      
         reject(err)    
        }  
})});
*/

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

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