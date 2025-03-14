"use client"

import { Button } from "@/components/ui/button";
import { OrderService } from "@/services/api/order.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { getTotalQuantity, orderStatusesToReadableSentence } from "@/services/utility/utility.service";
import dayjs from "dayjs";
import SkeletonType2 from "@/components/skeleton/skeleton-type2";
import { useEffect, useState } from "react";

export default function OrdersPage() {

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true, true);

  // Orders
  const [orderConfig, setOrderConfig] = useState({
    status: 'processing,pending,on-hold,completed,cancelled,refunded,failed'
  }); // page: 1, per_page: 10
  const [orders, setOrders] = useState<any[] | null>(null);

  const getOrders = async () => {
    setOrders(null);

    OrderService.Get(orderConfig, axiosInstanceWithLoader)
      .then(response => {
        setOrders(response || []);
      })
      .catch(error => {
        console.error(error);
      });
  };

  function onOrderCancel(orderId: number) {
    OrderService.Cancel(orderId, axiosInstanceWithLoader)
      .then(response => {
        getOrders();
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderConfig]);

  return (
    <div>
      {/* Desktop View */}
      { orders === null && <SkeletonType2/>}
      {
        orders !== null &&
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">ORDER</th>
                <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">DATE</th>
                <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">STATUS</th>
                {/* <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">DELIVERY DETAILS</th> */}
                <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">TOTAL</th>
                <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 pl-[100px]">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr className="border-b" key={index}>
                  <td className="px-4 py-4 text-[14px] font-semibold">#{order.id}</td>
                  <td className="px-4 py-4 text-black/60 text-[14px]">{dayjs(order.date_created).format("MMMM D, YYYY")}</td>
                  <td className="px-4 py-4 text-black/60 text-[14px]">{orderStatusesToReadableSentence(order.status)}</td>
                  {/* <td className="px-4 py-4 text-black/60 text-[14px]">
                  <div>Delivery Date: February 21, 2025</div>
                  <div>Delivery Time: 02:00 PM - 06:00 PM</div>
                </td> */}
                  <td className="px-4 py-4">
                    <span className="text-[#ff9666]">{order.total} {order.currency_symbol}</span> for {getTotalQuantity(order?.line_items) || 0} items
                  </td>
                  <td className="px-4 py-4 pl-[100px] flex justify-end gap-2">
                    {/* <span>status: {order.status}</span><br></br>
                    <span>{order.needs_payment ? 'needs_payment' : 'no needs_payment'}</span><br></br>
                    <span>{order.needs_processing ? 'needs_processing' : 'no needs_processing'}</span><br></br> */}
                    {
                      (order.status === 'failed' || order.status === 'pending') && getTotalQuantity(order?.line_items) > 0 &&
                      <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                        PAY
                      </Button>
                    }
                    {
                      <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white ml-2 mb-2">
                        VIEW
                      </Button>
                    }
                    {
                      // (order.status === 'processing' || order.status === 'pending') && order.is_editable &&
                      (order.status === 'failed' || order.status === 'pending') && getTotalQuantity(order?.line_items) > 0 &&
                      <Button onClick={() => onOrderCancel(order.id)} size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                        CANCEL
                      </Button>
                    }
                  </td>
                </tr>
              ))}
              {/* <tr className="border-b">
              <td className="px-4 py-4 text-[14px]">#27815</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">February 11, 2025</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">Failed</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">
                <div>Delivery Date: February 21, 2025</div>
                <div>Delivery Time: 02:00 PM - 06:00 PM</div>
              </td>
              <td className="px-4 py-4">
                <span className="text-[#ff9666]">36,000 KD</span> for 5 items
              </td>
              <td className="px-4 py-4 pl-[100px]">
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                  PAY
                </Button>
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white ml-2 mb-2">
                  VIEW
                </Button>
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                  CANCEL
                </Button>
              </td>
            </tr> */}
            </tbody>
          </table>
        </div>
      }

      {/* Mobile View */}
      <div className="md:hidden space-y-4 py-4">
        <div className="flex justify-between items-center text-[12.5px]">
          <span className="text-gray-800  font-[600]">DATE</span>
          <span>February 11, 2025</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 text-[12.5px] font-[600]">STATUS</span>
          <span className="text-[12.5px]">Failed</span>
        </div>
        <div className="flex justify-between items-start text-[12.5px]">
          <span className="text-gray-800  font-[600]">DELIVERY DETAILS</span>
          <div className="text-right">
            <div>Delivery Date: February 21, 2025</div>
            <div>Delivery Time: 02:00 PM - 06:00 PM</div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[14px]">
          <span className="text-gray-800 text-[12.5px] font-[600]">TOTAL</span>
          <span>
            <span className="text-[#ff9666]">36,000 KD</span> for 5 items
          </span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-gray-800 text-[12.5px] font-[600]">ACTIONS</span>
          <div className="text-right">
            <div className="flex justify-end gap-2">
              <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                PAY
              </Button>
              <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                VIEW
              </Button>
              <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                CANCEL
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

