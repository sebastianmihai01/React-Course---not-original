// Class for each BAR for the chart
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";

  // the month has expenses in it
  if (props.maxValue > 0) {
    // give the % by which the bar should be filled
    // +% = css style
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  //chart-bar_fill depends on our Value (and determines how much the bar will get filled)
  //.
  // by using 'style' we are setting a CSS STYLE DYNAMICALLY
  // > style only receives a JS object ( this is why we have 2 sets of {} )
  // key = not string

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
