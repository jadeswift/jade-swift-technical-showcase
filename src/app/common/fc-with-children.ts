import {FC, ReactNode} from "react";

export type FCWithChildren<TProps = Record<string, unknown>> = FC<
    TProps & { children?: ReactNode }
>;