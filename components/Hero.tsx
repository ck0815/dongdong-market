"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Heart, Award } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[rgb(var(--theme-light))] to-white py-20 md:py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(var(--theme-primary))] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(var(--theme-secondary))] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <Leaf className="w-5 h-5 text-[rgb(var(--theme-primary))]" />
              <span className="text-sm font-medium text-gray-700">
                优质农产品批发
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              连接农田与市场
              <br />
              <span className="text-[rgb(var(--theme-primary))]">
                专业农产品批发交易市场
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              我们从农民手中统一收购优质农产品，经过严格品控和分级，
              为批发商提供稳定、优质的货源。公平价格，诚信经营，让农民增收，让批发商放心。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/supply">
                <Button size="lg" className="group">
                  我要供货
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/purchase">
                <Button variant="secondary" size="lg" className="group">
                  我要采购
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  了解市场
                </Button>
              </Link>
            </div>

            {/* 特色标签 */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-md inline-block mb-2">
                  <Leaf className="w-6 h-6 text-[rgb(var(--theme-primary))]" />
                </div>
                <p className="text-sm font-medium text-gray-700">统一收购</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-md inline-block mb-2">
                  <Award className="w-6 h-6 text-[rgb(var(--theme-primary))]" />
                </div>
                <p className="text-sm font-medium text-gray-700">严格品控</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-md inline-block mb-2">
                  <Heart className="w-6 h-6 text-[rgb(var(--theme-primary))]" />
                </div>
                <p className="text-sm font-medium text-gray-700">诚信交易</p>
              </div>
            </div>
          </motion.div>

          {/* 右侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* 主图片占位 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--theme-primary))] to-[rgb(var(--theme-secondary))] rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Leaf className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-semibold">新鲜有机蔬果</p>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-6 -right-6 bg-[rgb(var(--theme-accent))] text-white px-6 py-3 rounded-full shadow-lg font-bold">
                新品上市
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-3 rounded-full shadow-lg font-bold text-[rgb(var(--theme-primary))]">
                限时优惠
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

