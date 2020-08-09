import Model, {
  attr, belongsTo, hasMany
} from '@ember-data/model';

export default class ActiveTeamModel extends Model {
  @attr('string') name;
}
