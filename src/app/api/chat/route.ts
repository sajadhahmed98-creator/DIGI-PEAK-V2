import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { 
  digipeakCompanyProfile, 
  packagesData, 
  customSolutions,
  currencyConfig
} from "@/data/digipeak_knowledge";

// Basic in-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();

// Input Validation Schema
const chatSchema = z.object({
  messages: z.array(
    z.object({
      role: z.string().max(20),
      content: z.string().max(5000, "Message content is too long")
    })
  ).max(50, "Too many messages in history"),
  language: z.string().max(10).optional().nullable(),
  currency: z.string().max(10).optional().nullable(),
  aiMode: z.string().max(50).optional().nullable(),
});

// System Prompt generator for Digi AI
const SYSTEM_PROMPT = (language: string, currency: string, rate: number, symbol: string, aiMode: string) => {
  let modeInstructions = "You are Digi AI, the Digital Growth Consultant for Digipeak, a premium global growth agency.";
  
  if (aiMode === "SEO Advisor") {
    modeInstructions = "You are Digi AI, an elite SEO Advisor for Digipeak. Focus strictly on search engine ranking factors, technical SEO, local SEO, keyword strategy, and backlink strategies. Recommend Digipeak's SEO retainers and the GCC Local SEO Checklist.";
  } else if (aiMode === "Website Consultant") {
    modeInstructions = `You are Digi AI, an expert Website Auditor for Digipeak. 
    1. First, ask the user for their website URL. 
    2. Once provided, act as if you are running a deep analysis. 
    3. Output a structured report with these exact sections: 
       - Overall Lead Score (0-100)
       - SEO
       - Performance
       - Mobile Usability
       - UX Design
       - Conversion Optimization
       - Technical Issues
    4. Conclude by recommending Digipeak's web design packages.`;
  } else if (aiMode === "Branding Expert") {
    modeInstructions = "You are Digi AI, a Branding Expert for Digipeak. Focus on brand positioning, target audiences, typography, color psychology, and brand storytelling. Recommend Digipeak's Logo & Brand Identity services.";
  } else if (aiMode === "Proposal Generator") {
    modeInstructions = `You are Digi AI, a strict Proposal Scoping Engine. 
    1. You must guide the user through a workflow. Ask these questions ONE AT A TIME: Business Name? Industry? Country? Budget? Services Needed? Timeline?
    2. Once you have all info, immediately output a comprehensive structured proposal with these headings: Executive Summary, Scope, Deliverables, Timeline, Estimated Cost, Next Steps.
    3. Always conclude by asking for their Name and Email so you can officially generate and send the PDF, and output the <lead_data> JSON block.`;
  } else if (aiMode === "Marketing Strategist" || aiMode === "Business Growth Advisor") {
    modeInstructions = "You are Digi AI, a high-level Business Growth Advisor & Marketing Strategist. Focus on omni-channel growth, ROI maximization, funnel optimization, and scaling businesses using Digipeak's suite of services (SEO, Ads, Web).";
  }

  return `
${modeInstructions}
Represent Digipeak professionally. Your personality is professional, helpful, consultative, friendly, and business-focused. Never be robotic.

Active Language Configuration:
- Current Language: ${language}
- If language is "ar", you MUST respond in professional, natural, and business-focused Arabic (Modern Standard Arabic suitable for Qatar, UAE, Saudi Arabia).
- If language is "en", respond in professional English.
- Maintain the active language throughout the conversation.

Active Currency Configuration:
- Current Currency: ${currency}
- Exchange Rate relative to AED: ${rate} (1 AED = ${rate} ${currency})
- Currency Symbol: "${symbol}"
- IMPORTANT: Whenever you discuss package prices, starting costs, custom additions, or project estimates, you MUST convert the base AED prices to \${currency} by multiplying by \${rate}, rounding to clean whole numbers (for LKR, round to the nearest 1,000 for convenience, e.g. Rs. 40,000 instead of Rs. 40,419), and formatting with the symbol "\${symbol}".

Knowledge Base:
\${JSON.stringify(digipeakCompanyProfile, null, 2)}

Packages Pricing (AED base currency, needs conversion to \${currency}):
\${JSON.stringify(packagesData, null, 2)}

Custom Enterprise Add-ons (AED base currency, needs conversion to \${currency}):
\${JSON.stringify(customSolutions, null, 2)}

Guidelines & Rules:
1. Act as a Junior Digital Growth Consultant.
2. CRITICAL COMPANY KNOWLEDGE & HALLUCINATION PREVENTION: 
   You are a Digipeak-trained AI assistant. You must answer from Digipeak's internal knowledge before using general knowledge. 
   Digipeak is founded and owned by Sajadh Ahmed (Founder & Chief Strategist) who has 6+ years of experience as Chief Strategist, Graphic Designer, SEO Strategist, and Web Developer.
   Priority Order: 1. Digipeak Knowledge Base 2. Website Content 3. Internal Resources 4. General Knowledge. 
   
   STRICT HALLUCINATION PREVENTION RULES:
   - If information is unknown, unavailable, or not explicitly provided in the Digipeak Knowledge Base above, you MUST respond exactly: "I don't have enough verified information to answer that."
   - NEVER invent or guess details.
   - NEVER invent company founders, employees, office locations, awards, statistics, testimonials, case studies, client names, locations, or pricing.
   - Serve clients globally and borderlessly across target markets: Qatar (Doha, Wakra, Lusail, Pearl Qatar), UAE (Dubai, Abu Dhabi), Saudi Arabia (Riyadh), Sri Lanka (Colombo), Australia (Sydney, Melbourne, etc.), New Zealand (Auckland, Wellington), Singapore, and United Kingdom (London).
3. Smart Service Discovery: If the user has vague requirements, ask qualifying questions to guide them to the right service(s) from the core services.
4. Conversational Project Estimator:
   If the user asks for a price estimate, a quote, a proposal, or wants to work with Digipeak, guide them through a friendly conversational scoping flow.
   Gather the following details one by one (do NOT ask all questions in a single overwhelming message, ask 1-2 details at a time):
   - Name and Email (essential)
   - WhatsApp number
   - Company name
   - Industry
   - Website URL
   - Budget range
   - Country
   - Services needed
   Once you have gathered the details:
   - Provide an estimated project cost range in the active currency (${currency}).
   - Lead Scoring: Automatically score the lead as: "Hot" | "Warm" | "Cold".
   - Smart Proposal Preparation: Prepare a concise textual proposal summary of their answers and recommended solution.
   - Output structured XML payload: At the very end of your final response, you MUST output a structured XML block containing the lead details in JSON format.
     The format must be exactly:
     <lead_data>
     {
       "name": "User Name",
       "email": "user@email.com",
       "whatsapp": "whatsapp number or empty",
       "company": "company name or empty",
       "industry": "industry or empty",
       "website": "website url or empty",
       "budget": "budget description or selected range",
       "country": "country name or empty",
       "service": "primary service name",
       "details": "scoping answers and goals details",
       "leadScore": "Hot" | "Warm" | "Cold",
       "proposalSummary": "summary of the recommendations, deliverables and timeline"
     }
     </lead_data>
     Ensure the JSON inside <lead_data> is perfectly valid and all strings are escaped correctly. Only output this block ONCE you have qualified the lead (at least Name, Email, and Service are known).
5. Keep answers relevant, structured, and easy to read.
6. Smart Gated Resource Recommendations: If the user asks about improving Local SEO, website launching checklists, CRM pipeline setups, rebranding styles, or marketing templates, you MUST recommend our specific gated downloadable toolkits (e.g. recommend the "GCC B2B Local SEO Checklist" at /resources/gcc-local-seo-checklist, the "Ultimate B2B Website Launch Checklist" at /resources/website-launch-checklist, or the "Sales Pipeline CRM Automation Blueprint" at /resources/sales-pipeline-automation-crm-blueprint) as a free download step.
`;
};

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 15; // Limit per minute for chat interactions

    let timestamps = rateLimitMap.get(ip) || [];
    timestamps = timestamps.filter(time => now - time < windowMs);
    
    if (timestamps.length >= maxRequests) {
      return NextResponse.json({ error: "Too many requests. Please wait a minute and try again." }, { status: 429 });
    }
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    // 2. Input Validation
    const rawPayload = await req.json();
    const parseResult = chatSchema.safeParse(rawPayload);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: parseResult.error.format() }, 
        { status: 400 }
      );
    }
    const { messages, language, currency } = parseResult.data;
    const aiMode = parseResult.data.aiMode || "General Assistant";

    // Determine active currency
    const activeCurrency = currency && currencyConfig[currency] ? currency : "AED";
    const currencyInfo = currencyConfig[activeCurrency];
    const rate = currencyInfo.rate;
    const symbol = currencyInfo.symbol;

    // Detect language
    const lastUserMessage = messages.filter(m => m.role === "user").pop()?.content || "";
    let detectedLanguage = language || "auto";
    if (detectedLanguage === "auto") {
      const isArabic = /[\u0600-\u06FF]/.test(lastUserMessage);
      detectedLanguage = isArabic ? "ar" : "en";
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    // Check if API key is present
    if (!GEMINI_API_KEY) {
      console.log("No GEMINI_API_KEY found, running consultative matching engine.");
      const fallbackResponse = generateConsultativeResponse(lastUserMessage, detectedLanguage, activeCurrency);
      return NextResponse.json({
        content: fallbackResponse,
        fallback: true
      });
    }

    // Format messages for Gemini
    const geminiMessages = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content || "" }]
    }));

    // Call Gemini API Streaming endpoint
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT(detectedLanguage, activeCurrency, rate, symbol, aiMode) }]
        },
        contents: geminiMessages,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API call failed:", errorText);
      throw new Error("Gemini API returned an error status.");
    }

    // Proxy the stream back to the client
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("Error in Digi AI chat route:", error);
    // Graceful fallback response on error
    return NextResponse.json({
      content: "I'm currently operating in consultative offline mode due to a connection drop, but I'm fully equipped to answer you! What service or budget questions can I answer for you?",
      fallback: true
    });
  }
}

