import { Row, Col } from "antd";
import Link from 'next/link'
import { CodeOutlined } from "@ant-design/icons";

export default function Footer(){
    return(
        <Row
        align='middle'
        style={{
          height: 50,
          textAlign: 'right',
        }}
      >
        <Col span={24}>
          <p>
            CopyRight. 20230515 PKS All rights reserved.
          </p>
        </Col>
      </Row>    
    )
}