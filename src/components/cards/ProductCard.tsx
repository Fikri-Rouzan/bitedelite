interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out relative max-w-sm mx-auto cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-6 text-left">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
          <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {product.price}
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-justify">
          {product.description}
        </p>
      </div>
    </div>
  );
}
