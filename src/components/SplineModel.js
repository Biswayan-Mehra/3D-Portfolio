import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineModel = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {loading && (
        <div className="loading">Loading 3D Model...</div>
      )}
      <Spline
        scene={process.env.REACT_APP_SPLINE_URL}
        onLoad={() => setLoading(false)}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default SplineModel;