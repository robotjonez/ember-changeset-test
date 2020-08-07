import Model, { 
    attr, belongsTo, hasMany
} from '@ember-data/model';

export default class TeamModel extends Model {
    @attr('string') name;
}
