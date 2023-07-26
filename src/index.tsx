import { useState } from 'react';
import './index.css';

import { ReactWidgetProps } from './types';

const defaultProps = {
  name: 'World',
  color: 'rgba(255, 255, 255, 0.87)',
  backgroundColor: '#242424',
  maxWidth: '320px',
};

function ReactWidget({ config }: ReactWidgetProps) {
  const userConfig = { ...defaultProps, ...config };
  const [count, setCount] = useState(0);

  return (
    <section
      style={{
        color: userConfig.color,
        backgroundColor: userConfig.backgroundColor,
        padding: '2rem 4rem',
        textAlign: 'center',
        maxWidth: userConfig.maxWidth,
      }}
    >
      <h1>Hello {userConfig.name}</h1>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </section>
  );
}

export default ReactWidget;
