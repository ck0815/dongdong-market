"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "green", name: "生机绿", color: "rgb(76, 175, 80)" },
  { id: "orange", name: "活力橙", color: "rgb(255, 152, 0)" },
  { id: "blue", name: "清新蓝", color: "rgb(33, 150, 243)" },
  { id: "brown", name: "大地棕", color: "rgb(121, 85, 72)" },
];

export default function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("green");

  useEffect(() => {
    // 从 localStorage 读取主题
    const savedTheme = localStorage.getItem("theme") || "green";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("theme", themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="切换主题"
      >
        <Palette className="w-6 h-6 text-gray-700" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 背景遮罩 */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* 主题选择器 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 p-3 z-50"
            >
              <p className="text-sm font-semibold text-gray-700 mb-3">
                选择主题
              </p>
              <div className="space-y-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                      currentTheme === theme.id
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: theme.color }}
                    />
                    <span className="text-sm text-gray-700">{theme.name}</span>
                    {currentTheme === theme.id && (
                      <span className="ml-auto text-[rgb(var(--theme-primary))]">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

