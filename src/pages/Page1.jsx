import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="https://i.imgur.com/ydrr4PT.png" alt="心臟衰竭定義" />
      </div>
      <h2>與心衰共處</h2>
      <p>
        王先生因為活動越來越喘，連日常工作都有困難，到了門診尋求幫助時因為呼吸困難，被轉至急診住院。經過診治後，醫師告訴王先生有心臟衰竭。王先生其實很害怕自己的生活會受到很大限制，但在住院中經過醫療團隊的衛教，藥物也穩定使用後出院；在出院後居家這段時間的調適，王先生發現只要做好日常管理，其實還是可以過著相當正常的生活，也漸漸回復過往的工作。
      </p>
      <p>透過良好的生活管理，心臟衰竭的患者依然可以維持良好的生活品質。</p>
      <p>● 晨間良好開始：起床後量體重，記錄變化，三天內增加1.5公斤要注意。</p>
      <p>● 聰明安排一天的活動：分散活動，累了就休息，選擇適合的運動。</p>
      <p>● 居家環境：保持通風、溫度適中、減少障礙物。</p>
      <p>● 飲食選擇：減鹽，品嚐食物本味。</p>
      <p>● 您不需要的：熬夜、抽菸喝酒、重工作負擔、過度擔憂。</p>
      <p>● 您需要的：規律作息、適度運動、均衡飲食、樂觀態度。</p>
      <p>● 警訊辨識：呼吸困難、心跳不規則、疲倦加劇、腳部水腫。</p>
      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page1;
