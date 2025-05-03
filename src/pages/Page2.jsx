import { useNavigate } from 'react-router-dom';

function Page2() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="https://i.imgur.com/CIiOviK.png" alt="心臟衰竭症狀" />
      </div>
      <h2>什麼是心臟衰竭？</h2>
      <p>心臟衰竭不是停止運作，而是泵血功能變差，導致循環不足。</p>
      <p><strong>我該注意哪些症狀？</strong></p>
      <ul>
        <li>呼吸困難（活動、平躺、夜間、乾咳）</li>
        <li>疲倦、活力減退</li>
        <li>腳踝或小腿浮腫、腹部脹大、體重快速增加</li>
        <li>心跳忽快忽慢、注意力難集中</li>
      </ul>
      <p><strong>症狀分級：</strong> NYHA I ~ IV 級，第四級最嚴重。</p>
      <p><strong>何時就醫：</strong> 症狀出現、逐漸惡化、體重短期快速增加。</p>
      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page2;
