import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

export default function Policy() {
    const { t } = useTranslation('policy')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const heroText = t('heroText')
    const collectedData = t('collectedData')
    const sharedData = t('sharedData')
    const logData = t('logData')

    return (
        <motion.div
        initial={{
          y: -10,
          opacity: 0,
          transition: {
            duration: 0,
          }
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.15,
          }
        }}
        exit={{
          y: 5,
          opacity: 0,
          transition: {
            duration: 0,
          }
        }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full min-h-screen my-8">
                        <div className="w-full flex flex-col py-10">
                            <h1 className="text-5xl font-bold">
                                {heroText !== 'heroText' && heroText}
                            </h1>
                            <div className="">
                                <h3 className="text-2xl mt-8">
                                    {collectedData !== 'collectedData' && collectedData}
                                </h3>
                                <p className="mt-2 hidden">
                                    No content !!!
                                </p>
                                <h3 className="text-2xl mt-8">
                                    {sharedData !== 'sharedData' && sharedData}
                                </h3>
                                <p className="mt-2 hidden">
                                    No content !!!
                                </p>
                                <h3 className="text-2xl mt-8">
                                    {logData !== 'logData' && logData}
                                </h3>
                                <p className="mt-2 hidden">
                                    No content !!!  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};