import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
`;

const Link = styled.a`
  display: flex;
`;

function OptusLogo() {
  const imageData =
    'iVBORw0KGgoAAAANSUhEUgAAAFIAAAAQCAMAAACyYtjOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAIlUExURUdwTP/MCP/EE/3MCvzLCvzMCf3LCf/UAPzMCf3LCvzMCv/GAP/MC/+qAPzMCfzMCvzMCfzLCf/MAPzMCvzLCP/aAPzMCf3LCf3MCf3MCf3LCf/NB/zLCvzLCv/MDPzKCv3MCf3LCf3MCf3LCfzLCvzMCvzMCv+/APzMC//MAP3MCf/PCfzLCv//AP3MCvzLCv3MCfzLCf3LCv3MCfzMCfzNC/zMCf/KDf/NCv3LCv3MCfvMC//KCfzLCv3MCf/IEvzMCfvMCfzMCv/KCPzLCf/NCf/MCPzMCfvNCvzLCvzLCf/JBv/NDPzLCfvKCvzLCv/SD//QAPzMCf3MCfzLCf3LCfzMCv3MCvzMCf3LCfzMCv+/AP3MCv3MCfvNCfzLCv3LCf3LCfzMC/3MCvzMCvvNCfzMCv/HC//NCfzMCf3MCv3MCf/MDPzMCvzMCvzMCv/NCPzLCv/MCf3MCfzLCvzMC//OBvzLCfzMCv3LCfzMCfzMCv/MCf3MCfzMCf3MCf/PD/zLCf/ICfvLC/3LCv3LCf3LCv/JDfzMCvvKCfzLCvzMCfzMCvzLCv/QC/zKCP3MCvzLCvvMCv3MCvzLCf/MEf/KCv3LCvzLCvzMCf/ODPzLCfzNCP3LCfzLCv3LCfzMCvzLCv/MCP3MCfzMCvzLCv3LCv3LCvzMCf3MCv/NC/3LCfvKC//LCPzNCv/UAPzMCv3MCv/MCv//APzLCv3MCv3MCgrKcHsAAAC2dFJOUwA8DY3l7LwG8q1kCS0D6Nnx7gX2cgfmuKC7niT+9ChdiIu+gPj63QhzCrob/QGXY5zvqInUXNcnM7K5QTXztQ7OUHkd1ho900j50SYpZ0nfEQvngmij+47Nt8MEpr9SwpqzW694TfwXNM+shxRg9ck5xje2x1olceGKVWU4tNiMENUcRZCBlRN1U9rw4uQWWJZ8TKrQDzGPXu0VbVeFdqTcex6b48yZlGunLr1EO2EMxJgyAsGxabSrJQAAAm5JREFUOMuFlHdbE0EQxscA5iIhiaaLRCASkhBCiApYkC4qvYNUwd5777333nvvZT+fM3PFyxPyOP/szLszv9u92V0ANN+ZfItUuuLsMmAr7ltlQpswvXtfhKHxB4dsE39GIGvIYonP4MyD1ozqw+yVxJ9LkqV/7Os3Dg8I1bxNFBu1WNifAvwUevsNgzTc4UoPekEcm29r86WfMV6oK7CZCZmuU4LwMQG5En5lCCEZGJmGwjSA4xm6hC8AMV7NkP90GTnTDTIyEo+O9Twgpb34w/dPA29oLuwdHh2HwiRkLQ4Fse5xx9tOEQNYT2W76ijBQe4xGTmHhKL9KNzn4rvoueVfHUpCLsDBw0JHqxNgJobz5FzIRV9yMnL5VRLmonCDpxajF5azMpOQR3AIPGoyKhgrhrMVvzAHg6XyKrml9HkHT01Bb2oqpEP+iy537k1SiWJWkLCb+YQsWJRdXkGLFDv/j8ys1ppTXwNQqUdu05BCzFI7PBnS1sFuHqqHSIraNega3vh8deNbtY2r1rguCRm6JESOk91NqLaw9/Bx17PGXqooS9UeXqV9w+osSEIOduJkNrtuZT1KVhEd/bXcSrGkgZR95KaB8i/3mn2bQTMdEvKpgtq3hwp8ANfanryUryWdXvkUicoef189H/Uq0HV8cuQWSrTm+fna9QOcswnRO/CipOVVBIWNmBFOupAuPJcNqZGwQ1dRAVCjv7CRbLVvyrNRrj0bdYnIUyidUIMqr1rgasXQEGzTCEe3yynNXcP0uF1XH7fo5SumUCLyZH56oPZfeMFzUZJc7vPtcpg1cm/0tSQFbnVjo/4CTeCNf9E/EbQAAAAASUVORK5CYII=';

  return (
    <Wrapper>
      <Link href="/">
        <img src={`data:image/png;base64,${imageData}`} alt="Optus Logo" />
      </Link>
    </Wrapper>
  );
}

export default OptusLogo;
