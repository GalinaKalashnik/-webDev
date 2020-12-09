import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, completeTask, changeFilter } from "../../actions/actionCreator";

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';
import tasks from "../../reducers/tasks";

class ToDo extends Component {

  state = {
    taskText: ''
  }

  handleInputCahnge = ( { target: { value } } ) => {
    this.setState({
      taskText: value,
    })
  }

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if(taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;
      addTask((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: ''
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(tasks => !tasks.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const tasksCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputCahnge} value={taskText} />
        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist && <Footer amount={tasksCounter} activeFilter={filters} changeFilter={changeFilter} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTask, removeTask, completeTask, changeFilter })(ToDo);