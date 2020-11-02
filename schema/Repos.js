cube(`Repos`, {
  sql: `SELECT * FROM github.repos`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      shown: true
    },
    name: {
      sql: `name`,
      type: `string`
    },
    
    organization: {
      sql: `organization`,
      type: `string`
    }
  }
});
