import React, { Component } from 'react';
import ListItem from './listItem';
import Dialog from './dialog';
import './main.css';

class TodoList extends Component {
    constructor (props) {
        super(props);
        
        //初始任务列表
        this.state = {
            list: [{
                id: 0,
                name: '吃饭',
                status: 0
            }, {
                id: 1,
                name: '睡觉',
                status: 0
            }, {
                id: 2,
                name: '打豆豆',
                status : 0
            }],
            finished: 0
        };
    }
    
    //添加新任务，在组件中以props的形式传递给子组件
    addTask (newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    //更新完成的任务，在组件中以props的形式传递给子组件
    updateFinished (todoItem) {
        var sum = 0;
        this.state.list.forEach( (item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }

    //更新任务总数，在组件中以props的形式传递给子组件
    updateTotal (todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1 ) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

    render () {
        return (
            <div className="container">
                <h1>TodoList</h1>
                <ul>
                    { this.state.list.map ((item, index) =>
                        <ListItem 
                            item={item}  
                            finishedChange={this.updateFinished.bind(this)} 
                            totalChange={this.updateTotal.bind(this)}
                            key={index}
                        />
                    )}
                    <li>{this.state.finished}已完成 / {this.state.list.length}总数</li>
                </ul>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
            </div>
        );
    }
}

export default TodoList;

