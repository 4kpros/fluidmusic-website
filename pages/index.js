import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

export default function Home() {
  const { t } = useTranslation('home')

  const pageTile = t('pageTile')
  const pageDescription = t('pageDescription')

  const appName = t('appName')

  const heroTitle = t('heroTitle')

  const heroImg1 = t('heroImg1')
  const heroImg2 = t('heroImg2')
  const heroImg3 = t('heroImg3')
  const heroImg4 = t('heroImg4')

  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1, duration: 0.1, }}
      exit={{ y: 10, opacity: 0, duration: 0 }}
    >
      <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
      <div className="w-full min-h-[80vh] text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center mt-8">
              <h1 className="w-full text-center text-2xl font-bold md:w-2/3">
                {appName}
              </h1>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="w-auto font-semibold text-center text-xl">
                {heroTitle}
              </h3>
              <div className="w-1/2 flex flex-col justify-center items-center mt-6">
                <h1 className='w-auto text-center text-3xl font-semibold animate-pulse transition-all'>
                  {t('common:commingSoon')}
                </h1>
                <Link 
                  href="#" 
                  >
                    <Image 
                      width={250} 
                      height={128} 
                      src={t('common:playstoreImg')} 
                      alt=''
                      className='w-auto h-20 object-contain'
                    />
                </Link>
              </div>
                <Link 
                  href="/about" 
                  className="w-auto font-semibold text-center text-xl underline transition-all hover:opacity-80 mt-4"
                >
                {t('common:seeDemos')}
              </Link>
            </div>
              {
                heroImg1.startsWith('/') && (
                  <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-16">
                    <div className='relative mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        src={heroImg1} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                      <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            className='w-24 h-24 fill-white opacity-20' 
                        >
                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className='relative mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        src={heroImg2} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                      <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            className='w-24 h-24 fill-white opacity-20' 
                        >
                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className='relative mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        src={heroImg3} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                      <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            className='w-24 h-24 fill-white opacity-20' 
                        >
                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className='relative mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        src={heroImg4} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                      <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            className='w-24 h-24 fill-white opacity-20' 
                        >
                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              }
            <br/><br/><br/>
          </div>
      </div>
    </motion.div>
  )
}
