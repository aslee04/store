import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Container from './components/Container'
import styles from './components/main.module.css'
import Button from './components/Button'
import classNames from 'classnames'
// import SliderSlick from './components/SliderSlick'

const App = () => {
  return (
    <Fragment>
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

          <section className=''>
            {/* <SliderSlick /> */}
          </section>
        </main>

        <Outlet />

        <footer></footer>
      </Container>
    </Fragment>
  )
}

export default App