import { useMemo, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MySort from './components/UI/sort/MySort';
import { Row, Col, Divider, Pagination } from 'antd';
import axios from 'axios';

// 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

function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({
    sortDirection: 'ASC',
    filterType: 'ALL',
  });

  const sortedAndFiltredArr = useMemo(() => {
    let filtredArr = [];

    switch (filter.filterType) {
      case 'DONE':
        filtredArr = todos.filter((todo) => todo.done);
        break;
      case 'UNDONE':
        filtredArr = todos.filter((todo) => !todo.done);
        break;
      default:
        filtredArr = todos;
        break;
    }

    return filtredArr.sort((a, b) => {
      if (filter.sortDirection === 'ASC')
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [todos, filter]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Получаем post из дочернего элемента
  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const selectToDo = (id) => {
    const newTodosState = [...todos];
    const selectedToDo = newTodosState.find((todo) => todo.id === id);
    selectedToDo.done = !selectedToDo.done;

    setTodos(newTodosState);
  };

  const getTodo = () => {
    axios
      .get('https://todo-api-learning.herokuapp.com/v1/tasks/9?order=asc')
      .then((responce) => {
        console.log(responce);
        setTodos(responce.data);
      });
  };

  const [page, setPage] = useState(1);

  console.log(todos);

  return (
    <div className='App'>
      <Divider
        orientation='left'
        level={1}
        style={{
          textAlign: 'center',
          paddingTop: 10,
          marginBottom: 10,
          fontSize: 45,
          fontWeight: 100,
        }}
      >
        ToDo
      </Divider>
      <TodoForm get={getTodo} create={createTodo} />
      <Row>
        <Col xs={24} md={{ span: 24, offset: 0 }}>
          <MySort setFilter={setFilter} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            selectToDo={selectToDo}
            removeTodo={removeTodo}
            todos={sortedAndFiltredArr.slice((page - 1) * 5, page * 5)}
          />
          <Pagination
            pageSize={5}
            current={page}
            onChange={(newPage) => setPage(newPage)}
            total={sortedAndFiltredArr.length}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
