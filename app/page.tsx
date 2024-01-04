
import Post from '../components/post'

export default async function Home() {
  return (
    <div className='flex'>
      <div className='w-1/5' />
      <div className='w-3/5 mx-3 px-3 justify-center items-center'>
        <Post paragraphs='3'/>
        <Post paragraphs='2'/>
        <Post paragraphs='5'/>
      </div>
      <div className='w-1/5' />
    </div>
  )
}
