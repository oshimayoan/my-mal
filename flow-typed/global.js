// @flow strict-local

import * as React from 'react';

declare type ReactNode = React.Node;
declare type ReactEl = React.Element<*>;

declare type Window = {
  location: {
    href: string,
    protocol: string,
    host: string,
    hostname: string,
    port: string,
    pathname: string,
    search: string,
    hash: string,
    username: string,
    password: string,
    +origin: string,
    assign: (url: string) => void,
    reload: (forcedReload?: boolean) => void,
    replace: (url: string) => void,
    toString: () => string,
  },
  addEventListener: (
    type: string,
    listener: (window?: Window, ev: *) => *,
    options?: {[key: string]: mixed},
  ) => void,
};
