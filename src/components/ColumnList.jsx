import Column from "./Column";

const ColumnList = ({tasks}) => {
  return (
    <>
      <div className="task-container">
        {tasks.map((task, index) => (
          <Column task={task} key={index} columnPosition={index} />
        ))}
      </div>
    </>
  );
};

export default ColumnList;
