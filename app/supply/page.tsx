"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  Phone,
  MapPin,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const supplySteps = [
  {
    step: "1",
    title: "联系我们",
    description: "电话或微信联系市场收购部，告知您的产品种类和预计产量",
    icon: Phone,
  },
  {
    step: "2",
    title: "品质评估",
    description: "我们的专业人员会到现场查看产品品质，确定收购标准和价格",
    icon: Shield,
  },
  {
    step: "3",
    title: "协商价格",
    description: "根据市场行情和产品品质，协商公平合理的收购价格",
    icon: DollarSign,
  },
  {
    step: "4",
    title: "送货交割",
    description: "按约定时间将产品送到市场，或由市场安排车辆上门收购",
    icon: Truck,
  },
  {
    step: "5",
    title: "验收过磅",
    description: "市场进行品质验收和准确过磅，确保公平公正",
    icon: CheckCircle,
  },
  {
    step: "6",
    title: "现场结算",
    description: "验收合格后当场现金结算，或按约定方式支付货款",
    icon: Clock,
  },
];

const advantages = [
  {
    icon: DollarSign,
    title: "价格公道",
    description: "根据市场行情给出合理价格，绝不压价，保障农民收益",
  },
  {
    icon: Clock,
    title: "快速结算",
    description: "验收合格后当场结算，不拖欠货款，让您放心",
  },
  {
    icon: Truck,
    title: "上门收购",
    description: "产量大的可安排车辆上门收购，解决运输难题",
  },
  {
    icon: Shield,
    title: "长期合作",
    description: "建立稳定合作关系，提供技术指导，共同发展",
  },
  {
    icon: Leaf,
    title: "有机优先",
    description: "有机认证产品优先收购，价格更优，鼓励绿色种植",
  },
  {
    icon: TrendingUp,
    title: "销路保障",
    description: "市场渠道广阔，不愁销路，让您种得安心，卖得放心",
  },
];

const requirements = [
  {
    title: "产品要求",
    items: [
      "新鲜度：当天或前一天采摘，保持新鲜",
      "品质：无病虫害、无腐烂、无严重机械损伤",
      "大小：符合市场标准规格，大小均匀",
      "清洁：表面清洁，无泥土、杂质",
    ],
  },
  {
    title: "包装要求",
    items: [
      "使用干净的筐、箱或袋进行包装",
      "不同品种、等级分开包装",
      "包装牢固，便于搬运和运输",
      "标注产品名称、重量、产地等信息",
    ],
  },
  {
    title: "数量要求",
    items: [
      "最小起送量：蔬菜类100斤起，水果类50斤起",
      "大宗供货可享受更优惠价格",
      "可接受多品种混合供货",
      "产量稳定的优先建立长期合作",
    ],
  },
];

export default function SupplyPage() {
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
              供货指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              东东瓜果蔬菜市场长期收购各类优质农产品，价格公道，现场结算，诚信经营
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  立即联系
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  查看收购品种
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 供货流程 */}
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
              供货流程
            </h2>
            <p className="text-lg text-gray-600">
              简单六步，轻松卖货
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {supplySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {index < supplySteps.length - 1 && (
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

      {/* 供货优势 */}
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
              为什么选择我们
            </h2>
            <p className="text-lg text-gray-600">
              我们是您值得信赖的合作伙伴
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

      {/* 供货要求 */}
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
              供货要求
            </h2>
            <p className="text-lg text-gray-600">
              了解标准，提高收购效率
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b-2 border-[rgb(var(--theme-primary))]">
                      {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item, idx) => (
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
              准备好向我们供货了吗？
            </h2>
            <p className="text-lg opacity-90 mb-8">
              我们期待与您建立长期稳定的合作关系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[rgb(var(--theme-primary))] hover:bg-gray-100 border-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  联系我们
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}

