import { Card, Row, Col } from "antd";
import Link from 'next/link'
import dayjs from 'dayjs'

export default function BlogList({posts}){
    return <>
    <Row align="middle"
    style={{
        height: 100,
    }}>
        <Col span={24}>
            <h1 style={{
                fontSize: 30,
                fontWeight: 'bold',
            }}>
                Latest Posts
            </h1>

        </Col>
    </Row>
    <Row gutter={16}
    align="top"
    style={{
        height: 'auto'
    }}>
        {posts.map(post => {return(
            <Col span={6}>
                <Link legacyBehavior href={`/post/${posts.slug}`}>
                    <a>
                        <Card style={{
                            width: '100%',
                            border: 'none',
                            marginBottom:30,
                        }}
                        cover={<img alt={post.thumbnail.alt} src={post.thumbnail.imageUrl}/>}>
                            <h3>
                                {post.title}
                            </h3>
                            <h4>
                                {post.author.name} . {dayjs(post.createdAt).format('MMMM D')}
                            </h4>

                        </Card>
                    </a>
                </Link>
            </Col>
        )})}
    </Row>
    </>
}