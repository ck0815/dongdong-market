"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  Phone,
  MapPin,
  Truck,
  Package,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const purchaseSteps = [
  {
    step: "1",
    title: "联系洽谈",
    description: "电话或到市场实地考察，了解产品种类、品质和价格",
    icon: Phone,
  },
  {
    step: "2",
    title: "查看货品",
    description: "查看样品和库存，确认产品品质是否符合要求",
    icon: Package,
  },
  {
    step: "3",
    title: "协商价格",
    description: "根据采购量、付款方式等协商价格，量大从优",
    icon: DollarSign,
  },
  {
    step: "4",
    title: "签订合同",
    description: "大宗采购可签订供货合同，保障长期稳定供应",
    icon: FileText,
  },
  {
    step: "5",
    title: "选货装车",
    description: "现场选货、称重装车，或由市场统一配货",
    icon: Truck,
  },
  {
    step: "6",
    title: "结算付款",
    description: "按约定方式结算，支持现金、转账等多种支付方式",
    icon: Clock,
  },
];

const advantages = [
  {
    icon: Package,
    title: "货源充足",
    description: "与多个产地合作，货源稳定充足，品种齐全，满足各类需求",
  },
  {
    icon: Shield,
    title: "品质保证",
    description: "严格品控，所有产品经过专业分级和检测，品质有保障",
  },
  {
    icon: DollarSign,
    title: "价格实惠",
    description: "源头直采，减少中间环节，价格实惠，量大更优惠",
  },
  {
    icon: Truck,
    title: "物流便捷",
    description: "交通便利，可协助安排配送，解决物流难题",
  },
  {
    icon: Clock,
    title: "快速供货",
    description: "库存充足，现货供应，急单也能快速响应",
  },
  {
    icon: Users,
    title: "长期合作",
    description: "建立长期合作关系，优先供货，价格更优，服务更好",
  },
];

const services = [
  {
    title: "产品分级服务",
    items: [
      "专业分级：按大小、品质分级，满足不同需求",
      "定制服务：可按客户要求进行特殊分级",
      "标准统一：确保每批货品质量稳定一致",
    ],
  },
  {
    title: "包装配送服务",
    items: [
      "灵活包装：提供散装、箱装、袋装等多种选择",
      "代为包装：可按要求进行定制包装",
      "配送服务：可协助安排运输配送到指定地点",
    ],
  },
  {
    title: "质量检测服务",
    items: [
      "农残检测：所有产品均经过农残检测",
      "有机认证：部分产品具有有机认证",
      "检测报告：可提供第三方检测报告",
    ],
  },
];

const priceInfo = [
  {
    title: "价格优势",
    content: "批发价格比零售价低30-50%，量大从优，长期合作享受更多优惠。",
  },
  {
    title: "起批量",
    content: "蔬菜类最低100斤起批，水果类最低50斤起批，混批也可以。",
  },
  {
    title: "结算方式",
    content: "支持现金、转账、支票等多种支付方式，长期客户可商议账期。",
  },
];

export default function PurchasePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[rgb(var(--theme-light))] to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              采购指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              东东瓜果蔬菜市场欢迎各地批发商前来采购，货源充足，品质优良，价格实惠
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  联系采购
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  查看产品
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 采购流程 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              采购流程
            </h2>
            <p className="text-lg text-gray-600">
              简单快捷，省心省力
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {purchaseSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {index < purchaseSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-[rgb(var(--theme-light))]" />
                )}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[rgb(var(--theme-primary))] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <Card className="ml-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[rgb(var(--theme-light))] p-3 rounded-lg">
                        <step.icon className="w-6 h-6 text-[rgb(var(--theme-primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 采购优势 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              采购优势
            </h2>
            <p className="text-lg text-gray-600">
              选择我们，让采购更轻松
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <advantage.icon className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 市场服务 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              市场服务
            </h2>
            <p className="text-lg text-gray-600">
              专业服务，让采购更放心
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b-2 border-[rgb(var(--theme-primary))]">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[rgb(var(--theme-primary))] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 价格信息 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              价格与结算
            </h2>
            <p className="text-lg text-gray-600">
              透明公开，诚信交易
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {priceInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-4">
              具体价格请联系市场，我们会根据当日行情给出最优惠的价格
            </p>
            <Link href="/products">
              <Button variant="outline" size="lg">
                查看当前供应产品
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[rgb(var(--theme-primary))] to-[rgb(var(--theme-secondary))] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              欢迎来市场实地考察
            </h2>
            <p className="text-lg opacity-90 mb-8">
              我们期待与您建立长期稳定的合作关系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[rgb(var(--theme-primary))] hover:bg-gray-100 border-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  预约考察
                </Button>
              </Link>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <MapPin className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-sm opacity-90">市场地址</p>
                  <p className="font-medium">北京市朝阳区绿色大道123号</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold mb-1">100+</p>
                <p className="text-sm opacity-90">产品种类</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">500+</p>
                <p className="text-sm opacity-90">合作农户</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">200+</p>
                <p className="text-sm opacity-90">批发客户</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">95%</p>
                <p className="text-sm opacity-90">客户满意度</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

