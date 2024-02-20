import React, { FC, useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

interface IComponentProps {}

const TodoListComponent: FC<IComponentProps> = () => {
  const { todos, loading, error, page, limit } = useTypeSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.id} - {todo.title}</div>;
      })}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => {
          return (
            <div
              key={p}
              style={{ border: p === page ? '$2px s$olid green' : '1px solid grey', padding: 10 }}
              onClick={() => setTodoPage(p)}
            >
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TodoList = TodoListComponent;
