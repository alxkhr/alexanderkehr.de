# Making of alexanderkehr.de

I created this website to briefly introduce myself, link to my existing profiles and afford an opportunity to say "Hello!".

Before i made this version of my private website, i hosted a huge profile site full of content with a deep navigation. I don't think someone ever clicked through every edge. And it took me a lot of time to create all the beautiful content, not speaking of the effort to keep it up to date.

I try to be smarter now, so i made it small and simple this time.

## The landing page

![polyalex animation gif](./polyalex_500.gif)

The initial eye-catching animation is the only excemption from this small-and-simple approach.

If someone intents to imitate this, here are the steps:

    - take a nice picture
    - draw over it with the vector tool of your choice (i.e. Inkscape)
    - generate svg elements and css classes (write small script or [use mine](./generateJsonAndCss.py))
    - include it in your website code
    - add an animation

```css
@keyframes appear {
  0% {
    fill-opacity: 0;
    stroke-opacity: 0;
  }

  10% {
    fill-opacity: 0;
    stroke-opacity: 1;
  }

  100% {
    fill-opacity: 1;
    stroke-opacity: 0;
  }
}
```

    - generate some distinct animation-delay for every svg element

## Static Languages and Templates

Actually, i started to implement this website by using those fancy new JavaScript libraries, because i fell in love with React some years ago. But i had to admit, that i don't really have a reason to let the visitors fetch a script, so i decided to use plain HTML (with inline SVG) and CSS. Looking back, it was such a relief.

To keep maintainability and avoid any redundant code i am using [mustache](https://github.com/janl/mustache.js) to generate HTML and [postcss](https://github.com/postcss/postcss) to post-process my CSS styles (adding vendor-prefixes, fallback styles, computing variables etc.).

## Hosting, SEO, Responsiveness

No script means less to load. And thanks to my build/hosting service [Netlify](https://www.netlify.com/) i could further reduce the loading time.

Neither am i an expert for SEO, nor have i created responsive web content before, but i tried my best to satisfy the minimum demand this time.
