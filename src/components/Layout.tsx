import { Component, JSXElement } from 'solid-js';

interface Props {
  children: JSXElement;
  title: JSXElement;
  titleAction?: JSXElement;
}

const Layout: Component<Props> = ({ children, title, titleAction }) => {
  return (
    <div class="min-h-screen max-w-7xl mx-auto p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl sm:text-3xl font-semibold dark:text-white">
          {title}
        </h1>
        {titleAction}
      </div>
      <div class="relative flex-auto">{children}</div>
    </div>
  );
};

export default Layout;
