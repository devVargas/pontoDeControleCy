interface BasicDevice {
  pane: string;
  ip: string;
  port: string;
};

interface Tower {
  pane: string;
  ip1: string;
  port1: string;
  ip2: string;
  port2: string;
};

export type Device = BasicDevice | Tower;

export interface General {
  type: string;
  name: string;
  device: Device[]
};

export const scale: General = {
  type: "Balança",
  name: "Balança Integrada",
  device: [
    {
      pane: "weighing",
      ip: "127.0.0.1",
      port: "30000",
    },
    {
      pane: "A",
      ip1: "127.0.0.1",
      port1: "30050",
      ip2: "127.0.0.1",
      port2: "30010"
    },
    {
      pane: "B",
      ip1: "127.0.0.1",
      port1: "30060",
      ip2: "127.0.0.1",
      port2: "30020"
    }
  ]
};

export const concierge: General = {
  type: "Interno",
  name: "Portaria Integrada",
  device: [
    {
      pane: "shared",
      ip: "127.0.0.1",
      port: "30011"
    },
    {
      pane: "A",
      ip1: "127.0.0.1",
      port1: "30051",
      ip2: "192.168.130.127",
      port2: "23"
    }
  ]
};

export const waitingRoom: General = {
  type: "Interno",
  name: "Sala de Espera",
  device: []
};

// export const camera = {
//   ip1: "192.168.130.239",
//   port1: "80",
//   ip2: "192.168.130.235",
//   port2: "80"
// };