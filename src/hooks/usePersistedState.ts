import { Dispatch, SetStateAction, useEffect, useState } from 'react';

{/* --------------------------------------------------------------------------
| A resposta também passa o parâmetro T...
|A resposta dessa função é um array...
| Onde a primeira posição é uma variável no mesmo formato do parâmetro...
| E a segunda é uma função...
| <T> Aceita um formato que o tema vai ter...
| Response<T> fala que o retorno da função é uma resposta...
|-------------------------------------------------------------------------- */}

export type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

export function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);

        return (storageData)
            ? JSON.parse(storageData)
            : initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [ state, setState ];
}
