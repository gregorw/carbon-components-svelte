import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type RestProps = SvelteHTMLElements["div"];

export interface TooltipProps extends RestProps {
  /**
   * Set the alignment of the tooltip relative to the icon
   * @default "bottom"
   */
  align?:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "left-bottom"
    | "left-top"
    | "right"
    | "right-bottom"
    | "right-top";

  /**
   * Set to `true` to open the tooltip
   * @default false
   */
  open?: boolean;

  /**
   * Specify the icon to render for the tooltip button.
   * Default to `<Information />`
   * @default undefined
   */
  icon?: typeof import("svelte").SvelteComponent<any>;

  /**
   * Specify the ARIA label for the tooltip button
   * @default ""
   */
  iconDescription?: string;

  /**
   * Specify the icon name attribute
   * @default ""
   */
  iconName?: string;

  /**
   * Set the button tabindex
   * @default "0"
   */
  tabindex?: string;

  /**
   * Set an id for the tooltip
   * @default "ccs-" + Math.random().toString(36)
   */
  tooltipId?: string;

  /**
   * Set an id for the tooltip button
   * @default "ccs-" + Math.random().toString(36)
   */
  triggerId?: string;

  /**
   * Set the tooltip button text
   * This is deprecated. Use default slot instead
   * @default ""
   */
  triggerText?: string;

  /**
   * Obtain a reference to the trigger text HTML element
   * @default null
   */
  ref?: null | HTMLDivElement;

  /**
   * Obtain a reference to the tooltip HTML element
   * @default null
   */
  refTooltip?: undefined;

  /**
   * Obtain a reference to the icon HTML element
   * @default null
   */
  refIcon?: null | HTMLDivElement;

  [key: `data-${string}`]: any;
}

export default class Tooltip extends SvelteComponentTyped<
  TooltipProps,
  { open: CustomEvent<null>; close: CustomEvent<null> },
  { default: {}; icon: {}; triggerText: {} }
> {}
