import { cadastros } from "./registrations";
import { route } from "./routes";

export const acess = [

  {
    tag: "123456",
    placeHolder: {
      plate: "Veículo",
      driver: "Motorista",
      product: "Produto"
    }
  },
  {
    conferenceButton: { 
      modulo1: "Não Conferir", 
      modulo2: "Peso Bruto (Caminhão + Carga)", 
      modulo3: "Peso Subtotal (Apenas Carga)" ,
      modulo4: "Peso Liquido (Carga - Descontos)"
    }
  },
  {
    route: route.nome,
    vehicle: String(cadastros.find(item => item.interface === "veiculos")?.data.plateNumber),
    driver: String(cadastros.find(item => item.interface === "motoristas")?.data.name),
    product: String(cadastros.find(item => item.interface === "produtos")?.data.name)
  }
  
];