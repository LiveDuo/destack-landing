---
title: How to build a landing page in Next.js or React
description: Step by step tutorial on how to create a landing page
date: 2024-06-17T22:46:00Z
tags: ["tutorial", "next.js", "react"]
image: /screenshot-destack.png
published: true
---


This is a snippet from the docs that shows how to setup Destack with Next.js or React, either with a new project or an existing one.

You can learn more about destack [here](https://github.com/LiveDuo/destack).

### With a new Next.js project:

- Fork the [destack-starter](https://github.com/LiveDuo/destack-starter) project

- OR deploy a project to Vercel: [link](https://vercel.com/new/git/external?repository-url=https://github.com/LiveDuo/destack-starter&project-name=destack-starter&repository-name=destack-starter)

- OR preview it online with Gitpod: [link](https://gitpod.io/#https://github.com/LiveDuo/destack-starter)

### With an existing Next.js project:

##### 1. Install Destack on your Next.js project

```sh
npm i destack
```

##### 2. Setup the builder endpoint

Create `pages/api/builder/handle.js` and add the following:
```js
export { handleEditor as default, config } from 'destack/build/server'
```

##### 3. Then create a new page

On any Next.js page you want to setup Destack:
```js
export { getStaticProps } from 'destack/build/server'
export { ContentProvider as default } from 'destack'
```

### With a new React.js project:

- Fork the [destack-react-starter](https://github.com/LiveDuo/destack-react-starter) project

- OR deploy a project to Vercel: [link](https://vercel.com/new/git/external?repository-url=https://github.com/LiveDuo/destack-react-starter&project-name=destack-react-starter&repository-name=destack-react-starter)

- OR preview it online with Gitpod: [link](https://gitpod.io/#https://github.com/LiveDuo/destack-react-starter)

### With an existing React.js project:

##### 1. Install Destack on your React.js project

```sh
npm i destack
```

##### 2. Setup the builder endpoint

In `package.json`:
- Replace the "start" script with `destack -d \"react-scripts start\"`
- Then, replace the "build" script with `destack -b \"react-scripts build\"`

##### 3. Then create a new page

In any React.js component you want to setup Destack:
```js
export { ContentProviderReact as default } from 'destack'
```
