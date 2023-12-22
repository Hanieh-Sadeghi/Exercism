export const sum = (factors, limit) => {
    const isDivisor = (n) => factors.some((factor) => n % factor === 0);
    const multipliers = Array.from(Array(limit).keys()).filter(isDivisor);
    return multipliers.reduce((res, mult) => (res += mult), 0);
};
