/** @typedef {import('./SEO').SEOProps}  SeoProps */
/** @typedef {typeof __propDef.events}  SeoEvents */
/** @typedef {typeof __propDef.slots}  SeoSlots */
export default class Seo extends SvelteComponent<SeoProps, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SeoProps = import('./SEO').SEOProps;
export type SeoEvents = typeof __propDef.events;
export type SeoSlots = typeof __propDef.slots;
//@ts-ignore
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: SeoProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export { SeoProps as SEOProps };
