import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MySort from './components/UI/sort/MySort';
import { Row, Col, Pagination, message } from 'antd';
import ax from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({
    sortDirection: 'asc',
    filterType: 'all',
  });

  const axios = ax.create({
    baseURL: 'http://localhost:2000',
  });

  const fetchTodos = async () => {
    // const params = { order: filter.sortDirection };

    // if (filter.filterType === 'done' || filter.filterType === 'undone')
    //   params.filterBy = filter.filterType;
    const responce = await axios.get('/todos');
    setTodos(responce.data);
  };

  const createTodo = async (todoName) => {
    try {
      await axios.post('/todo', {
        title: todoName,
        done: false,
      });
    } catch (error) {
      if (error.message === 'Request failed with status code 422') {
        message.error(
          'Validation error: Message must be at least 2 characters long name in body'
        );
      } else {
        message.error('Task with the same name exists');
      }
    }

    fetchTodos();
  };

  const removeTodo = async (id) => {
    await axios.delete(`/todo/${id}`);
    fetchTodos();
  };

  const patchTodo = async (id, editDate) => {
    await axios.patch(`/todos/${id}`, editDate);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const [page, setPage] = useState(1);

  return (
    <div className='App'>
      <h1
        style={{
          textAlign: 'center',
          paddingTop: 5,
          marginBottom: 5,
          fontSize: 45,
          fontWeight: 100,
        }}
      >
        ToDo
      </h1>
      <TodoForm createTodo={createTodo} />
      <Row>
        <Col xs={24} md={{ span: 24, offset: 0 }}>
          <MySort fetchTodos={fetchTodos} setFilter={setFilter} />
          <TodoList
            patchTodo={patchTodo}
            removeTodo={removeTodo}
            todos={todos.slice((page - 1) * 5, page * 5)}
          />
          <Pagination
            pageSize={5}
            current={page}
            onChange={(newPage) => setPage(newPage)}
            total={todos.length}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
