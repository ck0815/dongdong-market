"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star,
  Leaf,
  Award,
  ArrowLeft,
  Package,
  Sun,
  Droplets,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { getProductById, getRelatedProducts, Product } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const productData = getProductById(id);
    if (productData) {
      setProduct(productData);
      setRelatedProducts(getRelatedProducts(id));
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">产品不存在</p>
          <Link href="/products">
            <Button>返回产品列表</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/products">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              返回产品列表
            </Button>
          </Link>
        </motion.div>

        {/* 产品主要信息 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 产品图片 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-[rgb(var(--theme-light))] to-white p-16 flex items-center justify-center rounded-xl">
                  <span className="text-[200px]">{product.image}</span>
                </div>
              </CardContent>
            </Card>

            {/* 认证标志 */}
            <div className="mt-6 flex flex-wrap gap-3">
              {product.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm"
                >
                  <Award className="w-5 h-5 text-[rgb(var(--theme-primary))]" />
                  <span className="text-sm font-medium text-gray-700">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 产品详细信息 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[rgb(var(--theme-light))] text-[rgb(var(--theme-primary))] px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
              {product.isOrganic && (
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <span>🌿</span>
                  <span>有机认证</span>
                </span>
              )}
              {product.stock < 20 && (
                <span className="bg-[rgb(var(--theme-accent))] text-white px-3 py-1 rounded-full text-sm font-medium">
                  库存紧张
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[rgb(var(--theme-accent))] text-[rgb(var(--theme-accent))]" />
                <span className="text-lg font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">
                库存：{product.stock} 件
              </span>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="bg-[rgb(var(--theme-light))] rounded-xl p-6 mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-[rgb(var(--theme-primary))]">
                  {formatPrice(product.price)}
                </span>
                <span className="text-lg text-gray-600">/ {product.unit}</span>
              </div>
              <p className="text-sm text-gray-600">
                {product.isOrganic ? "有机认证 · " : ""}严格品控 · 新鲜配送 · 品质保证
              </p>
            </div>

            {/* 产品特点 */}
            <div className="grid grid-cols-2 gap-4">
              {product.benefits.slice(0, 4).map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm"
                >
                  <Leaf className="w-5 h-5 text-[rgb(var(--theme-primary))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 营养价值 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">营养价值</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    基础营养成分
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">热量</span>
                      <span className="font-medium text-gray-900">
                        {product.nutrition.calories}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">蛋白质</span>
                      <span className="font-medium text-gray-900">
                        {product.nutrition.protein}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">碳水化合物</span>
                      <span className="font-medium text-gray-900">
                        {product.nutrition.carbs}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">膳食纤维</span>
                      <span className="font-medium text-gray-900">
                        {product.nutrition.fiber}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    维生素与矿物质
                  </h3>
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-3">主要维生素</p>
                    <div className="flex flex-wrap gap-2">
                      {product.nutrition.vitamins.map((vitamin, index) => (
                        <span
                          key={index}
                          className="bg-[rgb(var(--theme-light))] text-[rgb(var(--theme-primary))] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {vitamin}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-3">主要矿物质</p>
                    <div className="flex flex-wrap gap-2">
                      {product.nutrition.minerals.map((mineral, index) => (
                        <span
                          key={index}
                          className="bg-[rgb(var(--theme-light))] text-[rgb(var(--theme-primary))] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {mineral}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  健康益处
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-[rgb(var(--theme-primary))] rounded-full p-1 mt-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 生长环境 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">生长环境</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <CardContent className="p-6">
                <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Sun className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  气候条件
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.environment.climate}
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6">
                <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  土壤要求
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.environment.soil}
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6">
                <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Sun className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  光照需求
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.environment.sunlight}
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6">
                <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  水分需求
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.environment.waterRequirement}
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6">
                <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  生长周期
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.environment.growthPeriod}
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6">
                <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  产地来源
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.environment.origin}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* 相关产品推荐 */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              相关产品推荐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                >
                  <Card hover className="h-full">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-[rgb(var(--theme-light))] to-white p-8 flex items-center justify-center">
                        <span className="text-7xl">{relatedProduct.image}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-[rgb(var(--theme-primary))] bg-[rgb(var(--theme-light))] px-2 py-1 rounded">
                            {relatedProduct.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-[rgb(var(--theme-accent))] text-[rgb(var(--theme-accent))]" />
                            <span className="text-sm font-medium text-gray-700">
                              {relatedProduct.rating}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-[rgb(var(--theme-primary))]">
                            {formatPrice(relatedProduct.price)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}

