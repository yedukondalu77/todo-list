import { Button, Card, Group, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import Todo from './Todo';

const Todolist = () => {
  const [todos, setTodo] = useState([]);
  const [task, setTask] = useState('');

  const changehandler = (e) => {
    setTask(e.target.value);
  };

  const formhandler = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTodos = [...todos, task];
      setTodo(newTodos);
      setTask('');
    }
    else if(task.length===0){
      alert('enter a task')
    }
  };

  const deletehandler = (indexValue) => {
    const newTodos = todos.filter((_, index) => index !== indexValue);
    setTodo(newTodos);
  };

  return (
    <div>
      <Card shadow="sm" padding="md" radius="md" withBorder mt='lg'  bg={'lavender'}
      className='textinput'>
        <form onSubmit={formhandler}>
          <Group spacing="lg">
          <TextInput
            type="text"
            placeholder="Enter a Task"
            value={task}
            onChange={changehandler}
            // style={{width:'70%'}}
            
          />
          <Button type="submit">ADD</Button>
          </Group>
        </form>
      </Card>
      <Todo todolist={todos} deletehandler={deletehandler} />
    </div>
  );
};

export default Todolist;
