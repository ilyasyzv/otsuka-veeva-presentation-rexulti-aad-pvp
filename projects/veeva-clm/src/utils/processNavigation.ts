export interface ILink {
  name: string;
  url: string;
  slide?: boolean;
  children?: ILink[];
}

interface IMenu {
  type?: string;
  data: ILink[];
}

export const mainMenu: IMenu = {
  type: 'main',
  data: [
    {
      name: 'Executive Summary',
      url: '/R.1.0_Executive_summary',
    },
    {
      name: 'AAD Overview',
      url: '/R.2.1_AAD_Overview',
      children: [
        {
          name: '',
          url: '/R.2.1_AAD_Overview',
          children: [
            {
              name: '',
              url: '/R.2.1_AAD_Overview',
            },
            {
              name: '',
              url: '/R.2.2_AAD_Overview',
            },
            {
              name: '',
              url: '/R.2.3_AAD_Overview',
            },
            {
              name: '',
              url: '/R.2.4_AAD_Overview',
            },
            {
              name: '',
              url: '/R.2.5_AAD_Overview',
            },
            {
              name: '',
              url: '/R.2.6_AAD_Overview',
            },
            {
              name: '',
              url: '/R.2.7_AAD_Overview',
            },
          ],
        },
      ],
    },
    {
      name: 'Clinical Profile',
      url: '/R.3.0_Clinical_profile',
      children: [
        {
          name: 'Mechanism of Action',
          url: '/R.3.1_Mechanism_of_action',
        },
        {
          name: 'Clinical Studies Overview',
          url: '/R.3.2_Clinical_studies_overview',
        },
        {
          name: 'Study 6 Efficacy Data',
          url: '/R.3.3.1_Study_6',
          children: [
            {
              name: '',
              url: '/R.3.3.1_Study_6',
            },
            {
              name: '',
              url: '/R.3.3.2_Study_6',
            },
            {
              name: '',
              url: '/R.3.3.3_Study_6',
            },
          ],
        },
        {
          name: 'Study 7 Efficacy Data',
          url: '/R.3.4.1_Study_7',
          children: [
            {
              name: '',
              url: '/R.3.4.1_Study_7',
            },
            {
              name: '',
              url: '/R.3.4.2_Study_7',
            },
            {
              name: '',
              url: '/R.3.4.3_Study_7',
            },
          ],
        },
        {
          name: 'Clinical Safety Profile',
          url: '/R.3.5_Study_6&7_safety',
        },
        {
          name: 'Dosing & Administration',
          url: '/R.3.6_Dosing',
        },
        {
          name: 'Summary',
          url: '/R.3.7_Summary',
        },
      ],
    },
    {
      name: 'Otsuka Patient Support™',
      url: '/R.4.0_Patient_support',
    },
    {
      name: 'Appendix',
      url: '/R.5.0_Appendix',
    },
    {
      name: 'ISI',
      url: '/R.6.0_ISI',
    },
  ],
};

export const bottomMenu: IMenu = {
  data: [
    {
      name: 'PI',
      url: '#',
      slide: true,
      children: [
        {
          name: 'ABILIFY ASIMTUFII® (aripiprazole) Prescribing Information',
          url: '#',
        },
        {
          name: 'ABILIFY MAINTENA® (aripiprazole) Prescribing Information',
          url: '#',
        },
      ],
    },
  ],
};

interface parentMenu {
  parent: string | false;
  subMenu: ILink[] | false;
}

// Search path in menu tree.
export const findPathInMenu = (
  currentPage: string,
  menu: ILink[],
): parentMenu => {
  const filterLink = (link: ILink): boolean => {
    if (link?.url?.includes(currentPage) || false) {
      return true;
    }
    if (link?.children?.length > 0 || false) {
      const found = link.children.filter(filterLink);
      return found.length > 0;
    }
    return false;
  };

  const subMenu = menu.find(filterLink);
  return { parent: subMenu?.url || false, subMenu: subMenu?.children || false };
};

// Filter appropriate layer of menu for the current path.
export const findSubMenu = (
  currentPage: string,
  menu: ILink[],
  layer: number,
): ILink[] | false => {
  const { subMenu } = findPathInMenu(currentPage, menu);
  if (subMenu === false || layer <= 0) {
    return subMenu;
  }
  return findSubMenu(currentPage, subMenu, layer - 1);
};

// Transform menu to single layer.
export const flapMenu = (links: ILink[], layer: number): ILink[] => {
  return links.flatMap((elem: ILink): ILink[] => {
    if ((elem?.children?.length > 0 || false) && layer > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const subLinks: ILink[] = [
        { name: elem.name, url: elem.url },
        ...elem.children,
      ];
      if (layer > 1) {
        return flapMenu(subLinks, layer - 1);
      }
      return subLinks;
    }
    return [{ name: elem.name, url: elem.url }];
  });
};

// Rebuild menu tree into flat array. In-order traversal of the tree.
export const flatLinksList = (links: IMenu, currentPage: string) => {
  // Flat links Object to single layer structure.
  let paths: ILink[] = flapMenu(links.data, 2);
  // Remove duplicates from different layers.
  paths = paths.reduce((accumulator: ILink[], current: ILink) => {
    if (!accumulator.find((item) => item.url === current.url)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  // Push Homepage link.
  paths.unshift({ name: 'Homepage', url: '/A.0.Home' });
  let currentPosition = paths.findIndex(
    (elem) => elem?.url?.includes(currentPage) || false,
  );
  currentPosition = currentPosition === -1 ? 0 : currentPosition;
  return { currentPosition, paths };
};
