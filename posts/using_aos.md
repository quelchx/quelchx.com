---
title: "Using Animate on Scroll"
date: "2021-05-28"
description: "Want to add some cool scrolling animations to your next project -- here is a quick guide to help you out!"
tag: "Animate On Scroll"
image: "https://www.bluecompass.com/filesimages/News%20and%20Blog/2019/scroll-animation.gif"
---

This guide assumes you have some basic knowledge with Vue and JavaScript.
To get started with this example, I will be using a fresh Vue.js project.

To replicate this you can run npx degit quelchx/nimble app && cd $\_ then npm i to quickly download/install a Vue 3 starting template, or you can use a existing project if you wish.

Once everything is setup -- this should only take a few seconds to install and build: run npm run dev then navigate to localhost:3000 inside your browser to make sure everything is 100% functional and working.

## Animation on Scroll
Using this package is actually quite simple to get installed and going with your project. From inside your projects directory, in the terminal run npm install aos. Once this is done we can simple import it inside the App.vue file like so:


**App.vue**

```jsx
<template>
    <div>
      hello world
      <router-view />
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({})
    AOS.refresh()
  }
}
```

Once this has been done we will have global access to using AOS, but first lets make a simple reusable component for this feature. Inside the components folder (if you don't have one simply make a folder called components), inside here make a file component called Animate.vue.

Inside this component we will add the AOS tags needed to make the magic happen. For this example I will keep things simple -- you can visit https://github.com/michalsnik/aos to see other properties you can add such an offset tag. Moving forward:

**Animate.vue**

```jsx
<template>
  <div
    :data-aos="animation"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Animate',
  props: ['animation'],
}
</script>
```

Inside this component we basically are binding a prop called animation to the data-aos tag. AOS out of the box has many different animations such as fade in, fade-down, fade-right, slide-left, etc.

So this way we can pass which animation we want as a string at a future time when this component is called.

Now to test this out lets head over to the App.vue file and then we can import this component and use it like so:

**App.vue**

```jsx
<template>
    <div>
      hello world
      <Animate animation='fade in'>
        <router-view />
      </Animate>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import Animate from '../components/Animate.vue'

export default {
  mounted() {
    AOS.init({})
    AOS.refresh()
  },
  components: { Animate } // importing the component for demo
}
</script>
```

If we refresh the server our front fade should slightly fade in. There we go AOS is working. You can do many things with this library.

I know this is a very simple example -- but it's purpose it to get your feet wet.

To check out more with what you can do visit https://michalsnik.github.io/aos/ and check out https://github.com/michalsnik/aos for further documentation with what you can do with Animate on Scroll.

Cheers!
