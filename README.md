<div style="direction: rtl; text-align: right; font-family: 'Vazirmatn', Tahoma, sans-serif; line-height: 1.8;">
  <h1>🎯 NestJS + Prisma Backend Project</h1>

  <p>این پروژه یک ساختار تمیز و اصولی برای توسعه‌ی بک‌اند با استفاده از <strong>NestJS</strong> و <strong>Prisma ORM</strong> است.</p>

  <hr>

  <h2>⚡️ ساختار پروژه</h2>

  <pre>
/prisma
  ├── schema.prisma        # تعریف مدل‌های دیتابیس و کانفیگ Prisma
  └── migrations/          # پوشه مخصوص مایگریشن دیتابیس


/src
  └── auth/                # مدیریت احراز هویت و JWT
  └── prisma/              # اتصال و مدیریت Prisma Client
  └── reply/               # ماژول مربوط به پاسخ‌های سیستم
  └── ticket/              # ماژول مدیریت تیکت‌ها
  └── user/                # ماژول مدیریت کاربران

app.controller.ts          # کنترلر اصلی اپلیکیشن
app.controller.spec.ts     # تست‌های کنترلر اصلی
app.module.ts              # ماژول اصلی برنامه
app.service.ts             # سرویس مرکزی برنامه
main.ts                    # نقطه ورود برنامه NestJS
  </pre>

  <hr>

  <h2>🚀 تکنولوژی‌های استفاده شده</h2>

  <ul>
    <li><a href="https://nestjs.com">NestJS</a> — فریم‌ورک بک‌اند مدرن و قابل گسترش بر پایه TypeScript.</li>
    <li><a href="https://www.prisma.io">Prisma ORM</a> — مدیریت دیتابیس، مایگریشن و دسترسی به داده.</li>
    <li><a href="https://www.postgresql.org">PostgreSQL</a> — دیتابیس رابطه‌ای قدرتمند و متن‌باز.</li>
    <li><a href="https://www.typescriptlang.org">TypeScript</a> — افزایش کیفیت و پایداری کد.</li>
  </ul>

  <hr>

  <h2>🛠️ شروع پروژه</h2>

  <ol>
    <li>نصب پکیج‌ها:</li>
  </ol>

  <pre><code>npm install</code></pre>

  <ol start="2">
    <li>تنظیم فایل <code>.env</code> و اتصال دیتابیس PostgreSQL:</li>
  </ol>

  <pre><code>DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/YOUR_DATABASE_NAME"</code></pre>

  <ol start="3">
    <li>ساخت تیبل‌های دیتابیس:</li>
  </ol>

  <pre><code>npx prisma generate
npx prisma db push</code></pre>

  <p>اگر از مایگریشن استفاده می‌کنید:</p>

  <pre><code>npx prisma migrate dev</code></pre>

  <ol start="4">
    <li>اجرای برنامه:</li>
  </ol>

  <pre><code>npm run start:dev</code></pre>

  <hr>

  <h3>💡 توضیحات بیشتر:</h3>

  <ul>
    <li><strong>src/prisma:</strong> ارتباط با دیتابیس و مدیریت PrismaClient در کل پروژه.</li>
    <li><strong>src/auth:</strong> سیستم ورود، ثبت‌نام و تولید توکن.</li>
    <li><strong>src/user:</strong> مدیریت اطلاعات و عملیات کاربران.</li>
    <li><strong>src/ticket:</strong> سیستم تیکتینگ.</li>
    <li><strong>src/reply:</strong> پاسخ‌های مرتبط با تیکت‌ها.</li>
  </ul>

  <hr>

  <h2>✍️ توسعه‌دهنده</h2>
<p><strong>Saber Qadimi</strong> — 
<a href="https://www.linkedin.com/in/saber-qadimi/">LinkedIn</a> | 
<a href="https://github.com/Saberqadimi">GitHub</a></p>


</div>
