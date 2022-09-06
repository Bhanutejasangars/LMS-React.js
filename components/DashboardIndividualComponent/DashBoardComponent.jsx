import "./DashBoardComponent.css";

const DashBoardComponent = (item) => {
  return (
    <>
      <div className="dashboard_card">
        <div className="card_icon">{item.item.icon}</div>
        <div className="card_count">{item.item.Count}</div>
        <div className="card_name">{item.item.title}</div>
      </div>
    </>
  );
};

export default DashBoardComponent;
