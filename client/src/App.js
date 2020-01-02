import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
//import ExifOrientationImg from 'react-exif-orientation-img';
//import ExifOrientationImg from 'react-exif-orientation-img';
//import EXIF from 'exif-js';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    /* marginTop: theme.spacing.unit *3, */
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
});

// const MyComponent = () =>
//   <ExifOrientationImg
//     src="https://github.com/recurser/exif-orientation-examples/blob/master/Portrait_8.jpg?raw=true"
//     alt="A waterfall"
//   />

/*
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'test',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '951222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '나머지',
  'birthday': '971222',
  'gender': '남자',
  'job': '대학생'
}]
*/
/*
  1) constructor()
  2) componentWillMount()
  3) render()
  4) componentDidMount()

  props or state => shouldComponentUpdate()  --> render 다시 불러옴
  상태만 잘 관리하면 된다.

*/


class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>image</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {customers.map(c => {return(    
                자기 자신에서 관리하다가 state로 관리하므로 this가 붙음.
            */}
            {this.state.customers ? this.state.customers.map(c => {return(
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                  );
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
