cube(`ReposIssues`, {
  sql: `SELECT * FROM github.repos_issues`,
  
  joins: {
    Repos: {
      sql: `${CUBE}.repo_id = ${Repos}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [createdAt, id, repoName, title]
    },
    
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  
  dimensions: {
    repoId: {
      sql: `repo_id`,
      type: `number`,
      primaryKey: true,
      shown: true
    },
    body: {
      sql: `body`,
      type: `string`
    },
    
    closedAt: {
      sql: `closed_at`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    repoName: {
      sql: `repo_name`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    }
  }
});
