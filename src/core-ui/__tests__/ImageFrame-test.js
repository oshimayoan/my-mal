// @flow strict

import React from 'react';
import renderer from 'react-test-renderer';
import ImageFrame from '../ImageFrame';

describe('ImageFrame', () => {
  it('should render without problem', () => {
    let component = renderer.create(
      <ImageFrame imageUri="imageUri" title="Title" />,
    );
    expect(component).toMatchSnapshot();
  });
});
