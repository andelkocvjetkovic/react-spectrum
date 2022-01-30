import { PaginationState } from "@react-stately/pagination";
interface PaginationAriaProps {
    value?: any;
    onPrevious?: (value: number, ...args: any) => void;
    onNext?: (value: number, ...args: any) => void;
}
export function usePagination(props: PaginationAriaProps, state: PaginationState): {
    prevButtonProps: {
        'aria-label': string;
        onPress: () => void;
        value?: any;
        onPrevious?: (value: number, ...args: any) => void;
        onNext?: (value: number, ...args: any) => void;
    };
    nextButtonProps: {
        'aria-label': string;
        onPress: () => void;
        value?: any;
        onPrevious?: (value: number, ...args: any) => void;
        onNext?: (value: number, ...args: any) => void;
    };
    textProps: {
        onKeyDown: (e: any) => void;
        value?: any;
        onPrevious?: (value: number, ...args: any) => void;
        onNext?: (value: number, ...args: any) => void;
    };
};

//# sourceMappingURL=types.d.ts.map
