export const compose = (...fns) => x => fns.reduceRight((y, f) => (y), x)
