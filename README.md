# Client Scaffold

This project was bootstrapped using Peracto's client scaffolder. It comes with
the following features and functionality out of the box:

-   NextJS configured as a main application
-   Storybook configuration
-   TypeScript Support for writing consistently solid code
-   Serverless Deployments for NextJS
-   Code linting via Prettier and ESLint
-   Commit linting via conventional commits
-   MobX configured for a global state management tool
-   Google Fonts included in both Storybook and NextJS
-   Chakra UI support, including configuration within Storybook and NextJS to
    use custom themes

## Getting Started

Before starting, you'll need to create a `.env.local` file with the API URL for
the API you want to work with, ie

```
NEXT_PUBLIC_API_URL=https://stage-api.peracto3.pub
```

We prepend the `NEXT_PUBLIC_` bit to ensure it's available to the browser. See
[this article](https://nextjs.org/docs/basic-features/environment-variables) for
more information.

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

### Project structure

This project was generated using internal tools, depending on the age of the
project, this may have a slightly different structure, but most of the theory
should be the same.

```txt
.storybook/
  main.js
  preview-head.html
  preview.js
public/
src/
  layouts/
    default.tsx
  pages/
    api/
    _app.tsx
    _document.tsx
    index.tsx
  hooks/
    use-stores.ts
  components/ExampleComponent/
    __stories/
      ExampleComponent.stories.tsx
    __tests/
      ExampleComponent.test.tsx
    src/
      ExampleComponent.tsx
      index.ts
```
