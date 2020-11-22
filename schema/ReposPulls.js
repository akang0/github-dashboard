cube(`ReposPulls`, {
  sql: `SELECT * FROM repos_pulls`,
  
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
    }
  },
  
  dimensions: {
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
