import { Component, For } from 'solid-js';

import { songs } from '../store';
import Layout from './Layout';
import Button from './Button';
import { DeleteIcon } from './Icons';

const FeaturedSongs: Component = () => {
  const hasAuth = false;

  const NewButton = hasAuth ? <Button onClick={null}>New</Button> : null;

  return (
    <Layout title="Featured Songs" titleAction={NewButton}>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <For each={songs()}>
          {({ artist, link, title }) => (
            <div class="border border-gray-200 bg-white rounded-md shadow-sm p-4 dark:bg-gray-700 dark:border-black">
              <div class="text-xl font-semibold mb-1 dark:text-white">
                {title}
              </div>
              <div class="text-gray-500 mb-2 dark:text-white">{artist}</div>
              <div>
                <a
                  class="text-blue-600 dark:text-blue-500"
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Listen
                </a>
                {hasAuth && (
                  <span class="cursor-pointer ml-2 dark:text-white">
                    <DeleteIcon />
                  </span>
                )}
              </div>
            </div>
          )}
        </For>
      </div>
    </Layout>
  );
};

export default FeaturedSongs;
