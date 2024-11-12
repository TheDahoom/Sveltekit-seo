<!-- Originally Dahoom Sveltekit-seo -->
<script>
    import { page } from "$app/stores";

    /**
     * @type {{
     * children?: import('svelte').Snippet,
     * title?: string,
     * description?: string,
     * keywords?: string,
     * canonical?: string,
     * siteName?: string,
     * imageURL?: string,
     * logo?: string,
     * type?: string,
     * author?: string,
     * name?: string,
     * index?: boolean,
     * twitter?: boolean,
     * openGraph?: boolean,
     * schemaOrg?: boolean,
     * schemaType?: string[],
     * socials?: string[],
     * jsonld?: Record<string, any>
     * }}
     * */
    let {
        title = $page.data.title ?? "",
        description = $page.data.description ?? "",
        keywords = $page.data.keywords ?? "",
        canonical = $page.data.canonical ?? "",
        siteName = $page.data.siteName ?? "",
        imageURL = $page.data.imageURL ?? "",
        logo = $page.data.logo ?? "",
        type = $page.data.type ?? "website",
        author = $page.data.author ?? "",
        name = $page.data.name ?? "",
        index = $page.data.index ?? true,
        twitter = $page.data.twitter ?? true,
        openGraph = $page.data.openGraph ?? true,
        schemaOrg = $page.data.schemaOrg ?? false,
        schemaType = $page.data.schemaType ?? ['Person', 'Organization'],
        socials = $page.data.socials ?? [],
        jsonld = $page.data.jsonld ?? {},
        children
    } = $props();

    let Ld = {
        "@context": "https://schema.org",
        "@type": schemaType.length > 1 ? schemaType : schemaType[0],
        "name": name,
        "url": $page.url.origin,
        "image": imageURL,
        "logo": {
            "@type": "ImageObject",
            "url": logo,
            "width": 48,
            "height": 48
        },
        "sameAs": socials
    };
    Ld = { ...Ld, ...jsonld };
    let LdScript = `<script type="application/ld+json">${JSON.stringify(Ld)}${'<'}/script>`;
</script>
<svelte:head>
    {#if title !== ""}
        {#if imageURL}
            <meta name="robots" content={index ? "index, follow, max-image-preview:large" : "noindex"}>
        {:else}
            <meta name="robots" content={index ? "index, follow" : "noindex"}>
        {/if}
        <title>{title}</title>
        <link rel="canonical" href="{canonical ? canonical : $page.url.href}">
    {/if}
    {#if description !== ""}
        <meta name="description" content="{description}">
    {/if}
    {#if keywords !== ""}
        <meta name="keywords" content="{keywords}">
    {/if}
    {#if author !== ""}
        <meta name="author" content="{author}">
    {/if}
    {#if openGraph}
        {#if siteName !== ""}
            <meta property="og:site_name" content="{siteName}">
        {/if}
        {#if title !== ""}
            <meta property="og:url" content="{$page.url.href}">
            <meta property="og:type" content="{type}">
            <meta property="og:title" content="{title}">
        {/if}
        {#if description !== ""}
            <meta property="og:description" content="{description}">
        {/if}
        {#if imageURL !== ""}
            <meta property="og:image" content="{imageURL}">
        {/if}
        {#if logo !== ""}
            <meta property="og:logo" content="{logo}">
        {/if}
    {/if}
    {#if twitter}
        {#if title !== ""}
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="{$page.url.hostname}">
            <meta property="twitter:url" content="{$page.url.href}">
            <meta name="twitter:title" content="{title}">
        {/if}
        {#if description !== ""}
            <meta name="twitter:description" content="{description}">
        {/if}
        {#if imageURL !== ""}
            <meta name="twitter:image" content="{imageURL}">
        {/if}
    {/if}
    {@render children?.()}
    {#if schemaOrg || socials[0] !== undefined || logo !== "" || name !== ""}
        {@html LdScript}
    {/if}
</svelte:head>