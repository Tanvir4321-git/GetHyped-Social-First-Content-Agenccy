/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const BRANDS = [
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg',
];

const BrandHyped = () => {
    return (
        <>
            <div className='max-w-360 mx-auto mt-17 md:mt-23 px-4.25 md:px-7.5'>
                <h1 className='font-semibold text-[35px] md:text-[57px] pb-9 md:pb-13.5 text-[#161616] leading-8.5 md:leading-14.25'>
                    These brands <br /> got hyped.
                </h1>
            </div>

            <div className='overflow-hidden relative pb-17 md:pb-23'>
                <motion.div
                    className='flex gap-2 md:gap-6 w-max'
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                    {/* original + duplicate */}
                    {[...BRANDS, ...BRANDS].map((src, i) => (
                        <div key={i} className='md:w-71.5 shrink-0 md:h-71.5 w-35 h-35 flex justify-center items-center border rounded-lg border-[#cac6bf]'>
                            <img loading="lazy" src={src} alt="Brand logo" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default BrandHyped;