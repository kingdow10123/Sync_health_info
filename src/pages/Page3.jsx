import { useNavigate } from 'react-router-dom';

function Page3() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="https://i.imgur.com/v2VKMHG.png" alt="心臟衰竭運動指南" />
      </div>
      <h2>心臟衰竭運動指南</h2>
      <p>適當的運動安全且可改善心臟功能、減緩症狀。</p>
      <p><strong>建議運動：</strong> 散步、腳踏車、游泳、輕阻力訓練、呼吸訓練。</p>
      <p><strong>強度：</strong> 能正常說話的強度，心跳達最大心跳率 60-70%。</p>
      <p><strong>時間與頻率：</strong> 每次 30-40 分鐘，每週 3-5 天。</p>
      <p><strong>注意事項：</strong> 暖身、循序漸進、出現不適立即停止。</p>
      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page3;
