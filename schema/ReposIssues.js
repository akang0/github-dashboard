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
      drillMembers: [createdat, createdby, id, reponame, title, milestone, isBug, squad, priority]
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

    createdby: {
      sql: `${CUBE}.\`createdBy\``,
      type: `string`,
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
    },

    milestone: {
      sql: `${CUBE}.\`milestone\``,
      type: `string`
    },

    isBug: {
      sql: `${CUBE}.\`isBug\``,
      type: `boolean`
    },

    squad: {
      sql: `${CUBE}.\`squad\``,
      type: `string`
    },

    priority: {
      sql: `${CUBE}.\`priority\``,
      type: `string`
    },

    QEcreated: {
      sql: `${CUBE}.\`QEcreated\``,
      type: `string`
    },
  }
});
