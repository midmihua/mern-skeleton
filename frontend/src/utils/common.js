export const toThousandSeparator = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
