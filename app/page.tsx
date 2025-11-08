"use client";
import { ProductCard } from "./components/ProductCard";
import { products } from "./lib/mock-data";
import { FilterPanel } from "./components/FilterPanel";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { HEADER_HEIGHT } from "./lib/constants";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filters: {
    categories: string[];
    brands: string[];
    priceRange: [number, number];
  }) => {
    let tempProducts = products;

    if (filters.categories.length > 0) {
      tempProducts = tempProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.brands.length > 0) {
      tempProducts = tempProducts.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    if (filters.priceRange) {
      tempProducts = tempProducts.filter((product) => {
        const price = parseFloat(product.price.replace("$", ""));
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
    }

    setFilteredProducts(tempProducts);
  };

  return (
    <div className="flex h-screen" style={{ paddingTop: HEADER_HEIGHT }}>
      <div className="hidden md:block">
        <FilterPanel onFilter={handleFilter} />
      </div>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold underline text-red-500">
            lets build a wallmart
          </h1>
          <div className="md:hidden">
            <Sidebar onFilter={handleFilter} />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
