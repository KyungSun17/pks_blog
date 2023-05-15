import { Row, Col } from "antd";

export default function BlogHeadline(){
    return(
        <Row
            align='middle'
            style={{
            height: 400,
            textAlign: 'center',
            }}
        >
            <Col span={24}>
                <h1 style={{
                    fontSize: 70,
                    fontWeight: 'bold',
                }}>Park's Blog</h1>
                <p style={{
                    fontSize: 24,
                }}>In this blog, we will build a simple web application using sanity.io to store data.<br/>
                Then, we will upload the photos to the database and retrieve them using GROQ.<br/>
                Functionality such as uploading, deleting, and downloading uploaded images can be integrated into the website.</p>
            </Col>
        </Row>    
    )
}