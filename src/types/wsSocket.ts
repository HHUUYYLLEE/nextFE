export interface WsSocketMessage {
  event: string;
  data: string | object | number;
}
