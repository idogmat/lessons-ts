export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}
export type ChangeCurrentCurrencyType = ReturnType<typeof СhangeCurrentCurrencyAC>
export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>
export type ChangeAction = ReturnType<typeof ChangeActionAC>
export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): any => {
return {type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,amountOfBYN,amountOfCurrency}as const
};

export const ChangeActionAC = (isBuying: boolean): any => {
    return {type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,isBuying}as const
};

export const СhangeCurrentCurrencyAC = (currentCurrency: string): any => {
return {type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,currentCurrency}as const
};


