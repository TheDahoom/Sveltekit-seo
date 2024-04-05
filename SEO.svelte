<script>
    import { page } from "$app/stores";
    
    /**
     * @param {string} title - The title of the page.
     */
    export let title = "";
    /**
     * @param {string} description - The description of the website.
     */
    export let description = "";
    /**
     * @param {string} keywords - (optional) The SEO keywords to be used for search engine optimization.
     */
    export let keywords = "";
    /**
     * @param {string} siteName - The name of the site.
     */
    export let siteName = "";
    /**
     * Indicates whether the component should be indexed by search engines.
     * @type {boolean}
     * @default true
     */
    export let index = true;
    /**
     * Indicates whether Twitter meta tags should be generated.
     * @type {boolean}
     * @default true
     */
    export let twitter = true;
    /**
     * Indicates whether og / OpenGraph meta tags should be generated.
     * @type {boolean}
     * @default true
     */
    export let openGraph = true;
    /**
     * Indicates whether jsonLd/SchemaOrg meta script should be generated.
     * @type {boolean}
     * @default true
     */
    /**
     * Indicates whether to include Schema.org markup in the SEO component.
     * @type {boolean}
     * @default true
     */
    export let schemaOrg = true;
    /**
     * @param {string} imageURL - The URL of the image to be used for preview (twitter, discord image preview when your url is shared).
     */
    export let imageURL = "";
    export let logo = "";

    export let author = "";
    export let socials = [];

    let socialsString = socials.map(e => e.url).join(", ");

    let jsonLd = {
        "@context": "https://schema.org",
        "@type":  ['Person', 'Organization'],
        "name": "Dahoom AlShaya",
        "url": `${$page.url.origin}`,
        "image": `${imageURL}`,
        logo: {
            "@type": "ImageObject",
            "url": `${logo}`,
            "width": 48,
            "height": 48
        },
        "sameAs": [
            `${socialsString}`
        ]
    };
    let jsonLdStrung = JSON.stringify(jsonLd);
    let jsonLdScript = `
    <script type="application/ld+json">
        ${jsonLdStrung}
    ${'<'}/script>`;
</script>
<svelte:head>
    <meta name="robots" content={index ? "index, follow" : "noindex"} />
    <title>{title}</title>
    {#if description !== ""}
        <meta name="description" content="{description}" />
    {/if}
    {#if keywords !== ""}
        <meta name="keywords" content="{keywords}" />
    {/if}
    {#if author !== ""}
        <meta name="author" content="{author}" />
    {/if}
    
    <!-- Open Graph Meta Tags -->
    {#if openGraph}
        {#if siteName !== ""}
            <meta property="og:site_name" content="{siteName}">
        {/if}        
        <meta property="og:url" content="{$page.url}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="{title}">
        <meta property="og:description" content="{description}">
        {#if imageURL !== ""}
            <meta property="og:image" content="{imageURL}">
        {/if}
    {/if}

    <!-- Twitter Meta Tags -->
    {#if twitter}
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="{$page.url.host}">
        <meta property="twitter:url" content="{$page.url}">
        <meta name="twitter:title" content="{title}">
        <meta name="twitter:description" content="{description}">
        {#if imageURL !== ""}
        <meta name="twitter:image" content="{imageURL}">
        {/if}
    {/if}

    <!-- JSON-LD Schema -->
    {#if schemaOrg || socials != []}
        {@html jsonLdScript}
    {/if}
</svelte:head>

