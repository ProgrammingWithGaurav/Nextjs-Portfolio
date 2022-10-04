import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import PageInfo from './PageInfo';
import experience from './experience';
import skill from './skill';
import project from './project';
import social from './social';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([skill, PageInfo, experience, social, project]),
})
