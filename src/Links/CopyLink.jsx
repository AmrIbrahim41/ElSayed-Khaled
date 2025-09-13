import React, { useState } from 'react';
import './CopyLink.css'; // سنقوم بإنشاء هذا الملف للستايل

const CopyLink = () => {
  // State لتحديد ما إذا كانت الرسالة ظاهرة أم لا
  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = (event) => {
    // 1. منع السلوك الافتراضي للرابط (وهو الانتقال إلى قسم #portfolio)
    event.preventDefault();

    // 2. الحصول على رابط الموقع الحالي
    const currentUrl = window.location.href;

    // 3. استخدام API الخاص بالحافظة لنسخ الرابط
    navigator.clipboard.writeText(currentUrl).then(() => {
      // 4. عند نجاح النسخ، أظهر الرسالة
      setShowToast(true);

      // 5. إخفاء الرسالة بعد 2 ثانية
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }).catch(err => {
      console.error('فشل نسخ الرابط: ', err);
    });
  };

  return (
    <>
      <li>
        <a href="#portfolio" onClick={handleCopyLink}>Portfolio</a>
      </li>

      {/* رسالة التنبيه (Toast) التي تظهر عند النسخ */}
      {showToast && (
        <div className="toast-notification">
          تم نسخ الرابط بنجاح!
        </div>
      )}
    </>
  );
};

export default CopyLink;