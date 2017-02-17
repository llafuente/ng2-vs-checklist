# Very Simple Checklist (Angular2 Module)
[![Build Status](https://travis-ci.org/llafuente/ng2-vs-checklist.svg?branch=master)](https://travis-ci.org/llafuente/ng2-vs-checklist)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/llafuente/ng2-vs-checklist/master/LICENSE)

## Demo

https://llafuente.github.io/ng2-vs-checklist/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

Store multiple checkbox values into a single model (array).

Inspiration/port of: https://github.com/vitalets/checklist-model

Comes into two flavours.

## Single/Manual checkbox

Example Markup

```html
<h1>TODO list</h1>

<label>
  <input type="checkbox" checklist="modelVar" value="Write a book" />
  Write a book
</label><br />
<label>
  <input type="checkbox" checklist="modelVar" value="Plant a tree" />
  Plant a tree
</label><br />
<label>
  <input type="checkbox" checklist="modelVar" value="Have a baby" />
  Have a baby
</label><br />

<pre>modelVar: {{modelVar | json}}</pre>
```html

Output all checkbox marked

> modelVar: ['Write a book', 'Plant a tree', 'Have a baby']



## Tree (use bootstrap css)

Display checkboxes as a tree.

Metadata example:

```ts
@Component({
 //...
})
export class XXX {
  treeModel: string[];

  constructor() {

    this.treeData = [{
      id: null,
      selectChildren: true, // when click on Europe will check everything below
      label: 'Europa',
      children: [{
        id: 'es',
        label: 'Spain'
      }, {
        id: 'fr',
        label: 'France'
      }, {
        id: 'it',
        label: 'Italy'
      }]
    }, /*...*/];
  }
}
```

Markup example:

```html
<checktree [nodes]="treeData" [model]="treeModel"></checktree>
```



## Installation

Install through npm:
```
npm install --save ng2-vs-checklist
```

Then use it in your app like so:

```typescript
import {VSChecklistModule} from 'ng2-vs-checklist';

@NgModule({
  //...
  imports: [
    VSChecklistModule
  ]
  //...
})

```

You may also find it useful to view the [demo source](https://github.com/llafuente/ng2-vs-checklist/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/ng2-vs-checklist/ng2-vs-checklist.js"></script>
<script>
    // everything is exported vsChecklist namespace
</script>
```

## Documentation

https://llafuente.github.io/ng2-vs-checklist/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
