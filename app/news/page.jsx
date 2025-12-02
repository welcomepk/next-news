
import Link from 'next/link'
import { DUMMY_NEWS } from '@/dummy-news'
import Image from 'next/image'

function NewsPage() {
    return (
        <div>
            <ul className='news-list'>
                {
                    DUMMY_NEWS.map((news) => (
                        <li key={news.id}>
                            <Link href={`/news/${news.slug}`} >
                                <img src={`/images/news/${news.image}`} fill alt={news.title} />
                                <span>{news.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NewsPage