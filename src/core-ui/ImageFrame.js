// @flow strict

import React from 'react';

type Props = $Exact<{
  imageUri: string,
  title: string,
}>;

export default function ImageFrame(props: Props) {
  return (
    <div
      style={{
        width: 255,
        height: 340,
        margin: 10,
        background: 'red',
        position: 'relative',
      }}
    >
      <img src={props.imageUri} alt={props.title} width="255" height="340" />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 5px',
          color: 'white',
          fontWeight: '400',
        }}
      >
        {props.title}
      </div>
    </div>
  );
}
