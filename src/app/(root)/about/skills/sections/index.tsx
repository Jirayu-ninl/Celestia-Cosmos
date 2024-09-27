
import { motion, AnimatePresence } from 'framer-motion'
import * as skillsSection from './skills'

type tVariants = {
  [key: string]: any
}

export const SkillSection = ({
  MenuSection,
  data,
  _dark,
}: {
  MenuSection: number
  data: any
  _dark: boolean
}) => {
  const { Section_Projects, Section_Skills, Section_Team, Section_Works } =
    skillsSection

  const { parent, children } = {
    parent: (delay: number) => ({
      hidden: { visibility: 'hidden', x: 100, opacity: 0 },
      show: {
        visibility: 'visible',
        x: 0,
        opacity: 1,
        transition: {
          staggerChildren: delay,
        },
      },
      exit: { visibility: 'hidden', x: 100, opacity: 0 },
    }),
    children: {
      hidden: { visibility: 'hidden', x: 100, opacity: 0 },
      show: { visibility: 'visible', x: 0, opacity: 1 },
    },
  }
  const transition = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }
  const Anim = { children, transition }
  return (
    <AnimatePresence>
      {MenuSection === 0 && (
        <motion.div
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_01'
        >
          {data.Projects.map((v: any, i: number) => (
            <Section_Projects
              Anim={Anim}
              name={v.name}
              type={v.type}
              des={v.description}
              star={v.star}
              icon={v.icon}
              link={v.link}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 1 && (
        <motion.div
          className='grid w-[calc(100vw-2rem)] grid-cols-2 gap-2 sm:w-full md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_02'
        >
          {data.DevSkills.map((v: any, i: number) => (
            <Section_Skills
              Anim={Anim}
              title={v.name}
              sub={v.type}
              details={v.level}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 2 && (
        <motion.div
          className='grid w-[calc(100vw-2rem)] grid-cols-2 gap-2 sm:w-full md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_03'
        >
          {data.Expertises.map((v: any, i: number) => (
            <Section_Skills
              Anim={Anim}
              title={v.name}
              sub={v.category}
              details={v.level}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 3 && (
        <motion.div
          className='grid w-[calc(100vw-2rem)] grid-cols-2 gap-2 sm:w-full md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_04'
        >
          {data.Certificates.map((v: any, i: number) => (
            <Section_Skills
              Anim={Anim}
              title={v.name}
              sub={v.academy}
              details={v.date}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 4 && (
        <motion.div
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_05'
        >
          {data.Teams.map((v: any, i: number) => (
            <Section_Team
              Anim={Anim}
              name={v.name}
              des={v.description}
              location={v.location}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 5 && (
        <motion.div
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_06'
        >
          {data.Works.map((v: any, i: number) => (
            <Section_Works
              Anim={Anim}
              name={v.company}
              des={v.description}
              pos={v.position}
              date={v.date}
              key={i}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
