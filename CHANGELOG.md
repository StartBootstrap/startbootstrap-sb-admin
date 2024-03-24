
### 8.0.0

Built/tested on:

```bash
npm --version
10.4.0

node --version
v20.11.1
```

#### Changed

  * Bumped version to 8.0.0 considering all of the changes.
  * Updated dependencies:
    * Updated Bootstrap to 5.3.3
  * Updated dev-dependencies:
    * Updated `autoprefixer` to 10.4.17
    * Updated `browser-sync` to 3.0.2
    * Updated `chokidar` to 3.6.0
    * Updated `concurrently` to 8.2.2
      * Consequently, had to update `scripts/start.js` and `scripts/start-debug.js` for this change.
    * Updated `postcss` to 8.4.35
    * Updated `prettier` to 3.2.5
      * As a result, had to update `scripts/render-pug.js` to change the `renderPug` function to an async function.
        * Also, has to modify the 'prettified' const to be await.
    * Updated `sass` to 1.71.1
  * Updated `scripts/render-scss.js` to replace legacy `sass.renderSync` with `sass.compileString`.
  * Updated scripts and css for `simple-datatables` to 9.0.0
    * Updated main css as well, as a result. The `.datatable-pagination` had to be updated throughout to include `button`, which was a change made in `simple-datatables` >8.0
  * Updated `Charts.js` to 4.4.1
    * Updated `assests/demo/chart-*-demo.js` files as a result.
  * Updated `fontawesome` to 6.5.1
  * Updated copyright year to 2024.

  ##### Addressing Bootstrap Deprecations

  * This theme does not seem to be affected that much with the deprecations in Bootstrap 5.3
    * `.text-muted` replaced with `.text-body-secondary`
    * `.navbar-dark` left for now, with `data-bs-theme="dark"` added

#### Added

  * As a result of updating `Charts.js`, `luxon` ^3 and `chartjs-adapter-luxon` ^1 have been added.
    * This was needed as Charts.js >v2 appears to require an adapter for `Time Cartesian Axis`
