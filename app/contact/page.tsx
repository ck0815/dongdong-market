"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  userType: z.enum(["farmer", "wholesaler", "other"]),
  email: z.string().email("请输入有效的邮箱地址"),
  phone: z.string().min(11, "请输入有效的手机号码"),
  message: z.string().min(10, "留言至少需要10个字符"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "电话",
    content: "400-123-4567",
    description: "周一至周日 8:00-20:00",
  },
  {
    icon: Mail,
    title: "邮箱",
    content: "info@greenharvest.com",
    description: "我们会在24小时内回复",
  },
  {
    icon: MapPin,
    title: "地址",
    content: "北京市朝阳区绿色大道123号",
    description: "欢迎来访参观",
  },
  {
    icon: Clock,
    title: "营业时间",
    content: "周一至周日 8:00-20:00",
    description: "节假日正常营业",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              联系我们
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              无论您是想供货的农民，还是想采购的批发商，我们都随时为您服务
            </p>
          </motion.div>

        {/* 联系信息卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-[rgb(var(--theme-light))] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-[rgb(var(--theme-primary))]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-[rgb(var(--theme-primary))] font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 联系表单和地图 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 表单 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  发送消息
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label="姓名"
                    placeholder="请输入您的姓名"
                    {...register("name")}
                    error={errors.name?.message}
                  />

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      您的身份
                    </label>
                    <select
                      {...register("userType")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--theme-primary))] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">请选择您的身份</option>
                      <option value="farmer">我是农民（想供货）</option>
                      <option value="wholesaler">我是批发商（想采购）</option>
                      <option value="other">其他咨询</option>
                    </select>
                    {errors.userType && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.userType.message}
                      </p>
                    )}
                  </div>

                  <Input
                    label="邮箱"
                    type="email"
                    placeholder="请输入您的邮箱"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <Input
                    label="手机号码"
                    placeholder="请输入您的手机号码"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />

                  <Textarea
                    label="留言"
                    placeholder="请输入您的留言内容..."
                    {...register("message")}
                    error={errors.message?.message}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "发送中..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        发送消息
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      感谢您的留言！我们会尽快回复您。
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      发送失败，请稍后重试。
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 地图占位 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-0 h-full min-h-[600px]">
                <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--theme-light))] to-white flex items-center justify-center rounded-xl">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-[rgb(var(--theme-primary))] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      我们的位置
                    </h3>
                    <p className="text-gray-600 mb-4">
                      北京市朝阳区绿色大道123号
                    </p>
                    <p className="text-sm text-gray-500">
                      地图功能即将上线
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ 部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            常见问题
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "如何确保产品是有机的？",
                a: "我们所有产品都经过国家有机认证，并定期接受第三方检测，确保100%有机。",
              },
              {
                q: "配送需要多长时间？",
                a: "我们承诺24小时内送达，确保产品新鲜度。部分地区可能需要48小时。",
              },
              {
                q: "如何保证产品新鲜？",
                a: "我们采用冷链配送，从农场到您的餐桌全程温控，确保产品新鲜。",
              },
              {
                q: "可以退换货吗？",
                a: "如果产品有质量问题，我们支持7天无理由退换货，让您购物无忧。",
              },
            ].map((faq, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

