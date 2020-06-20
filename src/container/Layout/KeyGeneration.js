import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getKey, createKey } from 'store/auth';
import { PageHeader, Wrapper, Button, Text } from 'ui';
import { Input } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import _ from 'lodash';

function KeyGeneration() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    dispatch(getKey());
  }, [dispatch]);

  const { accessKey } = useSelector((state) => state.key);
  useEffect(() => {
    setValue(accessKey);
  }, [accessKey]);

  const handleKeyGenerate = () => {
    dispatch(createKey());
  };

  const headerData = {
    title: 'User Access Key',
    buttons: [
      {
        label: 'Generate New Key',
        method: handleKeyGenerate,
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper>
        <Input value={accessKey} onChange={() => setCopied(true)} />
        <Wrapper flex justify='center' align='center' mt={2}>
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <Button>Copy</Button>
          </CopyToClipboard>

          {copied ? (
            <Text color='green' ml={1} mbnone={true}>
              Copied.
            </Text>
          ) : null}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default KeyGeneration;
