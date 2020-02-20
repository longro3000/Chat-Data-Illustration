export type SortOrder = 'asc' | 'desc';

export type ClickSortHandleFunction = (value: SortOrder) => void;

export type ClickColumnHandleFunction = (value: string) => void;