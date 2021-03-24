import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  {
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
  }, 
  {
    id: 1,
    name: "Bugs by squad",
    vizState: {
      query: {
        "order": {
          "ReposIssues.createdat": "asc"
        },
        "measures": ["ReposIssues.count"],
        "timeDimensions": [
          {
            dimension: "ReposIssues.createdat",
            granularity: 'week',
          }
        ],
        "filters": [
          {
            "dimension": "Repos.name",
            "operator": "equals",
            "values": ["backlog"]
          },{
            "dimension": "ReposIssues.squad",
            "operator": "notEquals",
            "values": [null]
          },
          {
            "dimension": "ReposIssues.isBug",
            "operator": "equals",
            "values": ["True"]
          }
        ],
        "dimensions": ["ReposIssues.squad"]
      },
      chartType: "line"
    }
  }, 
  {
    id: 2,
    name: "Bugs by priority",
    vizState: {
      query: {
        "order": {
          "ReposIssues.createdat": "asc"
        },
        "measures": ["ReposIssues.count"],
        "timeDimensions": [
          {
            dimension: "ReposIssues.createdat",
            granularity: 'week',
          }
        ],
        "filters": [
          {
            "dimension": "Repos.name",
            "operator": "equals",
            "values": ["backlog"]
          },{
            "dimension": "ReposIssues.priority",
            "operator": "notEquals",
            "values": [null]
          },
          {
            "dimension": "ReposIssues.isBug",
            "operator": "equals",
            "values": ["True"]
          }
        ],
        "dimensions": ["ReposIssues.priority"]
      },
      chartType: "line"
    }
  }, 
  {
    id: 3,
    name: "Bugs QE created",
    vizState: {
      query: {
        "order": {
          "ReposIssues.createdat": "asc"
        },
        "measures": ["ReposIssues.count"],
        "timeDimensions": [
          {
            dimension: "ReposIssues.createdat",
            granularity: 'week',
          }
        ],
        "filters": [
          {
            "dimension": "Repos.name",
            "operator": "equals",
            "values": ["backlog"]
          },{
            "dimension": "ReposIssues.priority",
            "operator": "notEquals",
            "values": [null]
          },
          {
            "dimension": "ReposIssues.isBug",
            "operator": "equals",
            "values": ["True"]
          }
        ],
        "dimensions": ["ReposIssues.QEcreated"]
      },
      chartType: "line"
    }
  }, 
  {
    id: 4,
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
  }
];

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