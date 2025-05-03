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

      <p>透過良好的生活管理，心臟衰竭的患者依然可以維持良好的生活品質：</p>

      <ul>
        <li><strong>▸ 晨間良好開始</strong><br />
          起床後的體重量測是重要的健康檢查。<br />
          如同刷牙一樣，讓它成為每天的習慣。<br />
          記錄下來，觀察變化：三天內增加1.5公斤要注意！
        </li>
        <li><strong>▸ 聰明安排一天的活動</strong><br />
          把活動分散在一天當中。<br />
          感到疲累時，立即休息是智慧的選擇。<br />
          午休OK，但別超過一小時。<br />
          選擇適合的運動，例如散步，讓心臟保持活力。
        </li>
      </ul>

      <p><strong>生活中的小智慧</strong></p>

      <p>🌟 <strong>居家環境布置：</strong> "我把家裡重新整理過，減少了不必要的傢俱，讓活動空間更寬敞。現在走動比較不會喘了。"</p>

      <ul>
        <li>保持通風</li>
        <li>溫度適中</li>
        <li>減少障礙物</li>
      </ul>

      <p>🌟 <strong>飲食的聰明選擇：</strong> "以前最愛重鹹重味，現在學會品嚐食物本身的美味。"</p>

      <ul>
        <li>選擇新鮮食材</li>
        <li>以香料取代鹽分</li>
        <li>少量多餐的飲食方式</li>
      </ul>

      <p><strong>您不需要的：</strong> ❌ 熬夜 ❌ 抽菸喝酒 ❌ 太重的工作負擔 ❌ 過度擔憂</p>
      <p><strong>您需要的：</strong> ✅ 規律作息 ✅ 適度運動 ✅ 均衡飲食 ✅ 樂觀態度</p>

      <p><strong>警訊辨識：您需要立即就醫的情況</strong></p>
      <ul>
        <li>🚨 呼吸變得特別困難</li>
        <li>🚨 心跳不規則增加</li>
        <li>🚨 疲倦感明顯加重</li>
        <li>🚨 腳部水腫加劇</li>
      </ul>

      <p>
        家屬的支持與陪伴，是病友最重要的力量。一起參與生活管理，但不要太過緊張，讓照護成為生活中自然的一部分。
      </p>

      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page1;
