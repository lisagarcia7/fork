import Chart from '../../core.js';

import * as _ from 'misskey-js/built/schemas/charts/test-intersection.js';
export const name = _.name;
export const schema = _.schema;

export const entity = Chart.schemaToEntity(name, schema);
