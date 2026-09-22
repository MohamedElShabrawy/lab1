// TodoList.jsx
import TodoItem from './TodoItem';

export default function TodoList({ todos, loading, filter, onFilterChange, onToggle, onRename, onRemove }) {
  if (loading) return <p className="todo-loading">Loading tasks…</p>;

  const doneCount = todos.filter(t => t.done).length;

  return (
    <>
      <div className="todo-filters">
        {['all', 'active', 'done'].map(f => (
          <button
            key={f}
            className={filter === f ? 'filter-btn active' : 'filter-btn'}
            onClick={() => onFilterChange(f)}
          >
            {f === 'all' ? 'All' : f === 'active' ? 'Active' : 'Done'}
          </button>
        ))}
      </div>

      {todos.length === 0 ? (
        <p className="todo-empty">No tasks yet — add one above.</p>
      ) : (
        <>
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={onToggle}
                onRename={onRename}
                onRemove={onRemove}
              />
            ))}
          </ul>
          <div className="receipt-footer">
            <span>{todos.length} item{todos.length === 1 ? '' : 's'}</span>
            <span>{doneCount} of {todos.length} done</span>
          </div>
        </>
      )}
    </>
  );
}
