import { createContext, useState } from 'react';

const [pageIndex, setPageIndex] = useState(0);
export const pageIndexContext = createContext(pageIndex);
export const SetGlobalPageIndex = (index: number) => {
    setPageIndex(index);
}

