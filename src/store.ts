import { createResource } from 'solid-js';
import { GraphQLClient, request } from 'graphql-request';

import { GQL_URL } from './constants';
import { GET_FAVORITES, GET_RELEASES, GET_SONGS } from './queries';
import { Favorite, Release, Song } from './utils/types';

const graphQLClient = new GraphQLClient(GQL_URL, { headers: {} });

export const [favorites] = createResource<Favorite[]>(
  async () => {
    const data = await graphQLClient.request(GET_FAVORITES);

    return data.favorites;
  },
  { initialValue: [] },
);

export const [releases] = createResource<Release[]>(
  async () => {
    const data = await graphQLClient.request(GET_RELEASES);

    return data.releases;
  },
  { initialValue: [] },
);

export const [songs] = createResource<Song[]>(
  async () => {
    const data = await graphQLClient.request(GET_SONGS);

    return data.songs;
  },
  { initialValue: [] },
);
