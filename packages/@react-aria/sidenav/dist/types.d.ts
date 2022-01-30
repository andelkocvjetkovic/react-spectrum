import { AriaSideNavProps, SpectrumSideNavItemProps } from "@react-types/sidenav";
import { HTMLAttributes, RefObject, AnchorHTMLAttributes } from "react";
import { KeyboardDelegate } from "@react-types/shared";
import { TreeState } from "@react-stately/tree";
interface SideNavAriaOptions<T> extends AriaSideNavProps<T> {
    layout?: KeyboardDelegate;
}
interface SideNavAria {
    navProps: HTMLAttributes<HTMLDivElement>;
    listProps: HTMLAttributes<HTMLUListElement>;
}
export function useSideNav<T>(props: SideNavAriaOptions<T>, state: TreeState<T>, ref: RefObject<HTMLElement>): SideNavAria;
interface SideNavItemAria {
    listItemProps: HTMLAttributes<HTMLDivElement>;
    listItemLinkProps: AnchorHTMLAttributes<HTMLAnchorElement>;
}
export function useSideNavItem<T>(props: SpectrumSideNavItemProps<T>, state: TreeState<T>, ref: RefObject<HTMLAnchorElement | null>): SideNavItemAria;

//# sourceMappingURL=types.d.ts.map
