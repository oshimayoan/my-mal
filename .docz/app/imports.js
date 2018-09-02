export const imports = {
  'showcase/ImageFrame.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "showcase-image-frame" */ 'showcase/ImageFrame.mdx'),
}
