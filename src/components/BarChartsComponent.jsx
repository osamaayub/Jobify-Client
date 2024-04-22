
import {BarChart, ResponsiveContainer,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts";
const BarChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{top:50}}>
    <XAxis dataKey="date"/>
    <YAxis allowDecimals={false}/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
        <BarChart dataKey="count" fill="#2cb1bc" barSize={75} />
    </BarChart>

    </ResponsiveContainer>
  )
}

export default BarChartComponent
