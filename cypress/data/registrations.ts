import { RegistrationPage } from "../support/pageObject/RegistrationPage";

interface CadastroItem {
  interface: string;
  data: Record<string, string | number | object>;
  fillForm: (data: Record<string, string | number | object>) => void;
}

export const cadastros: CadastroItem[] = [
  {
    interface: "motoristas",
    data: {
      tag: "crachá 1234",
      description: "Observação Motorista",
      name: "João12",
      cpf: "00011122233",
      code: "0001",
      phone: "99999999999",
      license: "00011122288"
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
      code: "0001",
      description: "Observação Veiculo",
      plateNumber: "ABC1214",
      year: "2022",
      vehicleType: {
        name: "Caminhão",
        description: "Bitrem",
        maxLoad: "74000"
      },
      axes: "9"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "produtos",
    data: {
      name: "Milho",
      description: "Observação Produto",
      code: "0001",
      productType: {
        code: "0001",
        description: "Milho Variety",
        fillForm: RegistrationPage.fillForm 
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
      description: "Observação Lavoura"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "campo",
    data: {
      code: "0001",
      description: "Talhão 01/1"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "filiais",
    data: {
      code: "0001",
      description: "Empresa de Teste"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "transportadoras",
    data: {
      code: "0001",
      description: "Observação Transportadora",
      name: "Transportadora Teste",
      cnpj: "03.299.514/0001-88"
    },
    fillForm: RegistrationPage.fillForm 
  },
  {
    interface: "business",
    data: {
      code: "0001",
      description: "Observação Parceiros",
      tradeName: "Parceiro Teste",
      legalName: "PRC Teste",
      cnpj: "32.791.502/0001-74",
      ie: "555757038527",
      address: "Av. Antônio Frederico Ozanam, 217",
      city: "Canoas",
      state: "RS",
    },
    fillForm: RegistrationPage.fillForm 
  }
];