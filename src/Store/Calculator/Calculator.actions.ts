export const sum = (number_a: number, number_b: number) => {
    return {
        type: 'SUM',
        payload: [number_a, number_b]
    }
}