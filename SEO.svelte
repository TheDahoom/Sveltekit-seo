<script>
    import { page } from "$app/state";

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
        title = page.data.title ?? "",
        description = page.data.description ?? "",
        keywords = page.data.keywords ?? "",
        canonical = page.data.canonical ?? "",
        siteName = page.data.siteName ?? "",
        imageURL = page.data.imageURL ?? "",
        logo = page.data.logo ?? "",
        type = page.data.type ?? "website",
        author = page.data.author ?? "",
        name = page.data.name ?? "",
        index = page.data.index ?? true,
        twitter = page.data.twitter ?? true,
        openGraph = page.data.openGraph ?? true,
        schemaOrg = page.data.schemaOrg ?? false,
        schemaType = page.data.schemaType ?? ['Person', 'Organization'],
        socials = page.data.socials ?? [],
        jsonld = page.data.jsonld ?? {},
        children
    } = $props();

    // WORKAROUND TO ENSURE REACTIVITY
    let finalTitle = $derived(page.data.title ?? title), finalDescription = $derived(page.data.description ?? description),
        finalKeywords = $derived(page.data.keywords ?? keywords), finalCanonical = $derived(page.data.canonical ?? canonical),
        finalSiteName = $derived(page.data.siteName ?? siteName), finalImageURL = $derived(page.data.imageURL ?? imageURL),
        finalLogo = $derived(page.data.logo ?? logo), finalType = $derived(page.data.type ?? type),
        finalAuthor = $derived(page.data.author ?? author), finalName = $derived(page.data.name ?? name);
    let finalIndex = $derived(page.data.index ?? index), finalTwitter = $derived(page.data.twitter ?? twitter),
        finalOpenGraph = $derived(page.data.openGraph ?? openGraph), finalSchemaOrg = $derived(page.data.schemaOrg ?? schemaOrg);
    let finalSchemaType = $derived(page.data.schemaType ?? schemaType), finalSocials = $derived(page.data.socials ?? socials),
        finalJsonld = $derived(page.data.jsonld ?? jsonld);

    let LdScript = $derived(`<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": finalSchemaType.length > 1 ? finalSchemaType : finalSchemaType[0],
        "name": finalName,
        "url": page.url.origin,
        "image": finalImageURL,
        "logo": {
            "@type": "ImageObject",
            "url": finalLogo,
            "width": 48,
            "height": 48
        },
        "sameAs": finalSocials
        , ...finalJsonld}
    )}${'<'}/script>`);
</script>
<svelte:head>
    {#if finalTitle !== ""}
        {#if finalImageURL}
            <meta name="robots" content={finalIndex ? "index, follow, max-image-preview:large" : "noindex"}>
        {:else}
            <meta name="robots" content={finalIndex ? "index, follow" : "noindex"}>
        {/if}
        <title>{finalTitle}</title>
        <link rel="canonical" href="{finalCanonical ? finalCanonical : page.url.href}">
    {/if}
    {#if finalDescription !== ""}
        <meta name="description" content="{finalDescription}">
    {/if}
    {#if finalKeywords !== ""}
        <meta name="keywords" content="{finalKeywords}">
    {/if}
    {#if finalAuthor !== ""}
        <meta name="author" content="{finalAuthor}">
    {/if}
    {#if finalOpenGraph}
        {#if finalSiteName !== ""}
            <meta property="og:site_name" content="{finalSiteName}">
        {/if}
        {#if finalTitle !== ""}
            <meta property="og:url" content="{page.url.href}">
            <meta property="og:type" content="{finalType}">
            <meta property="og:title" content="{finalTitle}">
        {/if}
        {#if finalDescription !== ""}
            <meta property="og:description" content="{finalDescription}">
        {/if}
        {#if finalImageURL !== ""}
            <meta property="og:image" content="{finalImageURL}">
        {/if}
        {#if finalLogo !== ""}
            <meta property="og:logo" content="{finalLogo}">
        {/if}
    {/if}
    {#if finalTwitter}
        {#if finalTitle !== ""}
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="{page.url.hostname}">
            <meta property="twitter:url" content="{page.url.href}">
            <meta name="twitter:title" content="{finalTitle}">
        {/if}
        {#if finalDescription !== ""}
            <meta name="twitter:description" content="{finalDescription}">
        {/if}
        {#if finalImageURL !== ""}
            <meta name="twitter:image" content="{finalImageURL}">
        {/if}
    {/if}
    {@render children?.()}
    {#if finalSchemaOrg && (finalSocials[0] !== undefined || finalLogo !== "" || finalName !== "")}
        {@html LdScript}
    {/if}
</svelte:head>