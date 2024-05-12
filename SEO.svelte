<script>
    import { page } from "$app/stores";
    
    export let title, description, keywords, canonical, siteName, imageURL, logo, author, name = "";
    export let index, twitter, openGraph = true;
    export let schemaOrg = false;
    export let socials = [];

    let Ld = {
        "@context": "https://schema.org",
        "@type":  ['Person', 'Organization'],
        "name": `${name}`,
        "url": `${$page.url.origin}`,
        "image": `${imageURL}`,
        logo: {
            "@type": "ImageObject",
            "url": `${logo}`,
            "width": 48,
            "height": 48
        },
        "sameAs": [
            `${socials.join(", ")}`
        ]
    };
    let jsonLdScript = `<script type="application/ld+json">${JSON.stringify(Ld)}${'<'}/script>`;
</script>
<svelte:head>
    {#if title !== ""}
        <meta name="robots" content={index ? "index, follow" : "noindex"} />
        <title>{title}</title>
        <meta rel="canonical" content="{canonical === "" ? $page.url : canonical}" />
    {/if}
    {#if description !== ""}
        <meta name="description" content="{description}" />
    {/if}
    {#if keywords !== ""}
        <meta name="keywords" content="{keywords}" />
    {/if}
    {#if author !== ""}
        <meta name="author" content="{author}" />
    {/if}
    {#if openGraph}
        {#if siteName !== ""}
            <meta property="og:site_name" content="{siteName}">
        {/if}        
        {#if title !== ""}
            <meta property="og:url" content="{$page.url}">
            <meta property="og:type" content="website">
            <meta property="og:title" content="{title}">
        {/if}
        {#if description !== ""}
            <meta property="og:description" content="{description}">
        {/if}
        {#if imageURL !== ""}
            <meta property="og:image" content="{imageURL}">
        {/if}
    {/if}
    {#if twitter}
        {#if title !== ""}
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="{$page.url.host}">
            <meta property="twitter:url" content="{$page.url}">
            <meta name="twitter:title" content="{title}">
        {/if}
        {#if description !== ""}
        <meta name="twitter:description" content="{description}">
        {/if}
        {#if imageURL !== ""}
        <meta name="twitter:image" content="{imageURL}">
        {/if}
    {/if}
    <slot />
    {#if schemaOrg || socials[0] !== undefined || logo !== "" || name !== ""}
        {@html jsonLdScript}
    {/if}
</svelte:head>

