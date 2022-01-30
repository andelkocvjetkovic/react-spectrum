import { AriaLabelingProps, CollectionBase, DOMProps, DOMRef, LoadingState, MultipleSelection, SpectrumSelectionProps, StyleProps } from "@react-types/shared";
import { ReactElement } from "react";
interface ListViewProps<T> extends CollectionBase<T>, DOMProps, AriaLabelingProps, StyleProps, MultipleSelection, SpectrumSelectionProps {
    /**
     * Sets the amount of vertical padding within each cell.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    isQuiet?: boolean;
    loadingState?: LoadingState;
    renderEmptyState?: () => JSX.Element;
    transitionDuration?: number;
    onAction?: (key: string) => void;
}
export const ListView: <T>(props: ListViewProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export { Item } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map
