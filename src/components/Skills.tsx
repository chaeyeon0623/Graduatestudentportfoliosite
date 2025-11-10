import { motion } from 'motion/react';
import { Code, Brain, Database, GitBranch } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: '머신러닝 & AI',
      skills: [
        { name: 'PyTorch', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Hugging Face', level: 90 }
      ]
    },
    {
      icon: Code,
      title: '프로그래밍',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'R', level: 80 }
      ]
    },
    {
      icon: Database,
      title: '데이터 & 클라우드',
      skills: [
        { name: 'SQL/NoSQL', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Spark', level: 70 }
      ]
    },
    {
      icon: GitBranch,
      title: '도구 & 협업',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Jupyter', level: 95 },
        { name: 'Linux', level: 85 },
        { name: 'LaTeX', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-slate-900">기술 스택</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
