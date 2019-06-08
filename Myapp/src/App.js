import React, {PureComponent} from 'react';
// /import logo from './logo.svg'; //图片文件 
import './main.css';
import ListItem from './TodoList';
class App extends PureComponent {
  render(){
    return(
     <ListItem/>
    );
  }
}
export default App;
