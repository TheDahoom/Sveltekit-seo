declare module 'SEO.svelte' {
    export interface SEOProps {
        title?: string;
        description?: string;
        keywords?: string;
        siteName?: string;
        index?: boolean;
    }

    export default class SEOComponent {
        $$prop_def: SEOProps;
    }
}