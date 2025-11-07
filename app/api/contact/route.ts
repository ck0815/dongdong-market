import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  userType: z.enum(["farmer", "wholesaler", "other"]),
  email: z.string().email("请输入有效的邮箱地址"),
  phone: z.string().min(11, "请输入有效的手机号码"),
  message: z.string().min(10, "留言至少需要10个字符"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证数据
    const validatedData = contactSchema.parse(body);

    // 这里可以添加实际的邮件发送逻辑
    // 例如使用 nodemailer 或其他邮件服务
    console.log("收到联系表单提交:", validatedData);

    // 模拟处理延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "感谢您的留言，我们会尽快回复您！",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "数据验证失败",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "服务器错误，请稍后重试",
      },
      { status: 500 }
    );
  }
}

