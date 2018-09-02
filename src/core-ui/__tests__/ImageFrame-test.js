// @flow strict-local

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

  it('should render with anchor', () => {
    let component = renderer.create(
      <ImageFrame imageUri="imageUri" title="Title" link="link" />,
    );
    expect(component).toMatchSnapshot();
  });
});
