import Image from 'next/image'
import Week from './components/week'
import Header from './components/header'
import NewActivityModal from './components/newActivityModal'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Header></Header>
      <div className='content'>
        <Week></Week>
        <div className='absolute bottom-8'>
          <NewActivityModal></NewActivityModal>
        </div>
      </div>
    </main>
  )
}
