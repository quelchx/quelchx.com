---
title: "Navigation Bar Using Vue and Bulma"
date: "2021-05-27"
description: "Learn how to create a clean and simple navigation bar using Bulma and Vue"
tag: "VueJS"
image: "https://miro.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg"
---

How To Make A Simple Navigation Bar Using Vue and Bulma
This is a guide on how to make a simple reusable navigation bar for your next Vue project using Bulma. You should learn how to use props, the $emit function, Vue's transition tag, some basic scss and a bit more!

### This guide assumes you have general knowledge of Vue, HTML, CSS and JavaScript.

In this guide there are a few moving parts happening, and will be starting off with a fresh Vue.js project.

If your following a long you can start a fresh project quickly by running `npx degit quelchx/nimble app-name && cd $_ then npm i` from your terminal to get started quickly. If your starting out with a Vite or Vue CLI package for Vue, make sure to install sass by running `npm install -D sass` as a developer dependancy.

For purposes of this guide I will be assuming you installed the quelchx/nimble package for Vue 3.

Moving forwaard we will first need to create a few files and a component directory. Inside the component directory make 3 files named **Navbar.vue, Sidebar.vue, and Menubar.vue.**

After this we also are going to need to include Bulma into our main.scss file inside the styles directory. We can do this by included` @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css';` at the top of the file.

Now we have bulma installed we can now add some styling, and build the Navbar. Inside the Navbar.vue file add the following code:

**Navbar.vue**

```jsx
<template>
  <nav
    :class="`navbar ` + color"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>
      <Menubar @toggle="$emit('display')" />
    </div>
    <section class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/">Register</router-link>
        <router-link class="navbar-item" to="/">Store</router-link>
        <div class="navbar-item is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <a href="#" class="navbar-item">Location</a>
            <a href="#" class="navbar-item">Contact</a>
            <a href="#" class="navbar-item">About</a>
            <hr class="navbar-divider" />
            <a href="#" class="navbar-item">Issues</a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
import Menubar from "@/components/global/Menubar.vue";
export default {
  name: "Navbar",
  components: { Menubar },
  props: ["color"],
};
</script>
```

I know a lot seems to be happening here but its basically a copy and paste of the Bulma navigation bar from their website with some Vue features added.

We are adding a props called color so later we can change the color by passing in a class name tag such as is-dark or is-link to change the default navbar color. This is purely optional and not needed. I included this to showcase one of many things you can do with Vue.js.

You also might notice we imported the Menubar, but we will build this component in one second. It's important to notice that an @toggle tag has been added with an $emit function attached. This is so when the Menubar appears (will appear depending on the device width inside the browser), we can attach a custom function call to toggle the sidebar -- this might explain itself later.

Now to create the 'hamburger like' Menubar.vue

**Menubar.vue**

```jsx
<template>
  <span @click="$emit('toggle')" class="navbar-burger burger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </span>
</template>

<script>
export default {
    name: 'Menubar'
};
</script>
```

This component is quite simple. The` @click` event handler passes down the toggle function we see in the Navbar.vue file. This will start to make sense more as we build the rest of the Navigation system.

Next we need to create the sidebar.

**Sidebar.vue**

```jsx
<template>
  <aside class="menu-wrapper">
    <div class="menu-backdrop" v-if="show" @click="$emit('close')">
      <!-- backdrop (empty) -->
    </div>

    <transition name="slide-side">
      <div v-if="show" class="menu-navbar">
        <h2 class="title is-3">Brand</h2>
        <ul class="menu-list" @click="$emit('close')">
          <p class="menu-label">Welcome</p>
          <li>
            <router-link class="navbar-item" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="navbar-item" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
@mixin fillout() {
  height: 100%;
  width: 100%;
}

@mixin topleft() {
  top: 0;
  left: 0;
}

.menu-wrapper {
  @include fillout();
  font-size: 20px;
  .menu-backdrop {
    @include fillout();
    @include topleft();
    z-index: 100;
    position: fixed;
    background-color: rgba(12, 17, 23, 0.9);
  }

  .menu-label {
    font-weight: bold;
  }

  .menu-navbar {
    @include topleft();
    height: 100%;
    width: 240px;
    position: fixed;
    background-color: white;
    z-index: 200;
    box-sizing: border-box;
    padding: 2rem;
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.2s ease-in-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
}
</style>
```

This file adds some custom styling to assist Bulma. Again this component includes a custom $emit function that will be passed to determine whether the sidebar should appear or not. Again this should become more clear when we include all these components into the App.vue file.

In this file we are leveraging the custom transition tag that Vue offers so we can shift the menu into the screen view when the Menubar.vue component event handler is clicked.

We will be assigning a boolean props to be passed into this component as this will determine if this component is shown or not.

Onto the main part -- to include all of this inside our App.vue file to see if it works.

**App.vue**

```jsx
<template>
  <div id="app">
    <Navbar
      id="navbar"
      color='is-dark'
      @display="toggleSidebar = !toggleSidebar"
    />
    <Sidebar :show="toggleSidebar" @close="toggleSidebar = false" />
    <router-view class="container" />
  </div>
</template>

<script>
import Navbar from "@/components/global/Navbar.vue";
import Sidebar from "@/components/global/Sidebar.vue";
export default {
  components: { Navbar, Sidebar },
  data() {
    return { toggleSidebar: false };
  },
};
</script>
```

This is what the App.vue file will look like. What we are doing is wrapping every single possible page component with the Navbar.vue and Sidebar.vue file, so we have global access to it.

Now you might notice all the magic happening with the odd $emit tags and props being passed around to make this happen. If you run this on your localhost (run npm run dev) from your terminal and shrink the screen so the hamburger menu appears and click on it... Bam the sidebar should pop out from the left hand side.

You can totally customize everything inside the 3 components -- it's just some basic boilerplate to help myself or others get started.

By now you should have your very own Bulma Navbar inside of a Vue project!

If you wish to view some source code or just want to simply clone a existing project that hosts all the code in this guide -- check out https://github.com/quelchx/vue-navbar or run git clone https://github.com/quelchx/vue-navbar.git from a directory of your choice then run npm install

Cheers.
