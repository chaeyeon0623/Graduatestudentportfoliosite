import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: '이메일', value: 'jiwon.kim@university.edu' },
    { icon: Phone, label: '전화', value: '+82 10-1234-5678' },
    { icon: MapPin, label: '위치', value: '서울, 대한민국' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-slate-900">연락하기</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            연구 협업이나 프로젝트 문의가 있으시면 언제든지 연락해주세요.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-slate-900">연락 정보</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <info.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm">{info.label}</div>
                      <div className="text-slate-900">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-slate-900">소셜 미디어</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-slate-900">메시지 보내기</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-700 mb-2 text-sm">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-2 text-sm">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-700 mb-2 text-sm">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                    placeholder="메시지를 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  메시지 전송
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20 pt-12 border-t border-slate-100"
      >
        <p className="text-slate-500 text-sm">
          © 2025 김지원. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
