export declare var $:any;

export enum ExamenType{
    "personal" = 1,
    "collective" = 2
}

export function addFirstZero(n) {
    let num = parseInt(n);
    return num < 10 ? '0' + n : n;
}