import React from 'react';
import { ParagraphWrapper } from '@atoms/Content/ParagraphWrapper';
// import { MDXProvider } from '@mdx-js/react';
// import markdown components

// assign a custom component to (some) markdown elements
// this object will serve as the props for the 'MDXProvider' that will pass it down through the component tree
const componentsMap = {
  p: ParagraphWrapper,
};

// Example : <Route path="/" component={() => <Page component={Post} />} />
// Example : <Page component={Post} />
export const Page = ({ component: Component }) => (
  <Component components={componentsMap} />
);
{
  /* <MDXProvider components={components}>
<h1>document test</h1>
</MDXProvider> */
}

export default Page;
