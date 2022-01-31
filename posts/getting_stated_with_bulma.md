---
title: "Getting Started with Bulma"
date: "2021-05-27"
description: "Get started with Bulma quickly using your Vue.js project"
tag: "Bulma CSS"
image: "https://bulma.io/images/bulma-banner.png"
---

They're a few ways you can go about getting setup using Bulma with your next Vue project.

By far the most simple way is to import it directly into your main css file and that's it! In the past personally I would prefer to use a CDN link that is placed on the main index.html file, or download and import the node package -- but not anymore.

Let's start from scratch. First we have to create a project, in this case we can use Vite to quickly setup a fresh Vue 3 project. Run npm init @vitejs/app or you can use my personal setup instead npx degit quelchx/nimble app -- they both are similar, nimble includes Vue Router and Vuex out of the box were as the default Vite Vue 3 application does not.

Moving forward if your using npm init @vitejs/app you will need to create a folder and name it styles: inside it place a file called main.css.

At the top of your main.css file add this line of code and we are almost finished!

**main.css**

```css
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";
```

Now inside the main.js file make sure we import this css module so we can use Bulma globally throughout our application.

**main.js**

```jsx
import { createApp } from "vue";
import App from "./App.vue";
// bulma import!
import "./styles/main.scss";

createApp(App).mount("#app");
```

To test and ensure everything is working properly what I usually do from the App.vue file is create button like so:

**App.vue**

```jsx
<template>
  <div class="container section">
    <button class="button is-link">Hello</button>
  </div>
</template>
```

If everything was done correctly you should have a blue button with some padding added all around. It's that simple!

Cheers.
