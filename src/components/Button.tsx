import { Component, JSXElement } from 'solid-js';

interface Props {
  children: JSXElement;
  onClick: () => void;
}

const Button: Component<Props> = ({ children, onClick }) => {
  return (
    <button
      class="py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
