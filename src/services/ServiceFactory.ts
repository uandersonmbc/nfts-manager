import ClientService from "./ClientService";
import ServerService from "./ServerService";
import Service from "./Service";

class ServiceFactory {
  private static instance: ServiceFactory;

  public static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      new ServiceFactory();
    }

    return ServiceFactory.instance;
  }

  constructor() {
    ServiceFactory.instance = this;
  }

  public getService(nextContext: any = null): Service {
    if (nextContext != null) {
      console.log("server service");
      return new ServerService(nextContext);
    }
    return {} as Service;
  }
}

export default ServiceFactory;
