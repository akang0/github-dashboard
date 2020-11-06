cube(`ReposPulls`, {
  sql: `SELECT * FROM github.repos_pulls`,
  
  joins: {
    Repos: {
      relationship: `belongsTo`,
      sql: `${ReposPulls}.repo_id = ${Repos}.id`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [createdAt, id, name, repoName, title]
    }
  },
  
  dimensions: {
    repoId: {
      sql: `repo_id`,
      type: `number`,
      primaryKey: true,
      shown: true
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
    
    name: {
      sql: `name`,
      type: `string`
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
