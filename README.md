# Practice Assignment 1 – Filter & Search Todos

## What I implemented
- **Backend (`todoController.js`)**: `getTodos` reads a `done` query param
  from `req.query`, builds a filter object (`{ done: true/false }`), and
  passes it to `Todo.find(filter)`. With no `done` param the filter stays
  `{}`, so `GET /api/todos` still returns everything.
- **Frontend (`api/todos.js`)**: `fetchTodos` now takes an optional `done`
  argument and sends it as a query param via axios's `params` option.
- **Frontend (`App.jsx`)**: added `filter` state (`'all' | 'active' | 'done'`);
  a `useEffect` keyed on `filter` re-fetches todos whenever it changes.
- **Frontend (`TodoList.jsx`)**: added All / Active / Done buttons that call
  `onFilterChange`.

## Trade-off
Filtering happens server-side (re-fetch with a query param) instead of
client-side (filtering the already-loaded array). Server-side means less
data over the wire and scales better if pagination is added later, at the
cost of a network round trip on every filter change.
