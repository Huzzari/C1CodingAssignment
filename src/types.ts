export interface account {
    accountId: number,
    accountName: string,
    accountType: 'chequing' | 'savings',
    balance: string
}

export interface sumAndAverageResult {
    average: number | null;
    sum: number | null;
}