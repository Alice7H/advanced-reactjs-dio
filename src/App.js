import React, { useState, useEffect } from 'react';
import Twitter from './components/Twitter';

function App(props) {
  const [loading, setLoading] = useState(false);
  const [actived, setActived] = useState(true);

  const posts = [
    {
      title: 'test',
      description: 'foo'
    },
    {
      title: 'test2',
      description: 'foo2'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000)
  }, [])

  const onRemove = () => setActived(false);

  return (
    <>
      <button type="button" onClick={onRemove}>Remove componente</button>
      {
        actived && <Twitter posts={posts} loading={loading} />
      }
    </>
  );
}

export default App;