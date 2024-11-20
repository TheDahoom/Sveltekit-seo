> [!CAUTION]
> Svelte 5 support is still pretty much experimental, it requires heavy testing and might not work as expected.

<p align="center">
  <img src="https://github.com/TheDahoom/Sveltekit-seo/assets/105564371/bed144c2-6289-459c-8132-c40a6521a656" alt="sk-seo logo" />
</p>


<p align="center">
A dead simple, no dependencies, svelte component that automates a lot of the annoying SEO parts for you.
Also optionally includes functionality for social media preview support
</p>

<div align="center">

  [![Minzip size](https://img.shields.io/bundlephobia/minzip/sk-seo?style=for-the-badge)](https://img.shields.io/bundlephobia/minzip/sk-seo)
  [![Installs](https://img.shields.io/npm/d18m/sk-seo?style=for-the-badge)](https://img.shields.io/npm/d18m/sk-seo)
  [![GitHub Repo stars](https://img.shields.io/github/stars/TheDahoom/sveltekit-seo?style=for-the-badge&label=STAR)](https://github.com/TheDahoom/Sveltekit-seo)
  [![GitHub Forks](https://img.shields.io/github/forks/TheDahoom/sveltekit-seo?style=for-the-badge&logo=github&label=fork)](https://github.com/TheDahoom/Sveltekit-seo/fork)

</div>


## Installation
```bash 
npm i -D sk-seo@next
```
If you're using @adapter-static, make sure to follow <a href="#prerendering">this</a>
## Usage
Add the component to your layout file (eg: `+layout.svelte`).
```svelte
<!-- +layout.svelte -->
<script>
  import Seo from 'sk-seo';
</script>

<Seo />
```

Add a `+layout.js` file alongside your `+layout.svelte` with a load function and return data with the 
SEO/Meta that you need:
> [!TIP]
> For type support follow this [guide](https://github.com/TheDahoom/Sveltekit-seo/wiki/v0.5--types)
```js
// +layout.js
export const load = async ({ url }) => {
    // OPTIONAL: You can use url.origin to get the base URL, 
    // or even url.href to get the full URL.
    // (For example, to get URLs of images in your /static folder), like this:
    // imageURL: `${url.origin}/image.jpg`
    return {
        title: 'Dahoom - Official',
        description: 'The official website of Dahoom',
        keywords: 'dahoom, official, website'
        // ... and more
    }
}
```

> [!TIP]
> You can override your `+layout.js` meta from any `+page.js`.

Make sure to add a `+page.js` with a load function to all your pages with the SEO/Meta that you need:
```js
// contacts/+page.js
export const load = async ({ url }) => {
    // Title, description and keywords set here will replace the title set in +layout.js while visiting /contacts
    return {
        title: 'Contacts', 
        description: 'Where to contact Dahoom AlShaya, whether for business needs or general inquiries',
        keywords: 'Contact, business, inquiries',
    }
}
```

> [!TIP]
> This also works with `+layout.server.js` and `+page.server.js`.

## DEPRECATED USAGE (Not recommended, duplicates meta tags)
Put a `<Seo />` tag in each page you want to have SEO for.
> [!WARNING]
> This's fine as long as you're making a single-page website (such as, just a homepage). But if you're making a 
> multi-page website, you should use the previous method!
```svelte
<!-- contacts/+page.svelte -->
<script>
  import Seo from 'sk-seo';
</script>

<Seo 
  title="Contact"
  description="Where to contact Dahoom AlShaya, whether for business needs or general inquiries"
  keywords="Contact, business, inquiries"
/>
```

> [!CAUTION]
> Using `<Seo />` on each page will duplicate meta tags. This's why we recommend using the first method 
> (`load` functions and `<Seo />` only in your `+layout.svelte`).

### Conflicting stores/load return values

You could even combine stores (with any name that you want, just make sure to use the same name that you return from 
your `+layout.js/+page.js` load function) and manual input if you really have to:
```svelte
<!-- +layout.svelte -->
<script>
  import Seo from 'sk-seo';
  import { page } from '$app/stores';
</script>

<Seo 
  title={$page.data.customTitle ?? ''} <!-- CUSTOM NAME: title now points to $page.data.customTitle store -->
  description="Where to contact Dahoom AlShaya, whether for business needs or general inquiries"
  keywords="Contact, business, inquiries"
/>
```

## Standard Parameters
| Parameter     | Description             | Type | Default             |
| ------------- | ----------------------- | ------- | ----------------------- |
| `title`| The title of the page | string | ~ |
| `description`| The description of the page | string | ~ |
| `keywords`| The keywords to be used for search engine optimization or search | string | ~ |
| `index`| Whether or not crawlers should crawl this page | boolean | true |

# Advanced
All these choices are optional
| Parameter     | Description             | Type | Default             |
| ------------- | ----------------------- | ------- | ----------------------- |
| `siteName`| The name of the site | string | ~ |
| `canonical`| Current URL of the page. For resolving duplicate pages with SEO | string | ~ |
| `twitter`| Indicates whether Twitter meta tags should be generated | boolean | true |
| `openGraph`| Indicates whether og / OpenGraph meta tags should be generated | boolean | true |
| `schemaOrg`| Indicates whether jsonLd/SchemaOrg meta script should be generated | boolean | false |
| `schemaType`| The type of jsonld schema (Person, Organisation, Create) @default Person,Organisation | string/Array | ['Person', 'Organisation'] |
| `jsonld`| Appends contents to jsonld script (used by search engines for names, contact information, [etc](https://json-ld.org)) | object `{}` | ~ |
| `imageURL`| The URL of the image to be used for preview (twitter, discord image preview when your url is shared) | string | ~ |
| `logo`| The logo image URL for SchemaOrg | string | ~ |
| `author`| Represents the author of the page | string | ~ |
| `socials`| An array of social media links for SchemaOrg | Array | ~ |
| `name`| The name to be used for SchemaOrg | string | ~ |
| `type`| The type of the page (website, article, [etc](https://schema.org/docs/full.html)) | string | website |

## How it works
The component uses `<svelte:head>` to place meta tags that are filled with sveltekit $page and inputted variables, this means that a lot of the tags are automatically filled for you for each page in your website. An example of this is `og:url`, which requires the url of the current page:
```svelte
<meta property="og:url" content="{$page.url}">
```
Since v0.5 the component also makes use of `$page.data` **stores**. These will be automatically picked up by the component and used to fill in the meta tags

## Extendable
If you want to use an unusual meta tag or use your own custom one (eg: google site verification). It's easy as:
```svelte
<Seo title="abc" description="def">
  <meta name="google-site-verification" content="abcd123">
</Seo>
```

## Why
A lot of SEO is repeated boilerplate for twitter, open graph and schemaOrg. This component's sole purpose is to do away with all the annoyances and just help you focus on your content without having to spend hours making sure all the meta tags are correctly set on each and every page.

I initially made this for my personal website and decided to open source it to so that no one has to go through the headache I did to make sure everything is functional.

## Prerendering
If you are using adapter-static,  you need to add your base URL in `svelte.config.js`, otherwise `$page.url` will default to `http://sveltekit-prerender`.
```js
// svelte.config.js
const config = {
  kit: {
    prerender: {
      origin: 'https://mossberg.dev' // Replace with your URL.
    }
  }
}
```

## Duplicated Meta?
If you're behind `Cloudflare` and find yourself with duplicated meta tags, then you should disable auto-minify!

`Speed -> Optimization -> Content Optimization -> Auto Minify -> UNCHECK HTML`

> [!WARNING] 
> Still having duplicated meta? Make sure that you're not using `<Seo />` in each page.

## Credits
- Thanks to [GABRYCA](https://github.com/GABRYCA) for implementing a new cool new approach, svelte 5 and the multitude of additions that came with them!
- Thanks to [ArchangelGCA](https://github.com/ArchangelGCA) for the multiple quality of life imporvements and fixes!
- Thanks to [RodneyLab](https://github.com/rodneylab) for his [blog](https://rodneylab.com/adding-schema-org-markup-to-sveltekit-site/) post which taught me about jsonLd and for suggesting an interesting snippet of code to render jsonLd
  
## License
[MIT License](https://github.com/TheDahoom/Sveltekit-seo/blob/main/LICENSE)

## As seen on
[Svelte Blog](https://svelte.dev/blog/whats-new-in-svelte-may-2024)
[The Guardian](https://youtu.be/iik25wqIuFo)
[New York Times](https://youtu.be/iik25wqIuFo)
