import { Fragment } from 'react/cjs/react.production.min';
import './App.css';

import Hero from './components/UI/hero/Hero';
import TodoHeader from './components/todolist/header/TodoHeader';
import NewTodo from './components/todolist/new-todo/NewTodo';
import List from './components/todolist/list/List';
import ListController from './components/todolist/footer/list-controller/ListController';
import Card from './components/UI/card/Card';

function App() {
  return (
    <Fragment>
      <Hero />
      <main className="todo-list">
        <TodoHeader />
        <NewTodo />
        <List />
        <Card className="list-footer-mobile">
          <ListController />
        </Card>
      </main>
    </Fragment>
  );
}

export default App;
