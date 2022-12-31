export default function ItemList(props) {
  return (
    <li className="py-4 border-b border-[#eee]">
      <div className="px-8 flex items-center justify-between">
        <h2 className="uppercase text-dark font-semibold text-sm tracking-wide text-left">
          {props.name}
        </h2>
        <h2 className="uppercase text-dark font-semibold text-sm tracking-wide text-left">
          {props.sku}
        </h2>
        <h2 className="uppercase text-dark font-semibold text-sm tracking-wide text-left">
          {props.son}
        </h2>
        <h2 className="uppercase text-dark font-semibold text-sm tracking-wide text-left">
          {props.reorder}
        </h2>
      </div>
    </li>
  );
}
