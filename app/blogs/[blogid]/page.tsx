import Post from "../../../components/post"
import Link from "next/link"

interface BlogProps {
    blogid: string
}

export default function Blogs({ params }: { params: BlogProps }) {
    return (
        <div>
            <div className='flex'>
                <div className='w-1/5' />
                <div className='w-3/5 mx-3 px-3 justify-center items-center'>
                    <Post paragraphs={params.blogid} />
                </div>
                <div className='w-1/5' />
            </div>
            
            <div className='flex ' >
                <div className='w-1/5 ' />
                <div className='flex w-3/5 mx-3 px-3 justify-between'>
                    <Link href={"/blogs/" + (parseInt(params.blogid, 10)-1)}>Previous</Link>
                    <Link href={"/blogs/" + (parseInt(params.blogid, 10)+1)}>Next</Link>
                </div>
                <div className='w-1/5' />
            </div>

        </div>
    )
}