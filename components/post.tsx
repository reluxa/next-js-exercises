import Image from 'next/image'

async function getText(paragraph: string) {
    const res = await fetch('https://baconipsum.com/api/?type=all-meat&paras='+paragraph+'&start-with-lorem=1')
    return res.json();
}

function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomImageURL() {
    //return "http://placekitten.com/300/300?image=1";
    return "http://placekitten.com/300/300?image=" + getRandomInt(1, 12);
}

interface PostProps {
    paragraphs: string
}

async function getTitle() {
    const title = await getText("5")
    const sentence = title[0].substring(getRandomInt(0, 40), getRandomInt(50, 80))
    const modStr = sentence[0].toUpperCase() + sentence.slice(1);
    return modStr;
}


function MyImage() {
    return (
        <div className="rounded-2xl overflow-hidden drop-shadow-2xl">
            <Image src={getRandomImageURL()} height="0" width="0" sizes="60vw" style={{width:"100%",height:"100%"}} alt="" className="hover:scale-110 duration-300 object-cover" /> 
        </div>
    )
}

export default async function Post(props:PostProps) {
    const data = await getText(props.paragraphs);
    const title = await getTitle();
    return (
        <>
        <div>
            <div className='font-extrabold text-3xl text-center py-6'>{title}</div>
            {data.map((paragraph:String, index:number) => 
                <div key={index} className='py-1 text-justify'>{paragraph}</div>    
            )}
            <div className='flex pt-6 pb-6 gap-6'>
                <MyImage/>
                <MyImage/>
                <MyImage/>
                <MyImage/>
            </div>
        </div>
        <div>2024.01.01</div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </>

    )
}