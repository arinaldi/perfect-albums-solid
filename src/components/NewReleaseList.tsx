import { Component, For } from 'solid-js';

import { ListItem } from '../utils/types';

interface Props {
  data: ListItem[];
  date: string;
}

const NewReleaseList: Component<Props> = ({ data, date }) => {
  return (
    <div>
      <h4 class="text-xl font-semibold dark:text-white">{date}</h4>
      <ul data-testid={`list-${date}`} class="list-disc ml-6 p-1">
        <For each={data}>
          {({ artist, title }) => (
            <li class="dark:text-white">
              <span>
                {artist} &ndash; {title}
              </span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default NewReleaseList;
