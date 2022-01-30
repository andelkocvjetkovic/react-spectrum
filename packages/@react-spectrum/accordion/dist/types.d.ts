import { DOMRef } from "@react-types/shared";
import { SpectrumAccordionProps } from "@react-types/accordion";
export function Accordion<T extends object>(props: SpectrumAccordionProps<T>, ref: DOMRef<HTMLDivElement>): JSX.Element;
export const Accordion: <T>(props: SpectrumAccordionProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReturnType<typeof Accordion>;
export { Item } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map
