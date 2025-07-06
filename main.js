// main.js - 星寒工作室全局配置

// 页面标题
export const title = "星寒工作室StarHanCN";

// 字体配置 (本地font.ttf)
export const font = {
  name: "OPPOsans",
  path: "font.ttf",
  format: "truetype"
};

// Logo配置
export const logo = {
  src: "logo.png",
  alt: "星寒工作室Logo",
  width: 140,
  height: 140
};

// 头部标题配置
export const header = {
  h1: "星寒工作室StarHanCN",
  p: "中国团队由星火团队代理运营（周期为半年）",
  slogan: "以创意驱动未来 · 以技术改变世界"
};

// 卡片配置文件列表 (按显示顺序)
export const cardConfigs = [
  "cardBasic.js",   // 基本信息
  "cardHistory.js", // 团队历史
  "cardFeature.js", // 团队特点
  "cardMember.js",  // 团队核心成员
  "cardFriend.js",  // 友链
  "cardContact.js" // 联系方式
];

// 页尾配置
export const footer = {
  text: "copyright ©️ starhancn 2025 | 传承 创新 团结 共享",
  motto: "以创意驱动未来 · 以技术改变世界",
  icp: {
    text: "萌ICP备20250251号",
    link: "https://icp.gov.moe/?keyword=20250251"
  }
};

// 社交链接配置
export const socialLinks = [
  {
    icon: "fab fa-qq",
    href: "https://qun.qq.com/universal-share/share?ac=1&authKey=%2FOlbcpNvbcl5tRwwp8u%2FqxNkUkCQem09Xv%2FeCwwNNgCq2oSzAo%2FCTqCTlKXMFujY&busi_data=eyJncm91cENvZGUiOiI5Mzc4MDQ4MTIiLCJ0b2tlbiI6IlZTdEF6RFc1bHFiN3NyVTNzUHIxbTJkd1VEakZlSXpkMVdleWNmeDQ2Z1NLTmNpOW5oZGFFSzJlZi9DeTlMemMiLCJ1aW4iOiIzOTk2NjkxMjQ5In0%3D&data=yfjec88aVHQGgF0-mB8rJg5hAeYpl5rNxaTb3ibBnNTDqADL6Sqx_5tKUFZLYeblxMuw8uO1xT4jn6R7T9q1RQ&svctype=4&tempid=h5_group_info",
    label: "QQ群"
  },
  {
    icon: "fab fa-weixin",
    href: "#",
    label: "微信"
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/starhancn",
    label: "GitHub"
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/starhansh",
    label: "GitHub SH"
  },
  {
    icon: "fab fa-bilibili",
    href: "https://space.bilibili.com/3461563419724110",
    label: "哔哩哔哩"
  }
];
