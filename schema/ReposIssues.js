cube(`ReposIssues`, {
  sql: `SELECT * FROM repos_issues`,
  
  joins: {
    Repos: {
      sql: `${CUBE}.\`repoId\` = ${Repos}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [createdat, id, reponame, title]
    },
    
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  
  dimensions: {
    body: {
      sql: `body`,
      type: `string`
    },
    
    closedat: {
      sql: `${CUBE}.\`closedAt\``,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    reponame: {
      sql: `${CUBE}.\`repoName\``,
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
