import React, { Component } from 'react';
import Item from './Item/Item'
import Input from './Input/Input'
import './App.css';

class App extends Component {
  state = {
    list: [
      {
        title: 'Make to-do app',
        completed: false,
        priority: 'Medium',
        edit: false }
    ],
    new: {
      title: '',
      completed: false,
      priority: 'Medium',
      edit: false
    },
  }

  handleItemName = (event) => {
    const newName = {...this.state.new}
    newName.title = event.target.value
    this.setState( {
      new: newName
    } )
  }

  handleAddItem = () => {
    const list = [...this.state.list]
    const item = {...this.state.new}
    if (item.title.length >= 1){
      list.push(item)
      this.setState( {
        list: list,
        new: {
          title: '',
          completed: false,
          priority: 'Medium',
          edit: false
        },
      } )
    }
  }

  handleEnterKey = (event) => {
    if(event.keyCode === 13){
      document.getElementById('addItem').click()
    }
  }

  handleEditTitle = (index) => {
    const list = [...this.state.list]
    const edit = list[index].edit
    list[index].edit = !edit
    this.setState( {
      list: list
    } )
  }

  handleChangeName = (event, index) => {
    const list = [...this.state.list]
    const item = list[index]
    item.title = event.target.value
    this.setState( {
      list: list
    } )
  }

  handleUpdateName = (event, index) => {
    if(event.keyCode === 13 && event.target.value.length >= 1){
      this.handleEditTitle(index)
    }
  }

  handleDeleteItem = (index) => {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState( {
      list: list
    })
  }

  handleCompleteItem = (index) => {
    const list = [...this.state.list]
    const checkbox = list[index].completed
    list[index].completed = !checkbox
    this.setState({ list: list })
  }

  handleChangePriority = (event, index) => {
    const list = [...this.state.list]
    const item = list[index]
    item.priority = event.target.value
    this.setState({ list: list })
  }

  render() {
    let showList = null
    let completed = ( <div>No tasks completed</div> )

    if (this.state.list.length >= 1){
      showList = (
        <div>
          {this.state.list.map((item, index) => {
            if (item.completed === false){
              return <Item
                key={index}
                isEditingTitle={item.edit}
                change={(event) => this.handleChangeName(event, index)}
                update={(event) => this.handleUpdateName(event, index)}
                edit={() => this.handleEditTitle(index)}
                checked={item.completed}
                name={item.title}
                delete={() => this.handleDeleteItem(index)}
                priority={item.priority}
                changePriority={(event) => this.handleChangePriority(event, index)}
                complete={() => this.handleCompleteItem(index)}
              />
            }
            return null
          })}
        </div>
      )
    }

    if (this.state.list.find((item) => {
      return item.completed === true
    })) {
      completed = (
        <div>
          {this.state.list.map((item, index) => {
            if (item.completed === true){
              return <Item
                key={index}
                isEditingTitle={item.edit}
                change={(event) => this.handleChangeName(event, index)}
                update={(event) => this.handleUpdateName(event, index)}
                edit={() => this.handleEditTitle(index)}
                checked={item.completed}
                name={item.title}
                delete={() => this.handleDeleteItem(index)}
                priority={item.priority}
                changePriority={(event) => this.handleChangePriority(event, index)}
                complete={() => this.handleCompleteItem(index)}
              />
            }
            return null
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h2>To-Do List App</h2>
        <Input
          add={this.handleAddItem}
          enter={(event) => this.handleEnterKey(event)}
          name={this.state.new.title}
          change={(event) => this.handleItemName(event)}
        />
        {showList}
        <h3>Completed Items:</h3>
        {completed}
      </div>
    );
  }
}

export default App;
