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
      url: '/A.1.0_Executive_summary',
    },
    {
      name: 'Schizophrenia & Bipolar I Disorder Overview',
      url: '/A.2.1.1_S_Overview',
      children: [
        {
          name: 'Schizophrenia Overview',
          url: '/A.2.1.1_S_Overview',
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
          ],
        },
        {
          name: 'Bipolar I Overview',
          url: '/A.2.2.1_B_Overview',
          children: [
            {
              name: '',
              url: '/A.2.2.1_B_Overview',
            },
            {
              name: '',
              url: '/A.2.2.2_B_Overview',
            },
            {
              name: '',
              url: '/A.2.2.3_B_Overview',
            },
          ],
        },
        {
          name: 'LAIs',
          url: '/A.2.3.1_LAIs',
          children: [
            {
              name: '',
              url: '/A.2.3.1_LAIs',
            },
            {
              name: '',
              url: '/A.2.3.2_LAIs',
            },
          ],
        },
        {
          name: 'Summary',
          url: '/A.2.4_Summary',
        },
      ],
    },
    {
      name: 'Clinical Profile for ABILIFY ASIMTUFII®',
      url: '/A.3.1.1_Overview',
      children: [
        {
          name: 'Overview',
          url: '/A.3.1.1_Overview',
        },
        {
          name: 'PK Study',
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
          name: 'Safety Data',
          url: '/A.3.3.1_Safety',
          children: [
            {
              name: '',
              url: '/A.3.3.1_Safety',
            },
            {
              name: '',
              url: '/A.3.3.2_Safety',
            },
            {
              name: '',
              url: '/A.3.3.3_Safety',
            },
            {
              name: '',
              url: '/A.3.3.4_Safety',
            },
          ],
        },
        {
          name: 'Dosing & Administration',
          url: '/A.3.4_Dosing',
        },
        {
          name: 'ABILIFY MAINTENA® Pivotal Studies',
          url: '/A.3.5.1_Additional',
          children: [
            {
              name: '',
              url: '/A.3.5.1_Additional',
            },
            {
              name: '',
              url: '/A.3.5.2_Additional',
            },
            {
              name: '',
              url: '/A.3.5.3_Additional',
            },
            {
              name: '',
              url: '/A.3.5.4_Additional',
            },
            {
              name: '',
              url: '/A.3.5.5_Additional',
            },
          ],
        },
      ],
    },
    {
      name: 'Economic Value of ABILIFY ASIMTUFII®',
      url: '/A.4.0_Economic_value',
      children: [],
    },
    {
      name: 'Otsuka Patient Support™',
      url: '/A.5.1_Patients_support_providers',
      //   children: [
      //     {
      //       name: '',
      //       url: '/A.5.1_Patients_support_providers',
      //       children: [
      //         {
      //           name: '',
      //           url: '/A.5.1_Patients_support_providers',
      //         },
      //         {
      //           name: '',
      //           url: '/A.5.2_Patients_support_providers',
      //         },
      //       ],
      //     },
      //   ],
    },
    // {
    //   name: 'Appendix',
    //   url: '/A.6.1.1_Appendix_Safety',
    //   children: [
    //     {
    //       name: 'ABILIFY MAINTENA Real-world Evidence',
    //       url: '/A.6.1.1_Appendix_Safety',
    //       children: [
    //         {
    //           name: '',
    //           url: '/A.6.1.1_Appendix_Safety',
    //         },
    //         {
    //           name: '',
    //           url: '/A.6.1.2_Appendix_Safety',
    //         },
    //       ],
    //     },
    //     {
    //       name: 'MOA',
    //       url: '/A.6.2_Apendix_MOA',
    //     },
    //     {
    //       name: 'ABILIFY MAINTENA Safety Profile',
    //       url: '/A.6.3.X_Appendix_Safety',
    //     },
    //   ],
    // },
  ],
};

export const bottomMenu: IMenu = {
  data: [
    {
      name: 'ISI',
      url: '/A.7.0_ISI',
    },
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
