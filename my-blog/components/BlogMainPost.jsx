import { Card, Row, Col } from "antd";
import Link from 'next/link'
import dayjs from 'dayjs'

export default function BlogMainPost({slug, thumbnail, title, subtitle, author, createdAt}){
    return(
        <Row
            align='middle'
            style={{
            height: 'auto',
            textAlign: 'center',
            }}
        >
            <Col span={24}>
                <Link legacyBehavior href={`post/${slug}`}>
                    <a>
                        <Card style={{border: 'none'}} cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl}/>}>
                            <h1>
                                {title}
                            </h1>
                            <h3>
                                {subtitle}
                            </h3>
                            <h4>
                                {author.name} . {dayjs(createdAt).format('MMMM D')}
                            </h4>
                        </Card>
                    </a>
                </Link>
            </Col>
        </Row>    
    )
}