// Consultative local matching fallback logic supporting English/Arabic and Active Currencies
function generateConsultativeResponse(userQuery: string, language: string, currency: string): string {
  const query = userQuery.toLowerCase();
  const isArabic = language === "ar";
  const curr = currencyConfig[currency] || currencyConfig.AED;
  const rate = curr.rate;
  const sym = curr.symbol;

  const fmt = (aedVal: number) => {
    const converted = aedVal * rate;
    if (currency === "LKR") {
      return `${sym}${ (Math.round(converted / 1000) * 1000).toLocaleString() }`;
    }
    return `${sym}${Math.round(converted).toLocaleString()}`;
  };

  if (isArabic) {
    if (
      query.includes("عرض") || 
      query.includes("تسعير") || 
      query.includes("توظيف") || 
      query.includes("بدء مشروع") || 
      query.includes("العمل معكم") || 
      query.includes("تقدير") ||
      query.includes("تواصل") ||
      query.includes("proposal") ||
      query.includes("quote")
    ) {
      return `يسعدني جداً مساعدتك في الحصول على عرض مخصص لنمو أعمالك الرقمية.

لتقديم تقدير دقيق، يرجى تزويدي بالمعلومات التالية:
1. الخدمة المطلوبة (مثل: سيو SEO، تصميم مواقع، إعلانات)
2. الميزانية التقريبية للمشروع (${currency})
3. تفاصيل المشروع

بدلاً من ذلك، يمكنك النقر فوق زر "طلب عرض" أدناه أو التحدث إلينا مباشرة على الواتساب للحصول على استجابة فورية.`;
    }

    if (query.includes("سيو") || query.includes("محركات البحث") || query.includes("seo")) {
      return `تقدم ديجي بيك خدمات سيو (SEO) متميزة للمؤسسات والشركات المحلية لزيادة الزيارات العضوية عالية القيمة.

باقاتنا الشهرية (الأسعار بالعملة المحددة ${currency}):
- **Starter SEO**: ${fmt(499)} شهرياً (الكلمات المفتاحية، الأساسيات التقنية، تهيئة الملفات المحلية)
- **Growth SEO**: ${fmt(999)} شهرياً (تتبع المنافسين، تحليل فجوات المحتوى)
- **Professional SEO**: ${fmt(1999)} شهرياً (مدير حساب مخصص، بناء الروابط الخارجية)
- **Enterprise SEO**: عروض أسعار مخصصة للبنى البرمجية العالمية ومتعددة اللغات.

💡 **هل تبحث عن أدوات مجانية؟** يمكنك تحميل "دليل السيو المحلي للخليج العربي (GCC Local SEO Checklist)" مجاناً من صفحة الموارد لدينا: [/resources/gcc-local-seo-checklist](https://www.digipeak.agency/resources/gcc-local-seo-checklist)

هل ترغب في مناقشة استراتيجية سيو لشركتك؟ يمكنني مساعدتك في صياغة طلب العرض.`;
    }

    if (query.includes("موقع") || query.includes("تصميم") || query.includes("برمجة") || query.includes("web") || query.includes("design")) {
      if (query.includes("متجر") || query.includes("تجارة") || query.includes("ecommerce") || query.includes("shop")) {
        return `متاجرنا الإلكترونية عالية السرعة محسّنة لزيادة تحويلات السلال عبر شوبيفاي وووكومرس:

باقاتنا (الأسعار بالعملة المحددة ${currency}):
- **Starter Store**: ${fmt(1499)} (إعداد، روابط الدفع، سرعة أساسية)
- **Growth Store**: ${fmt(2999)} (حتى 100 منتج، ربط مع نظام إدارة العملاء، أتمتة السلال المتروكة)
- **Professional Store**: ${fmt(4999)} (منتجات غير محدودة، دعم متعدد العملات)
- **Enterprise Store**: بنية مخصصة مبنية باستخدام Next.js.

ما هي المنصة التي تفضل إطلاق متجرك عليها؟`;
      }
      return `تصمم ديجي بيك مواقع ويب متميزة مخصصة مبنية لأقصى سرعات وتجربة بصرية فائقة.

باقاتنا (الأسعار بالعملة المحددة ${currency}):
- **صفحة هبوط (Landing Page)**: ${fmt(499)} (صفحة واحدة عالية التحويل)
- **موقع أعمال (Business Website)**: ${fmt(1499)} (حتى 10 صفحات، لوحة تحكم CMS، تصميم مخصص)
- **موقع احترافي (Professional Website)**: ${fmt(2999)} (حتى 25 صفحه، واجهة تفاعلية مخصصة)
- **موقع مؤسساتي (Enterprise Website)**: تصميمات Next.js headless مخصصة.

💡 **أداة مجانية:** قم بتنزيل "قائمة التحقق من إطلاق موقع الويب (Website Launch Checklist)" للتأكد من خلو موقعك الجديد من الأخطاء: [/resources/website-launch-checklist](https://www.digipeak.agency/resources/website-launch-checklist)

هل ترغب في تلقي عرض أسعار مخصص لموقعك الجديد؟`;
    }

    if (query.includes("تسويق") || query.includes("إعلانات") || query.includes("ads") || query.includes("google") || query.includes("meta")) {
      return `تركز حملات التسويق القائمة على الأداء لدينا على زيادة العائد الاستثماري (ROI) عبر القنوات المدفوعة:

باقات إدارة الإعلانات (الأسعار بالعملة المحددة ${currency}):
- **Starter Ads**: ${fmt(699)} شهرياً (إعداد وإدارة حملات جوجل وفيسبوك)
- **Growth Ads**: ${fmt(1499)} شهرياً (اختبارات A/B، مسارات إعادة الاستهداف)
- **Professional Ads**: ${fmt(2999)} شهرياً (تصميم النصوص الإبداعية، محلل مخصص)
- **Enterprise Ads**: إعداد لوحات تحكم مخصصة وتتبع GA4.

هل ترغب في إطلاق حملة إعلانية مستهدفة؟`;
    }

    if (query.includes("سعر") || query.includes("تكلفة") || query.includes("أسعار") || query.includes("باقات") || query.includes("price") || query.includes("cost")) {
      return `تلتزم ديجي بيك بتقديم أسعار شفافة وثابتة. نقدم اشتراكات شهرية وأسعار مشاريع محددة:

أسعار الخدمات الأساسية تبدأ من (بالعملة ${currency}):
- **خدمات السيو (SEO)**: تبدأ من ${fmt(499)} شهرياً
- **تصميم المواقع**: تبدأ من ${fmt(499)} (دفعة واحدة)
- **المتاجر الإلكترونية**: تبدأ من ${fmt(1499)} (دفعة واحدة)
- **الإعلانات الرقمية**: تبدأ من ${fmt(699)} شهرياً
- **إدارة وسائل التواصل**: تبدأ من ${fmt(599)} شهرياً
- **الهوية التجارية**: تبدأ من ${fmt(399)} (دفعة واحدة)

ندعم التحويل التلقائي للعملات لـ QAR، SAR، USD، GBP، SGD، AUD، NZD، و LKR. ما هي الخدمة التي ترغب في معرفة سعرها؟`;
    }

    if (query.includes("شريك") || query.includes("شراكة") || query.includes("برنامج الشركاء") || query.includes("partner") || query.includes("partnership")) {
      return `تقدم ديجي بيك ثلاثة برامج شراكة متميزة لتناسب احتياجاتك:

1. **برنامج الشركاء بالمحالة (Referral Partner)**: للمستقلين والمستشارين. اربح عمولات ممتازة من خلال تقديم العملاء. (/partners/referral-partner/)
2. **شراكة العلامة البيضاء (White Label)**: لوكالات التسويق والاستوديوهات. نقوم بالتنفيذ بصمت تحت اسم شركتك. (/partners/white-label-agency/)
3. **برنامج إعادة البيع (Reseller Program)**: لفرق المبيعات والمستشارين. بع خدماتنا وحدد أسعارك وهوامش ربحك الخاصة. (/partners/reseller-program/)

لمعرفة المزيد وتحديد البرنامج الأنسب لك، تفضل بزيارة مركز الشركاء: [/partners/](https://www.digipeak.agency/partners/)`;
    }

    if (query.includes("وظيفة") || query.includes("عمل") || query.includes("توظيف") || query.includes("انضمام") || query.includes("careers") || query.includes("job")) {
      return `تبحث ديجي بيك دائماً عن مسوقين ومصممين ومطورين موهوبين للانضمام إلى شبكتنا العالمية للعمل عن بُعد.

يمكنك التقديم وإرسال سيرتك الذاتية مباشرة عبر صفحة الوظائف /careers لدينا. يتم إرسال الطلبات إلى careers@digipeak.agency للمراجعة الفورية.`;
    }

    if (
      query.includes("قطر") || 
      query.includes("دبي") || 
      query.includes("الإمارات") || 
      query.includes("السعودية") || 
      query.includes("الرياض") || 
      query.includes("موقع") ||
      query.includes("عنوان") ||
      query.includes("أين") ||
      query.includes("خريطة")
    ) {
      return `تعمل ديجي بيك بشكل عابر للحدود مع فريق من المتخصصين عن بعد لخدمة الأسواق العالمية.
موقعنا الرسمي على خرائط جوجل (Google Business Profile) هو: [رابط خرائط جوجل](https://maps.app.goo.gl/9Gp2fifi3A15suaA6)

مناطق التركيز الإقليمية الرئيسية لدينا:
- **قطر (الدوحة)**: دعم المؤسسات المحلية بخدمات السيو المحلي الثنائي اللغة وتصميم المواقع المتميزة.
- **الإمارات (دبي)**: خدمة الشركات الناشئة الفاخرة، بوابات العقارات، وتكامل المتاجر الإلكترونية.
- **المملكة العربية السعودية (الرياض)**: تقديم حلول التحول الرقمي تماشياً مع رؤية السعودية 2030.
- **عالمياً**: نخدم الأسواق العالمية انطلاقاً من عملياتنا في سريلانكا.

يتم تنسيق المشاريع بالكامل عبر Slack وGoogle Meet وبوابات التتبع المباشر. في أي سوق تعمل شركتك؟`;
    }

    if (query.includes("لينكد") || query.includes("انستقرام") || query.includes("إنستغرام") || query.includes("فيسبوك") || query.includes("سوشيال") || query.includes("شبكات")) {
      return `يمكنك الاتصال بـ ديجي بيك عبر قنواتنا الرسمية على وسائل التواصل الاجتماعي:
- **لينكد إن (LinkedIn)**: [linkedin.com/company/digipeakagencyglobal](https://www.linkedin.com/company/digipeakagencyglobal)
- **إنستغرام (Instagram)**: [@digipeak.agency](https://www.instagram.com/digipeak.agency)
- **فيسبوك (Facebook)**: [صفحة الفيسبوك](https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr)
- **خرائط جوجل**: [خرائط جوجل](https://maps.app.goo.gl/9Gp2fifi3A15suaA6)`;
    }

    if (query.includes("تواصل") || query.includes("اتصال") || query.includes("إيميل") || query.includes("بريد") || query.includes("هاتف") || query.includes("رقم")) {
      return `يمكنك التواصل مع ديجي بيك عبر الطرق التالية:
- **البريد الإلكتروني**: [hello@digipeak.agency](mailto:hello@digipeak.agency)
- **الواتساب (WhatsApp)**: [+94 77 362 4413](https://wa.me/94773624413)
- **صفحة الاتصال**: أرسل متطلبات مشروعك عبر [/contact](https://www.digipeak.agency/contact) لتلقي عرض أسعار مخصص.`;
    }

    if (query.includes("مؤسس") || query.includes("ساجد") || query.includes("أحمد") || query.includes("من أسس") || query.includes("صاحب")) {
      return `تأسست ديجي بيك على يد **ساجد أحمد (Sajadh Ahmed)**، وهو مطور ومستشار نمو رقمي خبير.

يمتلك ساجد خبرة تزيد عن 6 سنوات في مجالات السيو، الهوية البصرية، تصميم المواقع، والأتمتة. يمكنك قراءة ملفه الشخصي وخبراته بالتفصيل عبر صفحته: [/author/sajadh-ahmed](https://www.digipeak.agency/author/sajadh-ahmed).`;
    }

    return `مرحباً! أنا ديجي AI، مساعد النمو الرقمي الاستشاري لشركة ديجي بيك.

يمكنكن إجابتك على أي أسئلة تخص:
- 📈 باقات السيو والإعلانات المدفوعة
- 💻 تصميم وبرمجة المواقع المخصصة (Next.js)
- 🤝 برامج الشراكة والشبكات (Referral, White Label, Reseller)
- 🎨 تصميم الهويات التجارية والشعارات
- 💰 أسعار الباقات والخدمات المتاحة (${currency})

كيف يمكنني مساعدتك اليوم في تسريع نمو أعمالك الرقمية؟`;
  }

  if (
    query.includes("proposal") || 
    query.includes("quote") || 
    query.includes("hire") || 
    query.includes("start a project") || 
    query.includes("work with you") || 
    query.includes("estimate") ||
    query.includes("get in touch") ||
    query.includes("contact")
  ) {
    return `I would be delighted to assist you in securing a custom digital growth proposal.

To provide an accurate assessment, please let me know your:
1. Target Service (e.g. Web Design, SEO, Ads)
2. Approximate Project Budget (in ${currency})
3. Project Details

Alternatively, you can click the "Get Proposal" quick action below or talk to us directly on WhatsApp for an immediate response.`;
  }

  if (query.includes("partner") || query.includes("partnership") || query.includes("referral") || query.includes("white label") || query.includes("reseller")) {
    return `Digipeak offers three distinct B2B partnership opportunities under our Partner Network:

1. **Referral Partner Program**: Earn commissions by referring businesses that need digital growth services. Ideal for freelancers and consultants. (/partners/referral-partner/)
2. **White Label Partnership**: Outsource your digital execution silently under your own agency brand. Ideal for agencies and studios. (/partners/white-label-agency/)
3. **Reseller Partnership**: Sell websites, SEO, branding, and automation packages under your own pricing model. Ideal for sales representatives and growth consultants. (/partners/reseller-program/)

You can explore all models and calculate potential profits at our main Partner Hub: [/partners/](https://www.digipeak.agency/partners/)`;
  }

  if (query.includes("seo") || query.includes("search engine")) {
    return `Digipeak provides top-tier Enterprise and Local SEO Services designed to capture high-intent organic traffic.

Our Monthly Retainers (prices in ${currency}):
- **Starter SEO**: ${fmt(499)}/mo (Keyword maps, technical foundations, local profiles)
- **Growth SEO**: ${fmt(999)}/mo (Competitor tracking, content gap analytics)
- **Professional SEO**: ${fmt(1999)}/mo (Dedicated manager, backlink outreach)
- **Enterprise SEO**: Custom quotes for international and multi-lingual architectures.

💡 **Free Resource**: Download our gated "GCC B2B Local SEO Checklist" to audit your search footprint: [/resources/gcc-local-seo-checklist](https://www.digipeak.agency/resources/gcc-local-seo-checklist)

Would you like to discuss an SEO strategy for your company? I can help you compile a proposal request.`;
  }

  if (query.includes("web") || query.includes("design") || query.includes("develop") || query.includes("website")) {
    if (query.includes("ecommerce") || query.includes("shop") || query.includes("store")) {
      return `Our High-Speed E-Commerce store setups are optimized for cart conversion across Shopify and WooCommerce:

Our Packages (prices in ${currency}):
- **Starter Store**: ${fmt(1499)} (Setup, payment link, base speed tunings)
- **Growth Store**: ${fmt(2999)} (Up to 100 products, CRM sync, cart automation)
- **Professional Store**: ${fmt(4999)} (Unlimited products, multi-currency support)
- **Enterprise Store**: Custom architectures built with Next.js headless tech.

What platform are you looking to launch your store on?`;
    }
    return `Digipeak designs premium, custom Web Design & Development projects built for sub-second speeds and visual excellence.

Our Packages (prices in ${currency}):
- **Landing Page**: ${fmt(499)} (Single high-converting page, custom grids)
- **Business Website**: ${fmt(1499)} (Up to 10 pages, CMS backend, custom layout)
- **Professional Website**: ${fmt(2999)} (Up to 25 pages, bespoke interactive UI)
- **Enterprise Website**: Bespoke headless designs (Next.js) and database engines.

💡 **Free Resource**: Download our gated "Ultimate B2B Website Launch Checklist" to ensure a zero-error deployment: [/resources/website-launch-checklist](https://www.digipeak.agency/resources/website-launch-checklist)

Would you like to receive a custom proposal for your new website?`;
  }

  if (query.includes("marketing") || query.includes("ads") || query.includes("google ads") || query.includes("meta") || query.includes("facebook")) {
    return `Our performance marketing campaigns focus strictly on maximizing ROI across paid media channels:

Paid Acquisition Retainers (prices in ${currency}):
- **Starter Ads**: ${fmt(699)}/mo (Google & Meta campaign setups and optimization)
- **Growth Ads**: ${fmt(1499)}/mo (A/B testing, retargeting funnels)
- **Professional Ads**: ${fmt(2999)}/mo (Creative copy design, dedicated analyst)
- **Enterprise Ads**: Custom dashboard setups, GA4 server-side pixel tracking.

Would you like to run a targeted paid campaign?`;
  }

  if (query.includes("price") || query.includes("cost") || query.includes("pricing") || query.includes("package")) {
    return `Digipeak is committed to transparent flat-fee pricing. We offer curated monthly retainers and project rates:

Core Services starting prices (in ${currency}):
- **SEO Services**: from ${fmt(499)}/mo
- **Web Design**: from ${fmt(499)} (One-off)
- **E-Commerce**: from ${fmt(1499)} (One-off)
- **Digital Ads**: from ${fmt(699)}/mo
- **Social Media**: from ${fmt(599)}/mo
- **Branding**: from ${fmt(399)} (One-off)

We support automatic currency conversions client-side for QAR, SAR, USD, GBP, SGD, AUD, NZD, and LKR. What service are you interested in pricing?`;
  }

  if (
    query.includes("qatar") || 
    query.includes("doha") || 
    query.includes("dubai") || 
    query.includes("uae") || 
    query.includes("saudi") || 
    query.includes("riyadh") || 
    query.includes("location") ||
    query.includes("where") ||
    query.includes("address") ||
    query.includes("map")
  ) {
    return `Digipeak operates borderlessly with dedicated remote specialists serving major hubs globally.
Our official Google Business Profile location is: [Google Maps Location](https://maps.app.goo.gl/9Gp2fifi3A15suaA6)

Our primary regional focus areas:
- **Qatar (Doha)**: Supporting local organizations with premium local/bilingual SEO and custom web assets.
- **UAE (Dubai)**: Servicing luxury startups, real estate portals, and enterprise store integrations.
- **Saudi Arabia (Riyadh)**: Delivering digital transformations aligning with KSA Vision 2030.
- **Global**: Borderless support managed by our expert operations based in Sri Lanka.

All projects are coordinated online via Slack, Google Meet, and live tracking portals. What market are you operating in?`;
  }

  if (query.includes("linkedin") || query.includes("instagram") || query.includes("facebook") || query.includes("social")) {
    return `You can connect with Digipeak Agency on our official social media channels:
- **LinkedIn**: [linkedin.com/company/digipeakagencyglobal](https://www.linkedin.com/company/digipeakagencyglobal)
- **Instagram**: [@digipeak.agency](https://www.instagram.com/digipeak.agency)
- **Facebook**: [Facebook Profile](https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr)
- **Google Business Profile**: [Google Maps](https://maps.app.goo.gl/9Gp2fifi3A15suaA6)`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("hello@") || query.includes("reach") || query.includes("call") || query.includes("phone")) {
    return `You can contact Digipeak Agency via:
- **Email**: [hello@digipeak.agency](mailto:hello@digipeak.agency)
- **WhatsApp**: [+94 77 362 4413](https://wa.me/94773624413)
- **Contact Form**: Submit a request on our [/contact](https://www.digipeak.agency/contact) page to receive a custom proposal.`;
  }

  if (query.includes("founder") || query.includes("sajadh") || query.includes("sajad") || query.includes("ahmed") || query.includes("who is")) {
    return `Digipeak was founded by **Sajadh Ahmed**, a seasoned digital growth strategist and developer.

You can learn more about his background, expertise, and view his detailed professional history on his author profile: [/author/sajadh-ahmed](https://www.digipeak.agency/author/sajadh-ahmed).`;
  }

  if (query.includes("job") || query.includes("career") || query.includes("work for") || query.includes("hiring") || query.includes("join")) {
    return `Digipeak is always looking for talented digital marketers, designers, and developers to join our remote global talent network.

You can view current opportunities and submit your CV directly at our /careers page. All applications are formatted and sent to careers@digipeak.agency for review.`;
  }

  return `Hello! I am Digi AI, your consultative growth assistant for Digipeak. 

I can answer any questions regarding our:
- 📈 SEO & Ads Retainers
- 💻 Custom Next.js Web Design
- 🤝 B2B Partnership Programs (Referral, White Label, Reseller)
- 🎨 Brand Identity & Logos
- 🌍 Remote GCC & Global Operations
- 💰 Service Packages & Pricing (Currently in ${currency})

How can I help accelerate your digital footprint today?`;
}
