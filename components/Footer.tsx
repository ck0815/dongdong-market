import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[rgb(var(--theme-primary))] p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                东东瓜果蔬菜市场
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              专业的农产品批发交易市场，连接农田与市场，为农民和批发商提供优质服务。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[rgb(var(--theme-primary))] transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[rgb(var(--theme-primary))] transition-colors">
                  产品
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[rgb(var(--theme-primary))] transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[rgb(var(--theme-primary))] transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">400-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@greenharvest.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">中国·北京市朝阳区绿色大道123号</span>
              </li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-white font-semibold mb-4">关注我们</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[rgb(var(--theme-primary))] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[rgb(var(--theme-primary))] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[rgb(var(--theme-primary))] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-4">
              订阅我们的新闻通讯，获取最新优惠信息
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 东东瓜果蔬菜市场. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}

