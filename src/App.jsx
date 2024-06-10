import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import SubHeader from './layout/SubHeader'
import Footer from './layout/Footer'
import Container from './components/Container'
import styles from './components/main.module.css'
import Button from './components/Button'
import classNames from 'classnames'
import Swiper from './components/Swiper'
import { Link } from 'react-router-dom'
import ImageForPlus1 from './assets/for_plus_size-1.png'
import ImageForPlus2 from './assets/for_plus_size-2.png'
import ImageSubs1 from './assets/subs-1.png'
import ImageSubs2 from './assets/subs-2.png'
import ImageInstagram1 from './assets/insta1.png'
import ImageInstagram2 from './assets/insta2.png'
// import SliderSlick from './components/SliderSlick'

const App = () => {
  return (
    <>
      <SubHeader />
      <Container>
        <Header />

        <main>
          <section className={classNames(styles['main'], 'flex justify-center items-center w-full h-[930px]')}>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-semibold text-[50px] mb-[9px]'>NEW collections</h2>
              <p className='text-base text-center mb-[46px]'>Check out our high-quality and <br /> affordable fashion!</p>
              <Button>Shop now</Button>
            </div>
          </section>

          <section className='mt-[190px]'>
            <div className='flex justify-between flex-wrap'>
              <div className='flex'>
                <h4 className='text-[26px] font-normal mb-[77px]'>New arrivals</h4>
                <Link to='#' className='text-base underline ml-[177px] mt-3'>shop new arrivals</Link>
              </div>

              <div className='mt-3'>
                <button type='button' className='mr-[50px] hover:border-b-2 transition-all duration-200'>prev</button>
                <button type='button' className='hover:border-b-2 transition-all duration-200'>next</button>
              </div>
            </div>
            <Swiper />
          </section>

          <section className='grid grid-cols-3 grid-flow-col gap-[25px] mt-[190px]'>
            <div className='flex items-center'>
              <div className=''>
                <h4 className='font-normal text-[26px] mb-[14px]'>For plus size</h4>
                <p className='font-normal text-[16px] mb-[46px]'>Discover stylish images for every day</p>
                <Button variant='outline' onClick={() => console.log('clicked')}>Shop now</Button>
              </div>
            </div>
            <div className=''>
              <img className='' src={ImageForPlus1} alt={ImageForPlus1} />
              <p className='text-base mt-[23px]'>Long Sleeves Solid Top <br /> $35</p>
            </div>
            <div>
              <img className='' src={ImageForPlus2} alt={ImageForPlus2} />
              <p className='text-base mt-[23px]'>Night Sky Shimmer Sleeveless Layered Dress <br /> $37</p>
            </div>
          </section>

          <section className='mt-[190px]'>
            <div className='flex justify-between flex-wrap'>
              <h4 className='text-[26px] font-normal mb-[77px]'>Explore the categories</h4>
              <div className='mt-3'>
                <button type='button' className='mr-[50px] hover:border-b-2 transition-all duration-200'>prev</button>
                <button type='button' className='hover:border-b-2 transition-all duration-200'>next</button>
              </div>
            </div>
            <Swiper />
          </section>

          <section className='flex justify-around items-start mt-[190px]'>
            <div className=''>
              <img className='' src={ImageSubs1} alt={'Subs Image 1'} />
            </div>

            <div className='flex items-center'>
              <div className=''>
                <p className='text-[26px] mb-[11px]'>Code for 10% off your <br /> first full-price order</p>
                <h4 className='text-[26px] font-medium mb-[44px]'>Explore the categories</h4>
                <Button>Subscribe</Button>
              </div>
            </div>
          </section>

          <section className='flex justify-around items-start mt-[190px]'>
            <div className='flex items-start'>
              <div className='relative flex justify-center gap-5'>
                <Link to='#' className='transition-all duration-300 hover:opacity-50'>
                  <img className='' src={ImageInstagram1} alt={'ImageInstagram1'} />
                  <p className='font-medium text-[26px] absolute top-[50%] uppercase'>Instagram</p>
                </Link>
                <Link to='#' className='transition-all duration-300 hover:opacity-50'>
                  <img src={ImageInstagram2} alt={'Image Instagram2'} />
                  <p className=''>Instagram</p>
                </Link>
              </div>
            </div>

            <div className=''>
              <img className='' src={ImageSubs2} alt={'Subs Image 2'} />
            </div>
          </section>
        </main>

        <Footer />
      </Container>
    </>
  )
}

export default App