"use client";

import { motion } from "framer-motion";
import { Leaf, Truck, Shield, Heart, Award, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const features = [
  {
    icon: Leaf,
    title: "货源稳定",
    description: "与当地农户长期合作，货源充足稳定，品种齐全。",
  },
  {
    icon: Truck,
    title: "现货供应",
    description: "库存充足，当天下单当天装车，保证产品新鲜度。",
  },
  {
    icon: Shield,
    title: "品质保证",
    description: "严格的质量控制体系，专业分级检测，确保产品品质。",
  },
  {
    icon: Heart,
    title: "诚信经营",
    description: "公平交易，诚信为本，不压价不拖欠，让每笔交易放心。",
  },
  {
    icon: Award,
    title: "价格实惠",
    description: "源头直采，减少中间环节，批发价格实惠，量大更优。",
  },
  {
    icon: Clock,
    title: "快速结算",
    description: "验收合格后当场结算，支持多种支付方式，不拖欠货款。",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
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
            为什么选择我们
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            专业的农产品批发市场，为农民和批发商提供优质服务
          </p>
        </motion.div>

        {/* 特色网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

