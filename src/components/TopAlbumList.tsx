import { Component, For } from 'solid-js';

import { ListItem } from '../utils/types';

interface Props {
  data: ListItem[];
  year: string;
  total: number;
}

const TopAlbumList: Component<Props> = ({ data, year, total }) => {
  return (
    <div>
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-semibold dark:text-white">{year}</h4>
        <div class="px-2 py-1 mr-4 rounded-md bg-gray-100 text-xl font-semibold dark:text-white dark:bg-gray-700">
          {total.toLocaleString()}
        </div>
      </div>
      <ul data-testid={`list-${year}`} class="list-disc ml-6 p-1">
        <For each={data}>
          {({ artist, title }) => (
            <li class="dark:text-white">
              {artist} &ndash; {title}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default TopAlbumList;
