import './App.css';
import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import { Box, Center, Text, CheckboxGroup } from '@chakra-ui/react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3010/tasks");
    setTasks(res.data);
  };

  // 初回レンダリング時にfetch関数を実行
  useEffect(() => {
    fetch();
  }, []);

  const toggleIsDone = (index) => {
    const tasksCopy = [...tasks];
    const isDone = tasksCopy[index].isDone;
    tasksCopy[index].isDone = !isDone;
    setTasks(tasksCopy);
  };

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">
              タスク一覧
            </Text>
          </Box>
          <CheckboxGroup>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  index={index}
                  name={task.name}
                  isDone={task.isDone}
                  toggleIsDone={toggleIsDone}
                />
              );
            })}
          </CheckboxGroup>
        </Box>
      </Center>
    </Box>
  );
};

export default App;
