import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import { ISIModalContext, TISIModalValue } from '@/context/ISIModalContext';

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
  const { setIsiModalParams } = useContext<TISIModalValue>(ISIModalContext);

  const showISIModalOrNavigate = (): void => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);
    // Remove first and last slash
    const preparedPageName = to.replace(/^\/|\/$/g, '');

    if (!lsISIModal) {
      setIsiModalParams({
        show: true,
        pageName: preparedPageName,
      });
    } else if (process.env.NODE_ENV === 'production') {
      navigateVeeva(preparedPageName);
    } else {
      navigateLocal(changePage, preparedPageName);
      // @todo this should be removed in future it redirect to page instead of
      // showing page.
      // window.location.replace(`veeva-vision/${preparedPageName}/index.html`);
    }
  };

  const preventReload = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    showISIModalOrNavigate();
  };

  return (
    <a className={custom} href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export default Link;
