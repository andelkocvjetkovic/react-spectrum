import { ToggleProps } from "@react-types/checkbox";
export interface ToggleState {
    /** Whether the toggle is selected. */
    readonly isSelected: boolean;
    /** Updates selection state. */
    setSelected(isSelected: boolean): void;
    /** Toggle the selection state. */
    toggle(): void;
}
/**
 * Provides state management for toggle components like checkboxes and switches.
 */
export function useToggleState(props?: ToggleProps): ToggleState;

//# sourceMappingURL=types.d.ts.map