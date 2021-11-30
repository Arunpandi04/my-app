export class Response {
  public Success(data: any, token: any,message:string) {
    return {
      success: true,
      statusCode: 200,
      data: data,
      token: token,
      message:message
    };
  }
  public error(message: any) {
    return {
      success: false,
      statusCode: 400,
      message: message,
    };
  }
  public notFound() {
    return {
      success: true,
      statusCode: 401,
      data: null,
      message: "Not found",
    };
  }

  public badRequest(message: string) {
    return {
      success: false,
      statusCode: 404,
      data: null,
      message: message
    };
  };

}