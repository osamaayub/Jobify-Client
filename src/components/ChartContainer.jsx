
import Wrapper from "../assets/wrappers/ChartsContainer";
import { BarChartComponent, AreaChartComponent } from "../components";
import { useState } from "react";

const ChartContainer = ({ data }) => {
  const [barchart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <button type="button" className="button" onClick={() => setBarChart(!barchart)}>

      </button>
      {barchart ? <BarChartComponent data={data} /> : <AreaChartComponent data={data} />}
    </Wrapper>
  )
}

export default ChartContainer
