<p align="center">
  <img src="https://github.com/TheDahoom/Sveltekit-seo/assets/105564371/338fd0ad-120f-4b4b-ac00-d56e0b765724" alt="sk-seo logo" />
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
  [![GitHub followers](https://img.shields.io/github/followers/TheDahoom?style=for-the-badge&logo=github&label=follow)](https://github.com/TheDahoom)

</div>


## Installation
```bash 
npm i -D sk-seo
```

## Usage
import the file
```svelte
<script>
  import Seo from 'sk-seo';
</script>
```
Then place this code anywhere in your svelte file
```svelte
<Seo 
  title="Contact"
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
| `schemaType`| The type of jsonld schema (Person, Organisation, Create) @default Person,Organisation | string | `'Person','Organisation'` |
| `jsonld`| Appends contents to jsonld script (used by search engines for names, contact information, [etc](https://json-ld.org)) | object `{}` | ~ |
| `imageURL`| The URL of the image to be used for preview (twitter, discord image preview when your url is shared) | string | ~ |
| `logo`| The logo image URL for SchemaOrg | string | ~ |
| `author`| Represents the author of the page | string | ~ |
| `socials`| An array of social media links for SchemaOrg | Array | ~ |
| `name`| The name to be used for SchemaOrg | string | ~ |

## How it works
The component uses `<svelte:head>` to place meta tags that are filled with sveltekit $page and inputted variables, this means that a lot of the tags are automatically filled for you for each page in your website. An example of this is `og:url`, which requires the url of the current page:
```svelte
<meta property="og:url" content="{$page.url}">
```

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

## Keywords?!
It's optional for anyone who wants to use it. Google doesn't rely on keywords anymore but apparently bing still does put a tiny weight on it. I personally use keywords for my personal website's search function.

## Duplicated Meta?
If you're behind `Cloudflare` and find yourself with duplicated meta tags, then you should disable auto-minify!

`Speed -> Optimization -> Content Optimization -> Auto Minify -> UNCHECK HTML`

## License
[MIT License](https://github.com/TheDahoom/Sveltekit-seo/blob/main/LICENSE)

## Extra 
If you have any ideas of fixes/imporvements/features that could be added then please suggest them [here](https://github.com/TheDahoom/Sveltekit-seo/discussions/3)

## Credits
- Thanks to [ArchangelGCA](https://github.com/ArchangelGCA) for the multiple quality of life imporvements and fixes!
- Thanks to [RodneyLab](https://github.com/rodneylab) for his [blog](https://rodneylab.com/adding-schema-org-markup-to-sveltekit-site/) post which taught me about jsonLd and for suggesting an interesting snippet of code to render jsonLd

## As seen on
[Svelte Blog](https://svelte.dev/blog/whats-new-in-svelte-may-2024)
[The Guardian](https://youtu.be/iik25wqIuFo)
[New York Times](https://youtu.be/iik25wqIuFo)
