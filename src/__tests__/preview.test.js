import React from 'react';
import { shallow } from 'enzyme';

import Preview from '../components/preview';

describe('Render a preview screen of themes', () => {
  it('should render a preview', function () {
    const props = {
      location: {
        state: {
          theme: {
            created: "2018-01-19T21:58:28.528Z",
            description: "A theme ready for action, with a hero cover image and a sidebar.",
            guid: "e11ca530-fd63-11e7-a5be-e53eb9f02238",
            handle: "sidekick",
            last_updated: "2018-01-19T21:58:31.792Z",
            main: "73ac0428-8400-4202-abde-7ca1bf46ad09",
            owner: "_default",
            title: "Sidekick",
            type: "theme",
          }
        }
      }
    };
    const wrapper = shallow(
      <Preview { ...props } />
    );
    expect(wrapper).toMatchSnapshot();
  });
});