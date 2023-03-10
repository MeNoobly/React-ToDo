import { IActionsContext } from '../types/types';
import { createContext } from "react";

export const ActionsContext = createContext<IActionsContext>({actions: [], setActions: () => {}});