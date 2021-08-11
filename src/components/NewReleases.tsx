import { Component, For } from 'solid-js';

import { releases } from '../store';
import { formatReleases, sortByDate } from '../utils';
import Layout from './Layout';
import NewReleaseList from './NewReleaseList';

const NewReleases: Component = () => {
  return (
    <Layout title="New Releases">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <For each={Object.entries(formatReleases(releases())).sort(sortByDate)}>
          {([date, releases]) => <NewReleaseList data={releases} date={date} />}
        </For>
      </div>
    </Layout>
  );
};

export default NewReleases;
