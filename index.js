var COURSES = {
  javascript: {
    name: "JavaScript", icon: "🟨", color: "#F7DF1E",
    desc: "لغة الويب — تعمل في كل متصفح",
    lessons: [
      { id: '01-intro', title: 'مقدمة إلى JavaScript', time: 20, level: 'مبتدئ' },
      { id: '02-variables', title: 'المتغيرات في JavaScript', time: 30, level: 'مبتدئ' },
      { id: '03-functions', title: 'الدوال في JavaScript', time: 35, level: 'مبتدئ' },
      { id: '04-conditionals', title: 'الشروط في JavaScript', time: 35, level: 'مبتدئ' },
      { id: '05-loops', title: 'الحلقات التكرارية', time: 40, level: 'مبتدئ' },
      { id: 'test', title: 'درس تجريبي', time: 10, level: 'مبتدئ' },
    ]
  },
  python: {
    name: "Python", icon: "🐍", color: "#3776AB",
    desc: "لغة متعددة الاستخدامات — الأقوى في الذكاء الاصطناعي",
    lessons: [
      { id: '01-intro', title: 'مقدمة إلى Python', time: 20, level: 'مبتدئ' },
      { id: '02-setup', title: 'التثبيت وأول برنامج', time: 25, level: 'مبتدئ' },
      { id: '03-variables', title: 'المتغيرات', time: 30, level: 'مبتدئ' },
      { id: '04-types', title: 'أنواع البيانات', time: 35, level: 'مبتدئ' },
      { id: '05-operators', title: 'العمليات الحسابية', time: 40, level: 'مبتدئ' },
    ]
  }
  ,html: { name: "HTML", icon: "🌐", color: "#E34F26", desc: "هيكل صفحات الويب", lessons: [] }
  ,sql: { name: "SQL", icon: "🗄️", color: "#00758F", desc: "قواعد البيانات", lessons: [] }
  ,java: { name: "Java", icon: "☕", color: "#007396", desc: "لغة الأنظمة", lessons: [] }
  ,cpp: { name: "C++", icon: "⚙️", color: "#00599C", desc: "الأداء العالي", lessons: [] }
};