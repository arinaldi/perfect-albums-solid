import { Component, For } from 'solid-js';

import { ListItem } from '../utils/types';

interface Props {
  data: ListItem[];
  date: string;
}

const NewReleaseList: Component<Props> = (props) => {
  return (
    <div>
      <h4 class="text-xl font-semibold dark:text-white">{props.date}</h4>
      <ul data-testid={`list-${props.date}`} class="list-disc ml-6 p-1">
        <For each={props.data}>
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
