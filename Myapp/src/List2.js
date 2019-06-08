import React, {PureComponent} from 'react' //默认 {}不是默认  


class List extends PureComponent{
    render(){
        const student = [{
            name: 'A',
            age: 18
        },
        {
            name: 'ab',
            age: 18
        },
        {
            name: 'ARE',
            age: 10
        }
    ]
        return(
            <div>
            {
                student.map(i => {
                    return(
                    <div>
                        <h3>{i.name}</h3>
                        <p>{i.age}</p>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}


export default List

//直接export list 别的时候加花括号 from某个组件

//定义方式  =〉