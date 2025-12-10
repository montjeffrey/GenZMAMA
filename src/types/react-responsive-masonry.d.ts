declare module 'react-responsive-masonry' {
    import * as React from 'react';

    export interface ResponsiveMasonryProps {
        columnsCountBreakPoints?: { [key: number]: number };
        children?: React.ReactNode;
        className?: string;
    }

    export class ResponsiveMasonry extends React.Component<ResponsiveMasonryProps> { }

    export interface MasonryProps {
        children?: React.ReactNode;
        gutter?: string;
        className?: string;
        columnsCount?: number;
    }

    export default class Masonry extends React.Component<MasonryProps> { }
}
