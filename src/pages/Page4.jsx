import { useNavigate } from 'react-router-dom';

function Page4() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="https://i.imgur.com/D0A3PWl.png" alt="心臟衰竭飲食原則" />
      </div>
      <h2>心臟衰竭飲食原則</h2>
      <p><strong>鹽分控制：</strong> 每日不超過 3 公克，少加工食品，使用天然香料。</p>
      <p><strong>水分控制：</strong> 每日 1.5-2 公升，監控體重變化。</p>
      <p><strong>其他建議：</strong> 維持理想體重，避免高油脂食物，均衡攝取蛋白質和維生素。</p>
      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page4;
