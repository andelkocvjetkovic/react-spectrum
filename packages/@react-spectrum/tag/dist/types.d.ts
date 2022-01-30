import { Removable } from "@react-types/shared";
import { SpectrumTagGroupProps, SpectrumTagProps } from "@react-types/tag";
interface TagGroupContextValue extends Removable<any, void> {
    isDisabled?: boolean;
    isFocused?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    validationState?: 'valid' | 'invalid';
    role?: 'gridcell';
}
export function useTagGroupProvider(): TagGroupContextValue;
export const TagGroup: (props: SpectrumTagGroupProps) => JSX.Element;
export const Tag: (props: SpectrumTagProps) => JSX.Element;

//# sourceMappingURL=types.d.ts.map
