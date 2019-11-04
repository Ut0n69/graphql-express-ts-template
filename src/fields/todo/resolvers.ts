import { todoList } from '@/data';

export const getTodoById = (id: number) =>
  new Promise(resolve => {
    const [todo] = todoList.filter(todo => {
      return todo.id === id;
    });
    resolve(todo);
  });

export const getTodoList = () => Promise.resolve(todoList);

export const createTodo = ({ title }: { title: string }) => {
  const todo = {
    id: todoList.length + 1,
    title
  };
  todoList.push(todo);
  return todoList;
};

export const updateTodo = ({ id, title }: { id: number; title: string }) => {
  todoList.forEach((todo, index) => {
    if (id === todo.id) {
      todoList[index] = {
        id,
        title
      };
    }
  });

  return todoList;
};

export const deleteTodo = ({ id }: { id: number }) => {
  todoList.forEach((todo, index) => {
    if (id === todo.id) {
      todoList.splice(index, 1);
    }
  });

  return todoList;
};
