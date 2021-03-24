import React from 'react';
import PropTypes from 'prop-types';
import { useCubeQuery } from '@cubejs-client/react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Brush, Area, AreaChart, CartesianGrid, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CartesianChart = ({
  resultSet,
  children,
  ChartComponent
}) => <ResponsiveContainer width="100%" height={650}>
    <ChartComponent data={resultSet.chartPivot()}>
      <XAxis dataKey="x" />
      <YAxis type="number" domain={[0, 30]} tickCount={7} tickSize={5} minTickGap={1} />
      <CartesianGrid />
      {children}
      <Legend />
      <Tooltip />
    </ChartComponent>
  </ResponsiveContainer>;

const colors = ['#FF6492', '#141446', '#7A77FF'];

const getRandomColor = () => {return '#'+Math.floor(Math.random()*16777215).toString(16)}

const stackedChartData = resultSet => {
  const data = resultSet.pivot().map(({
    xValues,
    yValuesArray
  }) => yValuesArray.map(([yValues, m]) => ({
    x: resultSet.axisValuesString(xValues, ', '),
    color: resultSet.axisValuesString(yValues, ', '),
    measure: m && Number.parseFloat(m)
  }))).reduce((a, b) => a.concat(b), []);
  return data;
};

const TypeToChartComponent = {
  line: ({
    resultSet
  }) => { 
    return <CartesianChart resultSet={resultSet} ChartComponent={LineChart}>
      {resultSet.seriesNames().map((series, i) => <Line key={series.key} stackId="a" dataKey={series.key} name={series.yValues[0]} stroke={getRandomColor()} />)}
      <Brush dataKey="x">
        <AreaChart>
          <CartesianGrid />
          <Area dataKey="price" stroke="#ff7300" fill="#ff7300" dot={false} />
        </AreaChart>
      </Brush>
    </CartesianChart>},
  pie: ({
    resultSet
  }) => <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie isAnimationActive={false} data={resultSet.chartPivot()} nameKey="x" dataKey={resultSet.seriesNames()[0].key} fill="#8884d8">
          {resultSet.chartPivot().map((e, index) => <Cell key={index} fill={colors[index % colors.length]} />)}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>,
  number: ({
    resultSet
  }) => <Typography variant="h4" style={{
    textAlign: 'center'
  }}>
      {resultSet.seriesNames().map(s => resultSet.totalRow()[s.key])}
    </Typography>,
  table: ({
    resultSet
  }) => <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {resultSet.tableColumns().map(c => <TableCell key={c.key}>{c.title}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {resultSet.tablePivot().map((row, index) => <TableRow key={index}>
            {resultSet.tableColumns().map(c => <TableCell key={c.key}>{row[c.key]}</TableCell>)}
          </TableRow>)}
      </TableBody>
    </Table>
};
const TypeToMemoChartComponent = Object.keys(TypeToChartComponent).map(key => ({
  [key]: React.memo(TypeToChartComponent[key])
})).reduce((a, b) => ({ ...a,
  ...b
}));

const renderChart = Component => ({
  resultSet,
  error,
  ...props
}) => resultSet && <Component resultSet={resultSet} {...props} /> || error && error.toString() || <CircularProgress />;

const ChartRenderer = ({
  vizState
}) => {
  const {
    query,
    chartType,
    ...options
  } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  const renderProps = useCubeQuery(query);
  return component && renderChart(component)({ ...options,
    ...renderProps
  });
};

ChartRenderer.propTypes = {
  vizState: PropTypes.object,
  cubejsApi: PropTypes.object
};
ChartRenderer.defaultProps = {
  vizState: {},
  cubejsApi: null
};
export default ChartRenderer;