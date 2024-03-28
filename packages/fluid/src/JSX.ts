interface HTMLAttributes<T> {
  id?: string;
  class?: string;
  style?: Record<string, string>;
  "on:click"?: (event: MouseEvent) => void;
}

interface AnchorAttributes extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

interface DivAttributes extends HTMLAttributes<HTMLDivElement> {}

interface H1Attributes extends HTMLAttributes<HTMLHeadingElement> {}

interface PAttributes extends HTMLAttributes<HTMLParagraphElement> {}

interface ButtonAttributes extends HTMLAttributes<HTMLButtonElement> {}

interface SpanAttributes extends HTMLAttributes<HTMLSpanElement> {}

interface InputAttributes extends HTMLAttributes<HTMLInputElement> {}

interface FormAttributes extends HTMLAttributes<HTMLFormElement> {}

interface LabelAttributes extends HTMLAttributes<HTMLLabelElement> {}

interface SelectAttributes extends HTMLAttributes<HTMLSelectElement> {}

interface OptionAttributes extends HTMLAttributes<HTMLOptionElement> {}

interface TextareaAttributes extends HTMLAttributes<HTMLTextAreaElement> {}

interface ImgAttributes extends HTMLAttributes<HTMLImageElement> {}

interface VideoAttributes extends HTMLAttributes<HTMLVideoElement> {}

interface AudioAttributes extends HTMLAttributes<HTMLAudioElement> {}

interface SourceAttributes extends HTMLAttributes<HTMLSourceElement> {}

interface TrackAttributes extends HTMLAttributes<HTMLTrackElement> {}

interface CanvasAttributes extends HTMLAttributes<HTMLCanvasElement> {}

interface TableAttributes extends HTMLAttributes<HTMLTableElement> {}

interface CaptionAttributes extends HTMLAttributes<HTMLTableCaptionElement> {}

interface ColgroupAttributes extends HTMLAttributes<HTMLTableColElement> {}

interface ColAttributes extends HTMLAttributes<HTMLTableColElement> {}

interface TheadAttributes extends HTMLAttributes<HTMLTableSectionElement> {}

interface TbodyAttributes extends HTMLAttributes<HTMLTableSectionElement> {}

interface TfootAttributes extends HTMLAttributes<HTMLTableSectionElement> {}

interface TrAttributes extends HTMLAttributes<HTMLTableRowElement> {}

interface ThAttributes extends HTMLAttributes<HTMLTableCellElement> {}

interface TdAttributes extends HTMLAttributes<HTMLTableCellElement> {}

interface OlAttributes extends HTMLAttributes<HTMLOListElement> {}

interface UlAttributes extends HTMLAttributes<HTMLUListElement> {}

interface LiAttributes extends HTMLAttributes<HTMLLIElement> {}

interface FieldsetAttributes extends HTMLAttributes<HTMLFieldSetElement> {}

interface LegendAttributes extends HTMLAttributes<HTMLLegendElement> {}
