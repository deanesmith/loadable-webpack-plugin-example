import React from 'react';
import Loadable from 'react-loadable';

let LoadablePanel = Loadable({
    loader: () => import(/* webpackChunkName: "ExtensionPanel" */ './extensions/ExtensionPanel')
});

export default function App() {
  return (
    <div>
        <h1>This is the application</h1>
        <LoadablePanel/>
    </div>
  );
}
