import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./featured.scss";
import { productUnitsSold } from "../../datatablesource";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredTitle">Last 6 Months (Product Units Sold)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1.2}>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="quantity_sold" />
          <Tooltip />
          <Legend />
          {productUnitsSold.map((s) => (
            <Line
              dataKey="quantity_sold"
              data={s.data}
              name={s.productName}
              key={s.productName}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Featured;
