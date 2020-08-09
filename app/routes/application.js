import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Changeset } from 'ember-changeset';

export default class ApplicationRoute extends Route {
    @service store

    model(){
        let pushData = {
          activeTeam: [{
            id: 1,
            name: 'bar'
          }],
            teams: [
                {
                    id: 1,
                    name: 'bar'
                },
                {
                    id: 2,
                    name: 'baz'
                },
                {
                    id: 3,
                    name: 'buz'
                }
            ],
            people: [
                {
                    id: 1,
                    name: 'bob'
                }
            ],
            projects:[
                {
                    id: 1,
                    author: 1,
                    projectName: 'foo',
                    teams: [1,2,3],
                    activeTeam: [1]
                }
            ]
        }
        this.store.pushPayload(pushData);
        return Changeset(this.store.peekRecord('project', 1));
    }
}
