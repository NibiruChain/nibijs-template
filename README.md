# NibiJS Template <!-- omit in toc -->

<!-- Badge links -->

[discord-badge]: https://img.shields.io/badge/Nibiru%20Chain-%237289DA.svg?style=&logo=discord&logoColor=white
[discord-url]: https://discord.gg/HFvbn7Wtud
[social-twitter]: https://twitter.com/NibiruChain
[social-linkedin]: https://www.linkedin.com/company/nibiruchain
[social-medium]: https://blog.nibiru.fi/

<p align="center">
<img src="https://nibiru.fi/_astro/logo-main.CXKwOZS3.svg" width="500">
</p>

<p align="center">
Nibi JS template build with Next, React, Cosmos-kit & tailwind to superstart your development.
</p>

[<img align="right" alt="Medium" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/medium.svg" />][social-medium]
[<img align="right" alt="LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][social-linkedin]
[<img align="right" alt="Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/twitter.svg" />][social-twitter]

<!--
Workflow badges aren't available on private repositories.
[![web-app-nibiru test workflow image][tests-badge]][tests-workflow] -->

[![discord badge image][discord-badge]][discord-url]

#### Table of Contents

- [Usage Instructions](#usage-instructions)
    - [Install Node Version Manager (`nvm`)](#install-node-version-manager-nvm)
    - [Run the application locally](#run-the-application-locally)
- [Dependencies](#dependencies)
- [Source (src) Directory Structure](#source-src-directory-structure)
- [Deployments](#deployments)
- [TSConfig](#tsconfig)

---

## Usage Instructions

#### Install Node Version Manager (`nvm`)

To install or update nvm, run the install script using the following command:

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

For more information, see [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

#### Run the application locally

1. Move to the repo's node version as defined by the .nvmrc:

   ```sh
   nvm use
   ```

2. Install yarn and download package dependencies (can take ≈3 minutes):

   ```sh
   npm install -g yarn
   yarn # or: npm install
   ```

3. Run the application with:

   ```sh
    npm run dev   # defaults to http://localhost:3000
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
   ```

    This will automatically open an interactive development environment with hot
    reloading, enabling you to edit files and see changes reflected in the
    running application.

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

    You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## Dependencies

- [Nibi JS](https://github.com/NibiruChain/ts-sdk)
- [Next js](https://nextjs.org/)
- [React js](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Cosmos-Kit](https://cosmology.zone/products/cosmos-kit)

---

## Source (src) Directory Structure

- `components`: Contains all reusable components.
- `pages`: A directory containing the page-level components. Each subdirectory of `pages` corresponds to a page in the application.
- `layouts`: For layout-based components like sidebars, navbars, containers, page headers, and page footers.
- `hooks`: For custom hooks.
- `context`: Contains logic related to the global Redux store.
- `config`: For custom types re-used in multiple places. A subdirectory or file named "types" exports local to a specific directory.
- `style`: For utility functions that didn't fit into other categories.

---

## Deployments

After building, you can upload `dist` folder to a hosting service like Netlify

```sh
yarn build
```

Reference: <https://create-react-app.dev/docs/deployment/>

---

## TSConfig

Visit <https://aka.ms/tsconfig> to read more about this file

---

© Nibi, Inc.

<p align="center">
<img src="https://nibiru.fi/_astro/nibi-logomark-main.BQ230I_H.svg" width="300">
</p>
