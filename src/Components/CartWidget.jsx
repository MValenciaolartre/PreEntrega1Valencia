import { ShoppingCart } from "lucide-react";

const CartWidget = ({total, link}) => {
  return (
    <>
      <div className="relative flex items-center">
        <span id='totalItems' className="bg-red-500 z-10 text-white text-xs px-2 py-1 rounded-full absolute bottom-6 left-6">{total}</span>
        <a href={link} className="px-3">
          <ShoppingCart width={25} className="hover:text-slate-500 duration-200"/>
          
        </a>
      </div>
    </>
  );
}

export default CartWidget;