export interface Invoice {
    id?: number;
    nomeCliente?: string
    valor: string
    dataVencimento: string
    codigoCliente: string
    cpfCnpj?: string
    codigoBarrasPix?: string
    descricao?: string
    nomeAvalistaBoleto?: string
    tipo?: string
    nomeAvalistaPix?: string
    cidade?: string
  }