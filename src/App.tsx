import { Component, lazy } from 'solid-js';
import { Route, Routes } from 'solid-app-router';

import NavBar from './components/NavBar';

const TopAlbums = lazy(() => import('./components/TopAlbums'));
const FeaturedSongs = lazy(() => import('./components/FeaturedSongs'));
const NewReleases = lazy(() => import('./components/NewReleases'));

const App: Component = () => {
  return (
    <div class="h-full dark:bg-gray-800">
      <NavBar />
      <Routes>
        <Route path="/top-albums" element={<TopAlbums />} />
        <Route path="/featured-songs" element={<FeaturedSongs />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/signin" element={<div>SIGN IN</div>} />
        <Route path="/" element={<div>HOME</div>} />
      </Routes>
    </div>
  );
};

export default App;
