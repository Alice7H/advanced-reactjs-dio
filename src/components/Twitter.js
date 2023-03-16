import React, { useEffect, useState, memo } from 'react';

// shouldComponentUpdate inverted
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
}

function Twitter(props) {
  const { posts, loading } = props;
  const [tweet, setTweet] = useState('title');

  useEffect(() => {
    console.log('componentDidMount: ', posts);
    console.log('componentDidMount: ', loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate: ', loading);
  }, [loading]);

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: foi removido');
    }
  }, []);

  const handleTweet = () => {
    setTweet('Tweet atualizado');
  }

  console.log('Tweet atualizado: ', tweet);

  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      teste
    </div>
  );
}

export default memo(Twitter, areEqual);