# 🎵 ZAHRAOUI PROD - موقع توزيع الموسيقى والحقوق الرقمية

موقع احترافي لـ **ZAHRAOUI PROD** - شركة متخصصة في توزيع الموسيقى وإدارة الحقوق الرقمية للمواهب المغربية.

---

## 📋 محتويات الملف

- [المميزات الرئيسية](#المميزات-الرئيسية)
- [هيكل المشروع](#هيكل-المشروع)
- [كيفية إضافة فنان جديد](#كيفية-إضافة-فنان-جديد)
- [كيفية تعديل بيانات الفنان](#كيفية-تعديل-بيانات-الفنان)
- [كيفية إضافة صورة الفنان](#كيفية-إضافة-صورة-الفنان)
- [نظام اللغات المتعددة](#نظام-اللغات-المتعددة)
- [الأيقونات الاجتماعية](#الأيقونات-الاجتماعية)
- [نصائح وحيل](#نصائح-وحيل)

---

## 🌟 المميزات الرئيسية

✅ **دعم متعدد اللغات** - 4 لغات (عربي، إنجليزي، إسباني، فرنسي)
✅ **RTL/LTR تلقائي** - تبديل تلقائي حسب اللغة المختارة
✅ **قاعدة بيانات فنانين قابلة للتوسع** - إضافة فنانين جدد بسهولة
✅ **معرّف فنان ديناميكي** - URL: `artiste.html?id=1`
✅ **روابط اجتماعية وظيفية** - Facebook, Instagram, TikTok, YouTube, Linktree
✅ **تصميم Cyberpunk Elegance** - أسود عميق + أزرق كهربائي
✅ **تصميم مستجيب** - يعمل على جميع الأجهزة
✅ **أيقونات Font Awesome** - أيقونات احترافية للوسائط الاجتماعية

---

## 📁 هيكل المشروع

```
zahraoui-prod.github.io/
├── index.html              # الصفحة الرئيسية
├── artists.html            # صفحة الفنانين
├── works.html              # صفحة الأعمال
├── contact.html            # صفحة التواصل
├── artiste.html            # صفحة تفاصيل الفنان (ديناميكية)
├── style.css               # الأنماط الموحدة
├── script.js               # نظام اللغات وقاعدة البيانات
├── images/
│   └── artists/            # صور الفنانين
│       └── mostafazyan.jpg # صورة مصطفى زيان
└── README.md               # هذا الملف
```

---

## 🎨 كيفية إضافة فنان جديد

### الخطوة 1: إضافة صورة الفنان

1. ضع صورة الفنان في المجلد: `images/artists/`
2. استخدم اسماً بسيطاً للملف (مثال: `artistname.jpg`)
3. تأكد من أن الصورة بصيغة JPG أو PNG

**مثال:**
```
images/artists/ahmedchourouk.jpg
```

### الخطوة 2: إضافة بيانات الفنان في script.js

افتح ملف `script.js` وابحث عن قسم `artistsData`:

```javascript
const artistsData = {
  "1": {
    name: {
      ar: "مصطفى زيان",
      en: "Mustapha Zyan",
      es: "Mustafá Zian",
      fr: "Moustapha Zian"
    },
    genre: {
      ar: "موسيقى عربية معاصرة",
      en: "Contemporary Arabic Music",
      es: "Música Árabe Contemporánea",
      fr: "Musique Arabe Contemporaine"
    },
    bio: {
      ar: "فنان موهوب متخصص في دمج الأصوات التقليدية مع الإيقاعات الحديثة...",
      en: "A talented artist specializing in blending traditional sounds...",
      es: "Un artista talentoso especializado en mezclar sonidos...",
      fr: "Un artiste talentueux spécialisé dans le mélange..."
    },
    image: "images/artists/mostafazyan.jpg",
    songs: "50+",
    listeners: "1M+",
    plays: "5M+",
    joinYear: "2020",
    social: {
      facebook: "https://facebook.com/mustaphazyan",
      instagram: "https://instagram.com/mustaphazyan",
      tiktok: "https://tiktok.com/@mustaphazyan",
      youtube: "https://youtube.com/@mustaphazyan",
      linktree: "https://linktree.com/mustaphazyan"
    }
  }
};
```

**أضف فنان جديد (ID 2):**

```javascript
const artistsData = {
  "1": { /* بيانات مصطفى زيان */ },
  
  "2": {
    name: {
      ar: "أحمد شروق",
      en: "Ahmed Chourouk",
      es: "Ahmed Chourouk",
      fr: "Ahmed Chourouk"
    },
    genre: {
      ar: "راب و هيب هوب",
      en: "Rap & Hip Hop",
      es: "Rap y Hip Hop",
      fr: "Rap et Hip Hop"
    },
    bio: {
      ar: "مغني ومنتج موسيقي متميز يجمع بين الكلمات القوية والألحان الجذابة",
      en: "A talented singer and music producer who combines powerful lyrics with catchy melodies",
      es: "Un cantante y productor musical talentoso que combina letras poderosas con melodías pegadizas",
      fr: "Un chanteur et producteur musical talentueux qui combine des paroles puissantes avec des mélodies accrocheuses"
    },
    image: "images/artists/ahmedchourouk.jpg",
    songs: "35+",
    listeners: "800K+",
    plays: "3.5M+",
    joinYear: "2021",
    social: {
      facebook: "https://facebook.com/ahmedchourouk",
      instagram: "https://instagram.com/ahmedchourouk",
      tiktok: "https://tiktok.com/@ahmedchourouk",
      youtube: "https://youtube.com/@ahmedchourouk",
      linktree: "https://linktree.com/ahmedchourouk"
    }
  }
};
```

### الخطوة 3: إضافة بطاقة الفنان في artists.html

افتح ملف `artists.html` وابحث عن قسم `استكشف الفنانين`:

```html
<div class="grid grid-5">
  <!-- بطاقة الفنان 1 -->
  <div class="card">
    <div class="card-image" style="background: linear-gradient(135deg, #00d4ff 0%, #1a0033 100%); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 3rem;">🎤</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">مصطفى زيان</h3>
      <p class="card-subtitle">موسيقى عربية معاصرة</p>
      <p class="card-description">فنان موهوب متخصص في دمج الأصوات التقليدية مع الإيقاعات الحديثة</p>
      <p class="card-stats">50+ أغنية</p>
      <a href="artiste.html?id=1" class="card-link">اكتشف أكثر →</a>
    </div>
  </div>

  <!-- أضف بطاقة الفنان 2 هنا -->
  <div class="card">
    <div class="card-image" style="background: linear-gradient(135deg, #00a8cc 0%, #1a0033 100%); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 3rem;">🎤</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">أحمد شروق</h3>
      <p class="card-subtitle">راب و هيب هوب</p>
      <p class="card-description">مغني ومنتج موسيقي متميز يجمع بين الكلمات القوية والألحان الجذابة</p>
      <p class="card-stats">35+ أغنية</p>
      <a href="artiste.html?id=2" class="card-link">اكتشف أكثر →</a>
    </div>
  </div>
</div>
```

### الخطوة 4: إضافة بطاقة الفنان في index.html

افتح ملف `index.html` وابحث عن قسم `الفنانون المميزون`:

```html
<div class="grid grid-3">
  <!-- بطاقة الفنان 1 -->
  <div class="card">
    <div class="card-image" style="background: linear-gradient(135deg, #00d4ff 0%, #1a0033 100%); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 3rem;">🎤</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">مصطفى زيان</h3>
      <p class="card-subtitle">موسيقى عربية معاصرة</p>
      <p class="card-description">فنان موهوب متخصص في دمج الأصوات التقليدية مع الإيقاعات الحديثة</p>
      <a href="artiste.html?id=1" class="card-link">اكتشف أكثر →</a>
    </div>
  </div>

  <!-- أضف بطاقة الفنان 2 هنا -->
  <div class="card">
    <div class="card-image" style="background: linear-gradient(135deg, #00a8cc 0%, #1a0033 100%); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 3rem;">🎤</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">أحمد شروق</h3>
      <p class="card-subtitle">راب و هيب هوب</p>
      <p class="card-description">مغني ومنتج موسيقي متميز يجمع بين الكلمات القوية والألحان الجذابة</p>
      <a href="artiste.html?id=2" class="card-link">اكتشف أكثر →</a>
    </div>
  </div>
</div>
```

---

## ✏️ كيفية تعديل بيانات الفنان

### تعديل الاسم

في ملف `script.js`، ابحث عن الفنان وعدّل قسم `name`:

```javascript
"1": {
  name: {
    ar: "الاسم الجديد بالعربية",
    en: "New Name in English",
    es: "Nuevo Nombre en Español",
    fr: "Nouveau Nom en Français"
  },
  // ...
}
```

### تعديل النوع الموسيقي

عدّل قسم `genre`:

```javascript
genre: {
  ar: "النوع الموسيقي الجديد",
  en: "New Music Genre",
  es: "Nuevo Género Musical",
  fr: "Nouveau Genre Musical"
}
```

### تعديل السيرة الذاتية

عدّل قسم `bio`:

```javascript
bio: {
  ar: "السيرة الذاتية الجديدة بالعربية...",
  en: "New biography in English...",
  es: "Nueva biografía en español...",
  fr: "Nouvelle biographie en français..."
}
```

### تعديل الإحصائيات

عدّل الحقول: `songs`, `listeners`, `plays`, `joinYear`:

```javascript
songs: "60+",           // عدد الأغاني
listeners: "2M+",       // عدد المستمعين
plays: "10M+",          # عدد التشغيلات
joinYear: "2019"        // سنة الانضمام
```

### تعديل روابط الوسائط الاجتماعية

عدّل قسم `social`:

```javascript
social: {
  facebook: "https://facebook.com/newprofile",
  instagram: "https://instagram.com/newprofile",
  tiktok: "https://tiktok.com/@newprofile",
  youtube: "https://youtube.com/@newprofile",
  linktree: "https://linktree.com/newprofile"
}
```

---

## 🖼️ كيفية إضافة صورة الفنان

### الطريقة 1: إضافة صورة محلية

1. **أنشئ مجلد الصور** (إذا لم يكن موجوداً):
   ```
   images/artists/
   ```

2. **ضع صورة الفنان** في المجلد:
   ```
   images/artists/artistname.jpg
   ```

3. **حدّث المسار في script.js**:
   ```javascript
   image: "images/artists/artistname.jpg"
   ```

### الطريقة 2: استخدام صورة من الإنترنت

إذا كنت تريد استخدام صورة من الإنترنت، استخدم الرابط المباشر:

```javascript
image: "https://example.com/path/to/image.jpg"
```

### ملاحظات مهمة:

- **الصيغ المدعومة**: JPG, PNG, WebP
- **الحد الأقصى للحجم**: 2 MB
- **الأبعاد الموصى بها**: 500x500 بكسل أو أكبر
- **إذا كانت الصورة معطلة**: سيظهر رمز الميكروفون 🎤 بدلاً منها

---

## 🌍 نظام اللغات المتعددة

### اللغات المدعومة

| الكود | اللغة | الاتجاه |
|------|-------|--------|
| `ar` | العربية | RTL (من اليمين لليسار) |
| `en` | English | LTR (من اليسار لليمين) |
| `es` | Español | LTR |
| `fr` | Français | LTR |

### كيفية إضافة ترجمة جديدة

1. افتح ملف `script.js`
2. ابحث عن كائن `translations`
3. أضف مفتاح جديد مع ترجمات لجميع اللغات:

```javascript
const translations = {
  ar: {
    "new.key": "النص بالعربية",
    // ...
  },
  en: {
    "new.key": "Text in English",
    // ...
  },
  es: {
    "new.key": "Texto en Español",
    // ...
  },
  fr: {
    "new.key": "Texte en Français",
    // ...
  }
};
```

4. في HTML، استخدم `data-i18n`:

```html
<h1 data-i18n="new.key">النص الافتراضي</h1>
```

---

## 🔗 الأيقونات الاجتماعية

### الأيقونات المدعومة

| المنصة | الأيقونة | الكود |
|--------|---------|------|
| Facebook | `fab fa-facebook-f` | `fab fa-facebook-f` |
| Instagram | `fab fa-instagram` | `fab fa-instagram` |
| TikTok | `fab fa-tiktok` | `fab fa-tiktok` |
| YouTube | `fab fa-youtube` | `fab fa-youtube` |
| Linktree | `fas fa-link` | `fas fa-link` |

### كيفية إضافة منصة اجتماعية جديدة

1. افتح ملف `script.js`
2. ابحث عن دالة `updateSocialLinks`
3. أضف منصة جديدة في مصفوفة `platforms`:

```javascript
const platforms = [
  { key: 'facebook', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { key: 'instagram', icon: 'fab fa-instagram', label: 'Instagram' },
  { key: 'tiktok', icon: 'fab fa-tiktok', label: 'TikTok' },
  { key: 'youtube', icon: 'fab fa-youtube', label: 'YouTube' },
  { key: 'linktree', icon: 'fas fa-link', label: 'Linktree' },
  // أضف هنا
  { key: 'spotify', icon: 'fab fa-spotify', label: 'Spotify' }
];
```

4. أضف الرابط في بيانات الفنان:

```javascript
social: {
  facebook: "https://facebook.com/...",
  instagram: "https://instagram.com/...",
  spotify: "https://spotify.com/artist/..." // جديد
}
```

---

## 💡 نصائح وحيل

### 1. البحث والاستبدال السريع

استخدم ميزة البحث والاستبدال في محررك المفضل:
- **البحث عن**: `"1":`
- **الاستبدال بـ**: `"2":`

هذا يساعدك على نسخ بيانات فنان موجود بسرعة.

### 2. التحقق من الأخطاء

افتح وحدة تحكم المتصفح (F12) وتحقق من:
- هل هناك أخطاء JavaScript؟
- هل الصور تحمل بشكل صحيح؟
- هل الروابط الاجتماعية تعمل؟

### 3. اختبار اللغات

جرّب تبديل اللغات للتأكد من أن جميع النصوص تظهر بشكل صحيح:
- العربية (RTL)
- English (LTR)
- Español (LTR)
- Français (LTR)

### 4. اختبار الروابط الاجتماعية

تأكد من أن جميع روابط الوسائط الاجتماعية:
- صحيحة وتفتح في نافذة جديدة
- تؤدي إلى الملفات الشخصية الصحيحة
- لا تحتوي على مسافات إضافية

### 5. تحسين الأداء

- استخدم صور مضغوطة (حجم أقل من 500 KB)
- استخدم صيغ حديثة مثل WebP
- تجنب الصور الكبيرة جداً

---

## 🚀 نشر التغييرات

بعد إجراء التغييرات:

1. **احفظ الملفات**
2. **أضف التغييرات إلى Git**:
   ```bash
   git add .
   ```
3. **أنشئ commit**:
   ```bash
   git commit -m "إضافة فنان جديد: أحمد شروق"
   ```
4. **ادفع التغييرات**:
   ```bash
   git push origin main
   ```

GitHub Pages سيحدّث الموقع تلقائياً خلال دقائق.

---

## 📞 الدعم والمساعدة

إذا واجهت أي مشاكل:

1. **تحقق من console** (F12) للأخطاء
2. **تأكد من صيغة JSON** في script.js
3. **تحقق من المسارات** (paths) للصور والملفات
4. **اختبر في متصفح مختلف**

---

## 📝 الترخيص

جميع الحقوق محفوظة © 2024 ZAHRAOUI PROD

---

**تم آخر تحديث**: مايو 2026
**الإصدار**: 2.0
