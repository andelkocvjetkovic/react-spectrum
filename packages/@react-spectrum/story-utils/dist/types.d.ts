import React, { Component } from "react";
export class ErrorBoundary extends Component<{
    message: string;
}, {
    hasError: boolean;
}> {
    constructor(props: any);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export function generatePowerset(states: Array<object>, exclude?: (merged: any) => boolean): any[];

//# sourceMappingURL=types.d.ts.map
