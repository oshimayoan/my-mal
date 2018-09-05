// @flow strict-local

import React from 'react';
import {render} from 'react-testing-library';
import ImageFrame from '../ImageFrame';

describe('ImageFrame', () => {
  it('should render without anchor', () => {
    let {container} = render(<ImageFrame imageUri="imageUri" title="Title" />);
    expect(container).toMatchSnapshot();
  });

  it('should render with anchor', () => {
    let {getByTestId} = render(
      <ImageFrame imageUri="imageUri" title="Title" link="link" />,
    );
    let component = getByTestId('imageAnchor');
    expect(component).toMatchSnapshot();
  });
});
