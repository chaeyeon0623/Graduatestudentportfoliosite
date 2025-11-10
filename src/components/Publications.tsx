import { motion } from 'motion/react';
import { FileText, Award, ExternalLink } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: 'Multimodal Emotion Recognition Using Deep Learning Ensemble',
      authors: '김지원, 박준영, 이서연',
      venue: 'International Conference on Machine Learning (ICML)',
      year: '2024',
      type: '학회 논문',
      award: 'Best Paper Award'
    },
    {
      title: 'Transfer Learning Approaches for Medical Image Analysis',
      authors: '김지원, 최민수',
      venue: 'Nature Machine Intelligence',
      year: '2024',
      type: '저널 논문',
      award: null
    },
    {
      title: 'Efficient Document Summarization with Transformer Models',
      authors: '김지원',
      venue: 'Annual Meeting of the Association for Computational Linguistics (ACL)',
      year: '2023',
      type: '학회 논문',
      award: null
    },
    {
      title: 'Few-Shot Learning for Natural Language Processing Tasks',
      authors: '김지원, 정수연, 한태우',
      venue: 'IEEE Transactions on Neural Networks',
      year: '2023',
      type: '저널 논문',
      award: null
    }
  ];

  return (
    <section id="publications" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-slate-900">논문 및 출판물</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <FileText className="w-6 h-6 text-slate-700" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-slate-900 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <button className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-slate-600 text-sm mb-2">{pub.authors}</p>

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-slate-700 text-sm italic">{pub.venue}</span>
                    <span className="text-slate-500 text-sm">•</span>
                    <span className="text-slate-600 text-sm">{pub.year}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-white text-slate-700 rounded-full text-xs">
                      {pub.type}
                    </span>
                    {pub.award && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        <Award className="w-3 h-3" />
                        {pub.award}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
