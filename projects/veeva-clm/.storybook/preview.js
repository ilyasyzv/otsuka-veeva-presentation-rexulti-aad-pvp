const customViewports = {
  otsuka_mobile: {
    name: 'Otsuka Mobile | 360px',
    styles: {
      width: '360px',
      height: '720px',
    },
  },
  otsuka_tablet: {
    name: 'Otsuka Tablet | 750px',
    styles: {
      width: '750px',
      height: '801px',
    },
  },
  otsuka_desktop: {
    name: 'Otsuka Desktop | 1440px',
    styles: {
      width: '1440px',
      height: '900',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
