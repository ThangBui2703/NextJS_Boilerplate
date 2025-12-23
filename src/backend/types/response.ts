export type Response = {
  success: boolean;
  message: string;
  data?: unknown;
  error?: Record<string, string>;
};
