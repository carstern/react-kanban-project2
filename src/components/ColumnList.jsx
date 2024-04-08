import Column from "./Column";

const ColumnList = ({tasks}) => {
  return (
    <>
      <div className="task-container">
        {tasks.map((task, columnId) => (
          <Column task={task} key={columnId} columnPosition={columnId} />
        ))}
      </div>
    </>
  );
};

export default ColumnList;
