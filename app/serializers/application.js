import Ember from 'ember';
import DataTableSerializerMixin from 'ember-data-table/mixins/route';

export default Ember.Route.extend(DataTableSerializerMixin, {
    modelName: 'table'
});
