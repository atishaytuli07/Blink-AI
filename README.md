## BLINK AI
### From PDF to AI-Powered Summary - In a Blink of Eye ✨.

Blink AI ek smart AI tool hai jo aapke boring, lambe PDFs ko kuch hi seconds mein summarize karta hai — bilkul clear, concise aur beautifully structured format mein. Ye app specially un logon ke liye banaya gaya hai jo busy hain aur fast results chahte hain — students, professionals, content creators, sab ke liye.

---

### 📁 Project Structure aur Important Files – Easy Hinglish Explanation

Next.js ek modern web framework hai jo **file-based routing** ka use karta hai. Iska matlab ye hai ki aapke folders aur file names automatically routes ban jaate hain - aapko manually routing ka jhanjhat nahi hota.

### `app/` folder kya hota hai ?

Ye main folder hota hai Next.js ke App Router structure mein. Iske andar aapke har page ka ek folder hota hai, jisme usually do important files hoti hain:
1. `page.tsx` – Ye file hoti hai jo browser ko dikhai deti hai. Jaise agar aap `/about` route pe jaa rahe ho, toh `app/about/page.tsx` render hoti hai.
2. `layout.tsx` – Ye ek wrapper file hoti hai jo saare child pages ke upar apply hoti hai. Ismein hum ek baar hi header, footer, metadata, fonts, aur global CSS ka import kar lete hain — jisse performance fast hoti hai aur code DRY rehta hai (Don’t Repeat Yourself).

### `globals.css` kis kaam ka hai?

Is file mein hum **poore app ke liye common CSS styles** define karte hain. Jaise ki font smoothing, base spacing, Tailwind ke layers, aur other reset styles. Ye file ek baar `layout.tsx` mein import hoti hai.

### `public/` folder ka kya use hai?

Yahaan hum wo saare files rakhte hain jo browser se directly access kiye jaa sakte hain — jaise logos, favicons, OG images (social share ke liye), aur static assets.

### `next.config.js` kya karta hai?

Ye Next.js ka configuration file hota hai jisme hum kuch important cheezein set karte hain:
- Kaunse domains se images allow hain
- Redirects, rewrites, experimental features
- Custom behavior like trailing slash, etc.
Yani ki ye batata hai Next.js ko ki project ko kaise chalana hai.


### `package.json` aur `package-lock.json` kya hote hain ?

- `package.json` ek important file hoti hai jo batati hai ki app mein kaunse packages install hain (dependencies), kaunse dev tools use ho rahe hain (devDependencies), aur kaunse scripts use ki jaa rahi hain (`npm run dev`, `build`, `start`, etc).
- `package-lock.json` ye ensure karta hai ki har system pe same exact versions install ho, taaki bugs na aaye due to version mismatch.

### `tailwind.config.js` ka kaam?

Ye file Tailwind CSS ko customize karne ke liye hoti hai. Aap isme apne fonts, colors, breakpoints, spacing system wagairah define kar sakte ho. Jaise humne custom fonts add kiye: Roboto, Inter, Poppins, Source Sans, Geist Mono — ye sab yahin define hote hain.

### `postcss.config.js` kyu chahiye?

Tailwind internally PostCSS ka use karta hai. Ye config batata hai ki Tailwind ko kaise process karna hai, aur autoprefixer kaise apply hoga (browser compatibility ke liye). Usually isme jyada change nahi hota.

### `tsconfig.json` ka role kya hai?

Agar aap TypeScript use kar rahe ho (which you should for better dev experience), to `tsconfig.json` define karta hai:
- Type-checking rules
- Aliases (like `@/components`)
- Compiler options
- Auto imports aur suggestions ka behavior

Ye TypeScript ko batata hai ki aapka project kaise behave kare.

### `eslint.config.js` kya karta hai?

Ye file aapke code ko clean aur bug-free rakhne mein madad karti hai. ESLint ek tool hai jo batata hai ki aapne kahin galti to nahi ki, ya koi best practice break to nahi ki. Isme hum rules define karte hain jisse code consistent aur readable rehta hai.

## 💬 In Short

Ye saare config files isliye important hain kyunki har file ek tool ko batata hai ki kaise behave karna chahiye. Ye tools (Next.js, Tailwind, TypeScript, ESLint) milkar aapka app ko fast, reliable aur maintainable banate hain.

Jitna clear config, utna smooth development.

## ✅ Blink AI Features (Recap)

- AI-generated PDF summaries using GPT-4 🤖
- Beautiful UI with Tailwind + ShadCN
- Markdown export, mobile-friendly, performance optimized
- Secure auth with Clerk + payment with Stripe
- Deployed on Vercel 🚀

If you’re a student, professional, or just someone who’s tired of reading 100+ page PDFs — Blink AI is made for you.

### 🙌 Try It. Love It. Blink It.

