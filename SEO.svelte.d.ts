/** @typedef {typeof __propDef.props}  SeoProps */
/** @typedef {typeof __propDef.events}  SeoEvents */
/** @typedef {typeof __propDef.slots}  SeoSlots */
export default class Seo extends SvelteComponent<{
    /** The title of the page.*/
    title?: string;
    /** The description of the website.*/
    description?: string;
    /** (optional) The SEO keywords to be used for search engine optimization. */
    keywords?: string;
    /** Current URL of the page. For resolving duplicate pages with SEO */
    canonical?: string;
    /** The name of the site.*/
    siteName?: string;
    /** Indicates whether the component should be indexed by search engines. 
    @default true */
    index?: boolean;
    /** Indicates whether Twitter meta tags should be generated.@default true */
    twitter?: boolean;
    /** Indicates whether og / OpenGraph meta tags should be generated @default true*/
    openGraph?: boolean;
    /** Indicates whether schema.org meta tags should be generated @default false */
    schemaOrg?: boolean;
    /** The type of jsonld schema (Person, Organisation, Create) @default Person,Organisation */
    schemaType?: string;
    /** JSON-LD schema.org data to be appended to existing jsonLd data */
    jsonld?: {};
    /** The URL of the image to be used for preview (twitter, discord image preview when your url is shared) */
    imageURL?: string;
    /** The logo image URL for SchemaOrg */
    logo?: string;
    /** Represents the author of the page */
    author?: string;
    /** An array of social media links for SchemaOrg */
    socials?: string[];
    /** The name to be used for SchemaOrg */
    name?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SeoProps = typeof __propDef.props;
export type SeoEvents = typeof __propDef.events;
export type SeoSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string;
        description?: string;
        keywords?: string;
        canonical?: string;
        siteName?: string;
        index?: boolean;
        twitter?: boolean;
        openGraph?: boolean;
        schemaOrg?: boolean;
        schemaType?: string;
        jsonld?: {};
        imageURL?: string;
        logo?: string;
        author?: string;
        socials?: string[];
        name?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
