import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";

export const OrderService  = {
  async GetById(orderId: number, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any> {
    
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const ordersUrl = `${ApiRoutes.Order.GetById}/${orderId}`;

      const response = await axiosInstance.get<any>(ordersUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async Get(query: Record<string, any> = {}, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any> {
    
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';
      const ordersUrl = `${ApiRoutes.Order.Get}${queryParams}`;

      const response = await axiosInstance.get<any>(ordersUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async Cancel(orderId: number, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any> {
    
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const ordersUrl = `${ApiRoutes.Order.Cancel}/${orderId}`;

      const response = await axiosInstance.patch<any>(ordersUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
