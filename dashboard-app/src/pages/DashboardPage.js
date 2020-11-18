import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [{
  id: 0,
  name: "Pull Request by Repository",
  vizState: {
    query: {
      "measures": ["ReposPulls.count"],
      "timeDimensions": [],
      "order": {
        "ReposPulls.count": "desc"
      },
      "dimensions": ["Repos.name", "Repos.type", "Repos.avgPullAge"]
    },
    chartType: "table"
  }
}, {
  id: 1,
  name: "Total Issues Created Trend",
  vizState: {
    query: {
      "order": {
        "ReposIssues.createdat": "asc"
      },
      "measures": ["ReposIssues.count"],
      "timeDimensions": [],
      "filters": [{
        "dimension": "Repos.name",
        "operator": "equals",
        "values": ["backlog"]
      }],
      "dimensions": ["ReposIssues.createdat"]
    },
    chartType: "line"
  }
}, {
  id: 2,
  name: "Repository Types",
  vizState: {
    query: {
      "measures": [
        "Repos.count"
      ],
      "timeDimensions": [],
      "order": {
        "Repos.count": "desc"
      },
      "dimensions": [
        "Repos.type"
      ],
      "filters": []
    }
    ,
    chartType: "pie"
  }
}];

const DashboardPage = () => {
  const dashboardItem = item => <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>;

  const Empty = () => <div style={{
    textAlign: 'center',
    padding: 12
  }}>
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>;

  return DashboardItems.length ? <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard> : <Empty />;
};

export default DashboardPage;