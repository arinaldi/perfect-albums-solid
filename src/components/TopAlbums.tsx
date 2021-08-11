import { Component, For } from 'solid-js';

import { favorites } from '../store';
import { formatFavorites, sortDesc } from '../utils';
import Layout from './Layout';
import TopAlbumList from './TopAlbumList';
import { ArrowUpIcon } from './Icons';

const TopAlbums: Component = () => {
  const Title = (
    <>
      Top Albums
      <span class="ml-3 p-1 rounded-md bg-gray-100 text-xl sm:text-2xl font-semibold dark:bg-gray-700">
        {favorites().length.toLocaleString()}
      </span>
    </>
  );

  return (
    <Layout title={Title}>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <For each={Object.entries(formatFavorites(favorites())).sort(sortDesc)}>
          {([year, favorites]) => (
            <TopAlbumList
              data={favorites}
              year={year}
              total={favorites.length}
            />
          )}
        </For>
      </div>
      <a
        class="fixed bottom-0 right-0 p-5 text-gray-500 dark:text-gray-200"
        href="#top"
      >
        <ArrowUpIcon />
        <span>&nbsp;Top</span>
      </a>
    </Layout>
  );
};

export default TopAlbums;
