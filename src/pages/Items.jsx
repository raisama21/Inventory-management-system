import ItemList from "../components/UI/ItemList";

export default function Items() {
  return (
    <section>
      <div>
        <ul className="border border-[#eee]">
          <li className="py-4 border-b border-[#eee]">
            <div className="px-8 flex items-center justify-between">
              <p className="uppercase text-dark font-semibold text-sm tracking-wide">
                name
              </p>
              <p className="uppercase text-dark font-semibold text-sm tracking-wide">
                stock keeping unit
              </p>
              <p className="uppercase text-dark font-semibold text-sm tracking-wide">
                stock on hand
              </p>
              <p className="uppercase text-dark font-semibold text-sm tracking-wide">
                reorder level
              </p>
            </div>
          </li>

          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
          <ItemList name="item 1" sku="SKU 1" son={10} reorder={12} />
        </ul>
      </div>
    </section>
  );
}
