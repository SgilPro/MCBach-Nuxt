import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// 模擬 API 調用
const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

const createTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};

export function useTodos() {
  const queryClient = useQueryClient();

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todos: todosQuery.data,
    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    createTodo: createTodoMutation.mutate,
  };
}
