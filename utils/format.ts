/** `399` → `$399`. Whole dollars unless the amount has cents. */
export function formatPrice(amount: number, currency = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    }).format(amount)
}
