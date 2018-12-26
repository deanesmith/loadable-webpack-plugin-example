# Loadable Webpack Plugin Example

Uses react-loadable for importing and to gain control over chunking webpacked bundles. 

##### Install

Clone, fork, or download this project.

In your local project directory, run the following command:

`yarn install`


##### Build

For non-minified bundles:

`yarn build --mode development`

or, for minified bundles:

`yarn build --mode production`


##### Run 

Webpack dev server:

`yarn start`

Notice in your ./public/build directory there are two bundles, one for main and one for ExtensionPanel2.

Copy ExtensionPanel2.js to the loadable-webpack-example.
