"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Award, Heart, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const values = [
  {
    icon: Leaf,
    title: "诚信经营",
    description: "公平交易，诚信为本，不压价不拖欠，让每一笔交易都放心。",
  },
  {
    icon: Heart,
    title: "农民优先",
    description: "保障农民利益，提供稳定销售渠道，助力农民增收致富。",
  },
  {
    icon: Award,
    title: "品质保证",
    description: "严格的质量控制体系，专业分级检测，确保产品品质。",
  },
  {
    icon: Users,
    title: "服务至上",
    description: "为批发商提供优质货源和专业服务，建立长期合作关系。",
  },
];

const milestones = [
  {
    year: "2018",
    title: "市场成立",
    description: "东东瓜果蔬菜市场正式成立，开始农产品批发交易业务。",
  },
  {
    year: "2019",
    title: "规模扩大",
    description: "建立专业品控团队，与500+农户建立稳定合作关系。",
  },
  {
    year: "2021",
    title: "业务升级",
    description: "引入现代化管理系统，日交易量突破100吨，服务200+批发商。",
  },
  {
    year: "2024",
    title: "持续领先",
    description: "成为区域领先的农产品批发市场，继续为农业发展贡献力量。",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "合作农户" },
  { icon: Leaf, value: "100+", label: "产品种类" },
  { icon: Award, value: "200+", label: "批发客户" },
  { icon: TrendingUp, value: "100吨+", label: "日交易量" },
];

export default function AboutPage() {
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
              关于我们
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              东东瓜果蔬菜市场成立于2018年，是专业的农产品批发交易市场。
              我们从全国各地的农民手中统一收购优质农产品，经过严格品控和分级后，
              为批发商提供稳定、优质的货源。连接农田与市场，让农民增收，让批发商放心。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 使命与愿景 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="bg-[rgb(var(--theme-light))] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-[rgb(var(--theme-primary))]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    我们的使命
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    连接农田与市场，为农民提供稳定的销售渠道和公平的价格，为批发商提供优质的货源和专业的服务。
                    通过规范化、标准化的市场运营，推动农产品流通体系的健康发展，让农业生产者和经营者共同受益。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="bg-[rgb(var(--theme-light))] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-[rgb(var(--theme-primary))]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    我们的愿景
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    成为中国领先的农产品批发交易市场，建立完善的农产品流通体系。
                    通过专业化管理和标准化服务，促进农业产业升级，助力乡村振兴，
                    为构建现代农业流通网络贡献力量。
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
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
              核心价值观
            </h2>
            <p className="text-lg text-gray-600">
              这些价值观指导着我们的每一个决策和行动
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="bg-[rgb(var(--theme-light))] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-[rgb(var(--theme-primary))]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
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
              发展历程
            </h2>
            <p className="text-lg text-gray-600">
              从创立至今，我们不断成长和进步
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 pb-12 border-l-2 border-[rgb(var(--theme-primary))] last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[rgb(var(--theme-primary))] border-4 border-white" />
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <span className="inline-block bg-[rgb(var(--theme-primary))] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="py-20 bg-gradient-to-br from-[rgb(var(--theme-primary))] to-[rgb(var(--theme-secondary))] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              我们的成就
            </h2>
            <p className="text-lg opacity-90">
              用数字见证我们的成长
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

