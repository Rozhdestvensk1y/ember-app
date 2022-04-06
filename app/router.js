import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('timepath-test-task-response-e',
  { path: 'timepath-test-task-response-e/:id' });
  this.route('timepath-test-task-response-e.new',
  { path: 'timepath-test-task-response-e/new' });
});

Router.map(function () {
  this.route('test-table-e',
  { path: 'test-table-e'});
})
export default Router;
