export interface Invoice {
    nomeCliente?: string
    valor: string
    dataVencimento: string
    codigoCliente: string
    cpfCnpj?: string
    codigoBarrasPix?: string
    descricao?: string
    nomeAvalistaBoleto?: string
    tipo?: 'bo' | 'px'
    nomeAvalistaPix?: string
    cidade?: string
  }