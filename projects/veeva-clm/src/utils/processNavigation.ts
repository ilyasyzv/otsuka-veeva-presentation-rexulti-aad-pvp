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
    },
    {
      name: 'Clinical Profile',
      url: '/R.3.0_Clinical_profile',
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
      name: 'Otsuka Patient Support™',
      url: '/R.4.0_Patient_support',
      children: [],
    },
    {
      name: 'Appendix',
      url: '/R.5.0_Appendix',
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
    {
      name: 'ISI',
      url: '/R.6.0_ISI',
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
