declare module 'SEO.svelte' {
    export interface SEOProps {
        /**
         * The title of the page.
         */
        title?: string;
        /**
         * The description of the website.
         */
        description?: string;
        /**
         * (optional) The SEO keywords to be used for search engine optimization.
         */
        keywords?: string;
        /**
         * The name of the site.
         */
        siteName?: string;
        /**
         * Indicates whether the component should be indexed by search engines.
         * @default true
         */
        index?: boolean;
        /**
         * Indicates whether Twitter meta tags should be generated.
         * @default true
         */
        twitter?: boolean;
        /**
         * Indicates whether og / OpenGraph meta tags should be generated.
         * @default true
         */
        openGraph?: boolean;
        /**
         * The URL of the image to be used for preview (twitter, discord image preview when your url is shared)
         */
        imageURL?: string;
        /**
         * The logo image URL for SchemaOrg
         */
        logo?: string;
        /**
         * Represents the author of the page
         */
        author?: string;
        /**
         * An array of social media links for SchemaOrg
         */
        socials?: { url: string }[];
        /**
         * The name to be used for SchemaOrg
         */
        name?: string;
    }

    export default class SEOComponent {
        $$prop_def: SEOProps;
    }
}