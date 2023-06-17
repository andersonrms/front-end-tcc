export const isCPFValid = (cpf: string): boolean => {
  const onlyDigits: string = cpf.replace(/\s|\W|\D/g, '');
  if (
    onlyDigits
      .split('')
      .reduce((acc: boolean, d: string, i: number, arr: string[]) => {
        if (!acc) return acc;
        if (i === 0) return acc;
        return d === arr[i - 1];
      }, true)
  )
    return false;

  const sumDigits = onlyDigits
    .split('')
    .slice(0, 9)
    .map((n: string) => parseInt(n, 10))
    .reduce((acc: number, num: number, i: number) => acc + num * (10 - i), 0);

  const r1: number = (sumDigits * 10) % 11;
  const ident1 = r1 === 10 || r1 === 11 ? 0 : r1;

  if (ident1 !== parseInt(onlyDigits.charAt(9), 10)) return false;
  const sumDigits2 = onlyDigits
    .split('')
    .slice(0, 10)
    .map((n: string) => parseInt(n, 10))
    .reduce((acc: number, num: number, i: number) => acc + num * (11 - i), 0);
  const r2: number = (sumDigits2 * 10) % 11;
  const ident2 = r2 === 10 || r2 === 11 ? 0 : r2;
  if (ident2 !== parseInt(onlyDigits.charAt(10), 10)) return false;

  return true;
};

export const cpfMask = (value: string): string =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');

export const phoneMask = (value: string): string =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})/, '$1-$2');
