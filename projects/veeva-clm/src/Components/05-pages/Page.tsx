import React from 'react';
import { ParagraphWrapper } from '@atoms/Content/ParagraphWrapper';
import Background, {
  TBackgroundType,
} from '@/Components/03-organisms/Background/Background';

type TPage = {
  component: React.ReactNode;
  background: TBackgroundType;
};

// assign a custom component to (some) markdown elements
// this object will serve as the props for the 'MDXProvider' that will pass it down through the component tree
const componentsMap = {
  p: ParagraphWrapper,
};

// Example : <Route path="/" component={() => <Page component={Post} />} />
// Example : <Page component={Post} />
export const Page = ({ component, background = 'default' }: TPage) => {
  const Component = component;

  return (
    <Background type={background}>
      <Component components={componentsMap} />
    </Background>
  );
};

export default Page;
