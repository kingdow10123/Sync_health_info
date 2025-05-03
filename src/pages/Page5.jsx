import { useNavigate } from 'react-router-dom';

function Page5() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="https://i.imgur.com/iN5w2zX.png" alt="心臟衰竭常見藥物" />
      </div>
      <h2>心臟衰竭常見藥物</h2>
      <p><strong>主要藥物：</strong> ACEI/ARB/ARNI、乙型阻斷劑、醛固酮受體拮抗劑、SGLT2 抑制劑、利尿劑。</p>
      <p><strong>注意事項：</strong> 按時服藥，監測副作用，不自行停藥。</p>
      <p><strong>定期回診：</strong> 評估藥物效果，調整治療。</p>
      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page5;
