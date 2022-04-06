import DS from 'ember-data';

export default DS.Model.extend({
    id: DS.attr('string'),
    Name: DS.attr('string'),
    Author: DS.attr('string'),
    Pages: DS.attr('string')
});