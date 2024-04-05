# Sveltekit SEO
> dead simple, no dependencies, svelte component that automates a lot of the annoying SEO parts for you.
> Also optionally includes functionality for social media preview support
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
  description="Where to contact Dahoom AlShaya, whether for buisness needs or general inquiries"
  keywords="Contact, buisness, inquiries"
/>
```

## Standard Parameters
| Parameter     | Description             | Type | Default             |
| ------------- | ----------------------- | ------- | ----------------------- |
| `title`| The title of the page | string | ~ |
| `description`| The description of the page | string | ~ |
| `keywords`| (optional) The keywords to be used for search engine optimization or search | string | ~ |
| `index`| (optional) Whether or not crawlers should crawl this page | boolean | true |

# Advanced
| Parameter     | Description             | Type | Default             |
| ------------- | ----------------------- | ------- | ----------------------- |
| `siteName`| (optional) The name of the site | string | ~ |
| `twitter`| (optional) Indicates whether Twitter meta tags should be generated | boolean | true |
| `openGraph`| (optional) Indicates whether og / OpenGraph meta tags should be generated | boolean | true |
| `schemaOrg`| (optional) Indicates whether jsonLd/SchemaOrg meta script should be generated | boolean | false |
| `imageURL`| (optional) The URL of the image to be used for preview (twitter, discord image preview when your url is shared) | string | ~ |
| `logo`| (optional) The logo image URL for SchemaOrg | string | ~ |
| `author`| (optional) Represents the author of the page | string | ~ |
| `socials`| (optional) An array of social media links for SchemaOrg | Array | ~ |
| `name`| (optional) The name to be used for SchemaOrg | string | ~ |

## How it works
The component uses `<svelte:head>` to put meta tags that are filled with sveltekit $page and inputted variables so for example:
```svelte
<meta property="og:url" content="{$page.url}">
```


## Why
A lot of SEO is repeated boilerplate for twitter, open graph and schemaOrg. This component's sole purpose is to do away with all the annoyances and just help you focus on your content without having to spend hours making sure all the meta tags are correctly set on each and every page.

I initially made this for my personal website and decided to open source it to so that no one has to go through the headache I did to make sure everything is functional 

## keywords?!
It's optional for anyone who wants to use it. Google doesn't rely on keywords anymore but apparently bing still does put a tiny weight on it. I personally use keywords for my personal website's search function.

## License
MIT License

## Credits
Thanks to [RodneyLab](https://github.com/rodneylab) for his [blog](https://rodneylab.com/adding-schema-org-markup-to-sveltekit-site/) post which taught me about jsonLd and for suggesting an interesting snippet of code to render jsonLd
