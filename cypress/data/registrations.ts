import { RegistrationPage } from "../support/pageObject/RegistrationPage";

export type FormData = Record<string, string | number | object>;

interface CadastroItem {
  interface: string;
  data: FormData;
  fillForm(data: FormData): void;
}

export const cadastros: CadastroItem[] = [
  {
    interface: "motoristas",
    data: {
      name: "João12",
      cpf: "00011122233",
      license: "00011122288",
      phone: "99999999999",
      description: "Observação Motorista",
      code: "0001",
      tag: "crachá 1234"
    },
    fillForm: RegistrationPage.fillForm  
  },
  {
    interface: "safras",
    data: {
      code: "0001",
      description: "Safra 2025/01"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "veiculos",
    data: {
      plateNumber: "ABC1214",
      vehicleType: {
        name: "Caminhão",
        maxLoad: "74000",
        description: "Bitrem"
      },
      code: "0001",
      description: "Observação Veiculo",
      year: "2022",
      axes: "9",
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "produtos",
    data: {
      name: "Milho1",
      code: "00011",
      description: "Observação Produto",
      variety: {
        tab: "varieties",
        description: "Milho Variety",
        code: "0001"
      }
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "operacoes",
    data: {
      code: "0001",
      description: "Observação Operação"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "lavouras",
    data: {
      code: "0001",
      description: "Observação Lavoura",
      fields: {
        tab: "fields",
        description: "Observação Campo",
        code: "0001"
      }
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "empresas",
    data: {
      code: "0001",
      description: "Empresa de Teste"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "transportadoras",
    data: {
      name: "Transportadora Teste",
      code: "0001",
      cnpj: "03.299.514/0001-88",
      description: "Observação Transportadora"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "parceiros",
    data: {
      tradeName: "Parceiro Teste",
      legalName: "PRC Teste",
      cnpj: "32.791.502/0001-74",
      ie: "555757038527",
      address: "Av. Antônio Frederico Ozanam, 217",
      city: "Canoas",
      state: "RS",
      code: "0001",
      description: "Observação Parceiros"
    },
    fillForm: RegistrationPage.fillForm 
  }
];
