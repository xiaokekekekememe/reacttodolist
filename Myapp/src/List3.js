import React, {PureComponent} from 'react' //默认 {}不是默认  
import './List.css'

class List extends PureComponent{
    constructor(props){ 
        super(props)
   
        this.state={
            toDoList:[{
                id: 1,
                content: 'reading'
            },
            {
                id: 2,
                content: 'running'
            },
            {
                id: 3,
                content: 'learning'
            }]
        }
    }
    
    handleAddClick = (event) => {
        event.preventDefault()
        let list = this.state.toDoList
        const newList = list.concat([
            {
            id: list.length + 1,
            content: this.refs.content.value
        }
        
    ])
        // const content = this.refs.content.value
        // const list = this.state.toDoList;
        
       
        this.setState({ ...this.state, toDoList:newList})
        console.log("dfs")
        this.setState({content:" "});
        console.log("vdsa dfs")
        
    }
    render(){
        return(
            <div>
                <h2>Todo List</h2>
                <div className="list-wrapper">
                    {
                    this.state.toDoList.map(i => {
                        return(
                        <div className="list-item" key={i.id}>
                            <p className="index">{i.id}</p>
                            <p>{i.content}</p>
                        </div>
                        )
                    })
                    }
                 </div>
                 
                 <div className="inline-input">
                     <input ref="content" type="text" />
                     <button type="button" onClick={this.handleAddClick} className="btn">add plan</button>
                 </div>
                
            </div>
        )
    }
}

export default List

//直接export list 别的时候加花括号 from某个组件

//定义方式  =〉


