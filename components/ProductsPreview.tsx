"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/Card";
import Button from "./ui/Button";
import { formatPrice } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "有机西红柿",
    category: "蔬菜",
    price: 12.99,
    rating: 4.8,
    image: "🍅",
    description: "新鲜采摘的有机西红柿，口感鲜美多汁",
  },
  {
    id: 8,
    name: "有机黄瓜",
    category: "蔬菜",
    price: 9.99,
    rating: 4.9,
    image: "🥒",
    description: "清脆爽口的有机黄瓜，水分充足",
  },
  {
    id: 14,
    name: "小西瓜",
    category: "水果",
    price: 6.99,
    rating: 4.7,
    image: "🍉",
    description: "迷你型西瓜，果肉红润多汁，甜度高",
  },
  {
    id: 15,
    name: "博洋9号甜瓜",
    category: "水果",
    price: 16.99,
    rating: 4.9,
    image: "🍈",
    description: "优质有机甜瓜，果肉厚实，香甜浓郁",
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            热门产品
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            精选优质瓜果蔬菜，新鲜直供，品质保证
          </p>
        </motion.div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-0">
                  {/* 产品图片 */}
                  <div className="bg-gradient-to-br from-[rgb(var(--theme-light))] to-white p-8 flex items-center justify-center">
                    <span className="text-7xl">{product.image}</span>
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

                    <p className="text-sm text-gray-600 mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[rgb(var(--theme-primary))]">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <Button variant="primary" size="sm" className="w-full group">
                        <Eye className="w-4 h-4 mr-2" />
                        查看详情
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/products">
            <Button size="lg" className="group">
              查看全部产品
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

