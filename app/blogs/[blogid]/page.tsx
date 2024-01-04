import Post from "../../../components/post"

interface BlogProps {
    blogid: string
}

export default function Blogs({ params }: { params: BlogProps }) {
    return (
        <div className='flex'>
            <div className='w-1/5' />
            <div className='w-3/5 mx-3 px-3 justify-center items-center'>
                <Post paragraphs={params.blogid} />
            </div>
            <div className='w-1/5' />
        </div>
    )
}