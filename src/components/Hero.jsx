import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
    return (
        <motion.section id='home' className='hero' 
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration:0.8, delay:0.2 }}
          >
          <div className='hero-container'>
            <motion.div className='hero-content'
              variants={staggerContainer} 
              initial='initial' 
              animate='animate'
            >
              <motion.div className='hero-badge'>
                <span> Hello, I'm </span>
              </motion.div>
              <motion.h1 className='glitch'
              variants={fadeInUp}
              whileHover={{ scale: 1.02}}
              >
                Kritsada
              </motion.h1>
              <motion.h2 className='hero-subtitle' variants={fadeInUp}>
                {''}
                Creative Developer & Designer
              </motion.h2>
              <motion.p className='hero-description' variants={fadeInUp}>
                I craft beautiful digital experiences that combine stunning design with powerful functionality. Specializing in web application and interactive user interfaces.  
              </motion.p>
              
              <motion.div
              className='cta-buttons'
              variants={staggerContainer}
              >
                <motion.a href='#projects' 
                  className='cta-primary'
                  whileHover={{ scale: 1.05}}
                  whileTap={{ scale: 0.95}}
                >
                  {''}
                  View My Work
                </motion.a>
                <motion.a href='#contracts' 
                  className='cta-secondary'
                  whileHover={{ scale: 1.05}}
                  whileTap={{ scale: 0.95}}
                >
                  {''}
                  Contract Me
                </motion.a>
                <motion.div className='social-links'
                variants={staggerContainer}
                >
                <motion.a></motion.a>
                </motion.div>
              </motion.div>
            
            </motion.div>
          </div>
        </motion.section>
    )
}

export default Hero