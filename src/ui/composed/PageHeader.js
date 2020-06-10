import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { Wrapper, Title, Link } from 'ui';
import {CopyToClipboard} from 'react-copy-to-clipboard';


// class Key extends React.Component {
//   state = {
//     value: 'iuwyuiyqiuehfreq847832y5r2i3hfkj2nei2fudy23b8bryh23ithiu',
//     copied: false,
//   };

//   render() {
//     return (
//       <div>
//         <Input value={this.state.value} onChange={({target: {value}}) => this.setState({value, copied: false})} />

//         <CopyToClipboard text={this.state.value} onCopy={() => this.setState({copied: true})}>
//           <Button style={{ position: 'center' }}>Copy</Button>
//         </CopyToClipboard>

//         {this.state.copied ? <span style={{color: 'green'}}>Copied.</span> : null}
//       </div>
//     );
//   }
// }

const HeaderWrapper = styled.div`
  background-color: #fff;
  padding: 0 24px;
  margin-bottom: 10px;
`;

function PageHeader({ headerData }) {
  return (
    <HeaderWrapper>
      <Wrapper flex align='center' justify='space-between' py='1rem'>
        <Title h4>{headerData.title}</Title>
        <Wrapper flex>
          {_.map(headerData.buttons, (btn, i) => {
            return btn.method ? (
              <Wrapper key={i}>
                {typeof btn.method === 'function' && (
                  <Button
                    size='large'
                    ml={1}
                    type='primary'
                    ghost
                    onClick={btn.method}
                  >
                    {btn.label}
                  </Button>
                )}
              </Wrapper>
            ) : (
              <Link to={btn.link} ml={1} key={i}>
                <Button type='primary' ghost>
                  {btn.label}
                </Button>
              </Link>
            );
          })}
        </Wrapper>
      </Wrapper>
      {/* <Key/> */}
    </HeaderWrapper>
  );
}
export default PageHeader;
