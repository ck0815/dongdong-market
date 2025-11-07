"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Filter, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { products, categories } from "@/lib/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [organicFilter, setOrganicFilter] = useState("all"); // all, organic, regular
  const [sortBy, setSortBy] = useState("default");

  // 筛选产品
  const filteredProducts = products.filter((product) => {
    // 分类筛选
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    // 有机筛选
    if (organicFilter === "organic" && !product.isOrganic) {
      return false;
    }
    if (organicFilter === "regular" && product.isOrganic) {
      return false;
    }
    return true;
  });

  // 排序产品
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              供应产品
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              市场当前供应的优质农产品，货源充足，欢迎批发采购
            </p>
          </motion.div>

        {/* 筛选和排序 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* 分类筛选 */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900">分类</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? "bg-[rgb(var(--theme-primary))] text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* 有机筛选 */}
              <div className="flex items-center gap-2 mb-3 mt-4">
                <span className="font-semibold text-gray-900">产品类型</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setOrganicFilter("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    organicFilter === "all"
                      ? "bg-[rgb(var(--theme-primary))] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  全部
                </button>
                <button
                  onClick={() => setOrganicFilter("organic")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    organicFilter === "organic"
                      ? "bg-[rgb(var(--theme-primary))] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  🌿 有机产品
                </button>
                <button
                  onClick={() => setOrganicFilter("regular")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    organicFilter === "regular"
                      ? "bg-[rgb(var(--theme-primary))] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  普通产品
                </button>
              </div>
            </div>

            {/* 排序 */}
            <div>
              <label className="block font-semibold text-gray-900 mb-3">
                排序方式
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--theme-primary))] focus:border-transparent"
              >
                <option value="default">默认</option>
                <option value="price-asc">价格：低到高</option>
                <option value="price-desc">价格：高到低</option>
                <option value="rating">评分最高</option>
              </select>
            </div>
          </div>

          {/* 结果统计 */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              共找到 <span className="font-semibold text-gray-900">{sortedProducts.length}</span> 个产品
            </p>
          </div>
        </motion.div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-0">
                  {/* 产品图片 */}
                  <div className="bg-gradient-to-br from-[rgb(var(--theme-light))] to-white p-8 flex items-center justify-center relative">
                    <span className="text-7xl">{product.image}</span>
                    {product.isOrganic && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                        <span>🌿</span>
                        <span>有机</span>
                      </div>
                    )}
                    {product.stock < 20 && (
                      <div className="absolute top-3 right-3 bg-[rgb(var(--theme-accent))] text-white text-xs px-2 py-1 rounded-full font-medium">
                        库存紧张
                      </div>
                    )}
                  </div>

                  {/* 产品信息 */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-[rgb(var(--theme-primary))] bg-[rgb(var(--theme-light))] px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[rgb(var(--theme-accent))] text-[rgb(var(--theme-accent))]" />
                        <span className="text-sm font-medium text-gray-700">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-sm text-gray-600">批发价</span>
                        <span className="text-2xl font-bold text-[rgb(var(--theme-primary))]">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-gray-500">
                          / {product.unit}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        *实际价格以当日行情为准，量大从优
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <Link href={`/products/${product.id}`} className="col-span-2">
                        <Button variant="primary" size="sm" className="w-full group">
                          <Eye className="w-4 h-4 mr-2" />
                          查看详情
                        </Button>
                      </Link>
                    </div>

                    <div className="text-xs text-gray-500 space-y-1">
                      <p>当前库存：{product.stock} 件</p>
                      <p>产地：{product.environment.origin}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 空状态 */}
        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-600">暂无产品</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}

