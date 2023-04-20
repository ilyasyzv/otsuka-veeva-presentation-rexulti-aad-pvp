import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import { ISIModalContext } from '@/context/ISIModalContext';

const lsISIModalKey = 'isi_modal';

export const navigateLocal = (
  changePage: (page: string) => void,
  preparedPageName: string,
): void => {
  window.history.pushState({}, '', preparedPageName);

  const navigationEvent = new PopStateEvent('navigate');
  window.dispatchEvent(navigationEvent);

  changePage(preparedPageName);
};

export const navigateVeeva = (preparedPageName: string): void => {
  if (preparedPageName === 'previous') {
    window.com.veeva.clm.prevSlide();
  } else if (preparedPageName === 'next') {
    window.com.veeva.clm.nextSlide();
  } else {
    window.com.veeva.clm.gotoSlide(`${preparedPageName}.zip`, '');
  }
};

interface Props {
  custom?: string;
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<Props> = ({ custom, to, children }) => {
  const { changePage } = useContext(PageContext);
  const { showModalHandler } = useContext(ISIModalContext);

  const showISIModal = (): void => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);
    console.log(!lsISIModal);
    if (!lsISIModal) {
      showModalHandler(true);
    }
  };

  const preventReload = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();

    showISIModal();

    // Remove first and last slash
    const preparedPageName = to.replace(/^\/|\/$/g, '');

    if (process.env.NODE_ENV === 'production') {
      navigateVeeva(preparedPageName);
    } else {
      navigateLocal(changePage, preparedPageName);
      // @todo this should be removed in future it redirect to page instead of
      // showing page.
      // window.location.replace(`veeva-vision/${preparedPageName}/index.html`);
    }
  };

  return (
    <a className={custom} href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export default Link;
