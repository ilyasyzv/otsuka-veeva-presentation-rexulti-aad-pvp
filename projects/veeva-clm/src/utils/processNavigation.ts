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
      url: '/A.2.1.1_S_Overview',
      children: [
        {
          name: '',
          url: '',
          children: [
            {
              name: '',
              url: '/A.2.1.1_S_Overview',
            },
            {
              name: '',
              url: '/A.2.1.2_S_Overview',
            },
            {
              name: '',
              url: '/A.2.1.3_S_Overview',
            },
            {
              name: '',
              url: '/A.2.1.3_S_Overview',
            },
            {
              name: '',
              url: '/A.2.1.3_S_Overview',
            },
            {
              name: '',
              url: '/A.2.1.3_S_Overview',
            },
            {
              name: '',
              url: '/A.2.1.3_S_Overview',
            },
          ],
        },
      ],
    },
    {
      name: 'Clinical Profile',
      url: '/A.3.1.1_Overview',
      children: [
        {
          name: 'Mechanism of Action',
          url: '/A.3.1.1_Overview',
        },
        {
          name: 'Clinical Studies Overview',
          url: '/A.3.1.1_Overview',
        },
        {
          name: 'Study 6 Efficacy Data',
          url: '/A.3.2.1_Efficacy',
          children: [
            {
              name: '',
              url: '/A.3.2.1_Efficacy',
            },
            {
              name: '',
              url: '/A.3.2.2_Efficacy',
            },
            {
              name: '',
              url: '/A.3.2.3_Efficacy',
            },
          ],
        },
        {
          name: 'Study 7 Efficacy Data',
          url: '/A.3.2.1_Efficacy',
          children: [
            {
              name: '',
              url: '/A.3.2.1_Efficacy',
            },
            {
              name: '',
              url: '/A.3.2.2_Efficacy',
            },
            {
              name: '',
              url: '/A.3.2.3_Efficacy',
            },
          ],
        },
        {
          name: 'Clinical Safety Profile',
          url: '/A.3.1.1_Overview',
        },
        {
          name: 'Dosing & Administration',
          url: '/A.3.4_Dosing',
        },
        {
          name: 'Summary',
          url: '/A.3.5.1_Additional',
        },
      ],
    },
    {
      name: 'Otsuka Patient Support™',
      url: '/A.4.0_Economic_value',
    },
    {
      name: 'Appendix',
      url: '/A.6.1.1_Appendix_Safety',
    },
    {
      name: 'ISI',
      url: '/A.7.0_ISI',
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
