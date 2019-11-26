import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Should create a movie \"rambo\" and add Silver Stalone as an actor', () => {
    const service = new MovieService('The Expendables');
    service.addCastMember('Silvester Stalone');
    service.addCastMember('Chuck Norris');

    expect(service.getCastMembers()).toEqual(['Silvester Stalone', 'Chuck Norris']);
  });

  it('Should not duplicate any member on cast array', () => {
    const service = new MovieService('The Expendables');
    service.addCastMember('Silvester Stalone');
    service.addCastMember('Chuck Norris');
    service.addCastMember('Chuck Norris');

    expect(service.getCastMembers()).toEqual(['Silvester Stalone', 'Chuck Norris']);
    expect(service.getCastMembers().length).toBe(2);
  });
});
