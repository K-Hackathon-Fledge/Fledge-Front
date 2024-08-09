export type CommonResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type CommonError = {
  errorCode: string;
  message: string;
  success: boolean;
};
