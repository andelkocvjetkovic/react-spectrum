import { PaginationProps } from "@react-types/pagination";
export interface PaginationState {
    onChange?: (val: string | number) => void;
    onDecrement?: () => void;
    onIncrement?: () => void;
    ref?: {
        current: number;
    };
    value?: any;
}
export function usePaginationState(props: PaginationProps): PaginationState;

//# sourceMappingURL=types.d.ts.map
