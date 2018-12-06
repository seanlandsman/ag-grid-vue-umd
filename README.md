# Steps I took:

- create Hello.vue. it uses SCSS for styles through `lang=scss`
- create index.js which autoregisters the component if loaded via script tag, and exports the plugin Object.
- run `vue build index.js --prod --lib`
- see an error about sass-loader
- `npm install --save-dev node-sass sass-loader`
- build works!
- create example.html

...and the UMD autoregisters and works as expected.
