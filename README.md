# remix-react-native-web-starter

[![License][license-badge]][license]
[![Twitter][twitter-badge]][twitter]
[![Star][star-badge]][star]

## Using this template

This template is based on the [How to Setup React Native Web in a Remix project](https://horus.dev/blog/react-native-web-remix-setup) article

**Requisites:**

- Use `pnpm` to install dependencies. Install it with `npm install --global pnpm`

**Commands:**

```bash
git clone git@github.com:HorusGoul/remix-react-native-web-starter.git my-project
cd my-project
pnpm install
pnpm dev
```

## Development

From your terminal:

```sh
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

<!-- prettier-ignore-start -->
[license-badge]: https://img.shields.io/github/license/HorusGoul/remix-react-native-web-starter
[license]: ./LICENSE
[twitter-badge]: https://img.shields.io/twitter/follow/horusgoul.svg?style=social&label=Follow
[twitter]: https://twitter.com/horusgoul
[star-badge]: https://img.shields.io/github/stars/HorusGoul/remix-react-native-web-starter.svg?style=social&label=Star
[star]: https://github.com/horusgoul/remix-react-native-web-starter
<!-- prettier-ignore-end -->
