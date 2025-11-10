import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: '멀티모달 감정 인식 시스템',
      description: '텍스트와 이미지를 동시에 분석하여 사용자의 감정을 정확하게 인식하는 딥러닝 모델을 개발했습니다. BERT와 ResNet을 결합한 앙상블 모델을 사용했습니다.',
      tech: ['Python', 'PyTorch', 'Transformers', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYyNzUzNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: '자동 문서 요약 및 분석 도구',
      description: '대량의 학술 논문을 자동으로 요약하고 핵심 내용을 추출하는 NLP 기반 시스템입니다. 연구자들의 문헌 조사 시간을 획기적으로 단축시켰습니다.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      image: 'https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjI2OTE4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: '의료 영상 진단 보조 AI',
      description: 'CNN과 Attention Mechanism을 활용하여 의료 영상에서 이상 징후를 탐지하는 시스템을 구축했습니다. 실제 병원 데이터를 활용하여 검증했습니다.',
      tech: ['Python', 'Keras', 'Medical Imaging', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjI3MDkzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-slate-900">연구 프로젝트</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    <Github className="w-4 h-4" />
                    <span>코드</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>자세히</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
