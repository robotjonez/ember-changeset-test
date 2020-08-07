import Model, { 
    attr, belongsTo, hasMany
} from '@ember-data/model';

export default class ProjectModel extends Model {
    @attr('string') projectName;
    @belongsTo('person') author;
    @hasMany('team') teams;
}
