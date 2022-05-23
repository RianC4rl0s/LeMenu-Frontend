export const phoneMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1)$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};
