import { FcPieChart } from "react-icons/fc";

export default function Dashboard() {
  return (
    <section>
      <div>
        <header>
          <div className="px-8 border-b border-[#eee] bg-white">
            <h2 className="py-5 text-dark font-extralight text-lg cursor-pointer">
              Dashboard
            </h2>
          </div>
        </header>

        <div className="p-8 mb-12 flex items-center justify-between bg-light-bg">
          <div>
            <h3 className="text-lg font-light text-dark mb-5">
              Sales Activity
            </h3>

            <div className="flex items-center gap-6">
              <div className="pt-7 pb-2 px-7 text-center font-light rounded-lg border border-[#dae1e4] bg-white">
                <h4 className="text-4xl text-accent">3075</h4>
                <p className="text-text text-xs mb-4">Qty</p>
                <p className="uppercase text-text1 text-xs">to be packed</p>
              </div>

              <div className="pt-7 pb-2 px-7 text-center font-light rounded-lg border border-[#dae1e4] bg-white">
                <h4 className="text-4xl text-red">43</h4>
                <p className="text-text text-xs mb-4">Pkgs</p>
                <p className="uppercase text-text1 text-xs">to be shipped</p>
              </div>

              <div className="pt-7 pb-2 px-7 text-center font-light rounded-lg border border-[#dae1e4] bg-white">
                <h4 className="text-4xl text-green">25</h4>
                <p className="text-text text-xs mb-4">Pkgs</p>
                <p className="uppercase text-text1 text-xs">to be delivered</p>
              </div>

              <div className="pt-7 pb-2 px-7 text-center font-light rounded-lg border border-[#dae1e4] bg-white">
                <h4 className="text-4xl text-yellow">4767</h4>
                <p className="text-text text-xs mb-4">Qty</p>
                <p className="uppercase text-text1 text-xs">to be invoiced</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light text-dark mb-5">
              Inventory Summary
            </h3>

            <div>
              <div className="mb-4 py-4 px-4 border border-[#dae1e4] rounded-lg text-text bg-white uppercase">
                <p className="flex justify-between">
                  quantity in hand
                  <span className="pl-3 border-l border-text1/50 text-dark">
                    5821
                  </span>
                </p>
              </div>
              <div className="py-4 px-4 border border-[#dae1e4] rounded-lg text-text bg-white uppercase">
                <p className="flex justify-between">
                  quantity to be recived
                  <span className="ml-3 pl-3 border-l border-text1/50 text-dark">
                    11675
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[32rem,_1fr] mb-12">
          <div className="max-w-lg mx-8 border border-[#ececec]">
            <div>
              <h2 className="pl-8 py-2 border-b border-[#ececec] text-dark text-xs font-semibold uppercase">
                Product Details
              </h2>
            </div>

            <div className="flex items-start">
              <div className="px-8 py-5 w-[60%] border-r border-[#ececec]">
                <p className="mb-6">
                  Low Stock Items <span>25</span>
                </p>
                <p className="mb-6">
                  All item group <span>49</span>
                </p>
                <p className="mb-6">
                  All items <span>360</span>
                </p>
              </div>

              <div className="px-8 py-5 w-[40%]">
                <h3> Active Items </h3>
                <FcPieChart className="h-[114px] w-[114px]" />
              </div>
            </div>
          </div>

          <div className="border border-[#ececec]">
            <div className="flex justify-between pl-8 py-2 border-b border-[#ececec]">
              <h2 className="text-dark text-xs font-semibold uppercase">
                top selling item
              </h2>

              <select name="date" id="date" className="bg-white">
                <option value="this-month">This Month</option>
              </select>
            </div>
            <p className="text-center">
              No items were invoiced in this time frame
            </p>
          </div>
        </div>

        <div className="max-w-lg mx-8 border border-[#ececec] mb-12">
          <div className="flex justify-between px-8 py-2 border-b border-[#ececec]">
            <h2 className="text-dark text-xs font-semibold uppercase">
              purchase order
            </h2>

            <select name="date" id="date" className="bg-white">
              <option value="this-month">This Month</option>
            </select>
          </div>

          <div className="px-8 py-4 text-center">
            <div className="mb-12">
              <h4 className="font-light text-dark">Quantity order</h4>
              <p className="text-accent text-2xl">800.000</p>
            </div>

            <div>
              <h4 className="font-light text-dark">Total cost</h4>
              <p className="text-accent text-2xl">$150,811.084</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
