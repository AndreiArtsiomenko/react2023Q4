import { createContext } from 'react';
import { PeopleType } from './types/types';

interface ContextType {
  people: PeopleType[];
  valueSearch: string;
}

export const Context = createContext<ContextType>({ people: [], valueSearch: '' });
