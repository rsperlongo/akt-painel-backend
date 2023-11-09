export interface Invoice {
    id?: number;
    nomeAvalistaBoleto?: string,
    cpfCnpj?: string,
    nomeCliente?: string,
    nomeAvalistaPix: string;
    chavePix: string;
    cidade: string;
    codigoTransferencia: string;
}