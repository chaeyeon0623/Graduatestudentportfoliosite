import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const education = [
    {
      icon: GraduationCap,
      title: '박사 과정',
      institution: '서울대학교',
      period: '2023 - 현재',
      field: '컴퓨터공학 전공'
    },
    {
      icon: GraduationCap,
      title: '석사',
      institution: '카이스트',
      period: '2021 - 2023',
      field: '인공지능 전공'
    },
    {
      icon: GraduationCap,
      title: '학사',
      institution: '연세대학교',
      period: '2017 - 2021',
      field: '컴퓨터과학 전공'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-slate-900">소개</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjI3MDkzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="relative rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600">
              안녕하세요, 저는 인공지능과 머신러닝 분야에서 연구하고 있는 대학원생입니다. 
              특히 자연어 처리와 컴퓨터 비전 분야에 관심이 많으며, 최신 딥러닝 기술을 
              실제 문제 해결에 적용하는 것에 열정을 가지고 있습니다.
            </p>
            <p className="text-slate-600">
              현재는 멀티모달 학습과 전이 학습 기법을 활용한 연구를 진행하고 있으며, 
              다양한 국제 학회에서 논문을 발표한 경험이 있습니다.
            </p>

            <div className="pt-8 space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <edu.icon className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 text-sm">{edu.period}</div>
                    <div className="text-slate-800">{edu.institution}</div>
                    <div className="text-slate-600 text-sm">{edu.field}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
