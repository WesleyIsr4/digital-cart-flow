const maskTypes = {
  cpf: () => '999.999.999-99',
  cnpj: () => '99.999.999/9999-99',
  cpfOrCnpj: (value: string) => (value.length > 11 ? '99.999.999/9999-99' : '999.999.999-99'),
  date: () => '99/99/9999',
  monthAndYear: () => '99/99',
  cep: () => '99999-999',
  day: () => '99',
  month: () => '99',
  year: () => '9999',
  cardNumber: () => '9999 9999 9999 9999',
  dateTime: () => '99/99/9999 99:99',
  phone: () => '(99) 99999-9999',
  cvv: () => '999',
}

export default maskTypes
