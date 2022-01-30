import { Direction } from "@react-types/shared";
import { ReactNode } from "react";
import { LocalizedStrings } from "@internationalized/message";
import { DateFormatter } from "@internationalized/date";
import { NumberFormatOptions } from "@internationalized/number";
interface Locale {
    /** The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale. */
    locale: string;
    /** The writing direction for the locale. */
    direction: Direction;
}
interface ProviderProps {
    /** Contents that should have the locale applied. */
    children: ReactNode;
    /** The locale to apply to the children. */
    locale?: string;
}
/**
 * Provides the locale for the application to all child components.
 */
export function I18nProvider(props: ProviderProps): JSX.Element;
/**
 * Returns the current locale and layout direction.
 */
export function useLocale(): Locale;
type FormatMessage = (key: string, variables?: {
    [key: string]: any;
}) => string;
/**
 * Handles formatting ICU Message strings to create localized strings for the current locale.
 * Automatically updates when the locale changes, and handles caching of messages for performance.
 * @param strings - A mapping of languages to strings by key.
 */
export function useMessageFormatter(strings: LocalizedStrings): FormatMessage;
interface DateFormatterOptions extends Intl.DateTimeFormatOptions {
    calendar?: string;
}
/**
 * Provides localized date formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the date formatter for performance.
 * @param options - Formatting options.
 */
export function useDateFormatter(options?: DateFormatterOptions): DateFormatter;
/**
 * Provides localized number formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the number formatter for performance.
 * @param options - Formatting options.
 */
export function useNumberFormatter(options?: NumberFormatOptions): Intl.NumberFormat;
/**
 * Provides localized string collation for the current locale. Automatically updates when the locale changes,
 * and handles caching of the collator for performance.
 * @param options - Collator options.
 */
export function useCollator(options?: Intl.CollatorOptions): Intl.Collator;
interface Filter {
    /** Returns whether a string starts with a given substring. */
    startsWith(string: string, substring: string): boolean;
    /** Returns whether a string ends with a given substring. */
    endsWith(string: string, substring: string): boolean;
    /** Returns whether a string contains a given substring. */
    contains(string: string, substring: string): boolean;
}
/**
 * Provides localized string search functionality that is useful for filtering or matching items
 * in a list. Options can be provided to adjust the sensitivity to case, diacritics, and other parameters.
 */
export function useFilter(options?: Intl.CollatorOptions): Filter;

//# sourceMappingURL=types.d.ts.map
