cube(`Repos`, {
  sql: `SELECT * FROM repos`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    organization: {
      sql: `organization`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    avgPullAge:{
      sql:`avgAge`,
      type: `number`
    }
  }
});
