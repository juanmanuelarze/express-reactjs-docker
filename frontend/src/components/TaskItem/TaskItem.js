import './styles.css';

function TaskItem({task, showTask}) {

  const completedTask = task.state === 1 ? "task-completed" : "";

  return (
    <div onClick={()=>showTask(task)} className="task-container">
      <div className={"task-box " + completedTask}>
        <div className="task-number">Task #{task.id}</div>
        <div className="task-title">{task.title}</div>
      </div>
    </div>
  );

}

export default TaskItem;
