import { useNavigate } from 'react-router-dom';

function Page5() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="https://i.imgur.com/iN5w2zX.png" alt="心臟衰竭常見藥物" />
      </div>

      <h2>心臟衰竭常見藥物</h2>

      <p>
        藥物治療是心臟衰竭重要的治療方式之一。
        適當的藥物治療不僅可以改善症狀，還可以預防疾病惡化並延長壽命。
        常見的心衰竭用藥包含幾大類：腎素-血管張力素抑制劑、乙型阻斷劑、利尿劑和醛固酮受體拮抗劑等。
      </p>

      <h3>腎素-血管張力素抑制劑（ACEI / ARB / ARNI）</h3>
      <p>
        ACE抑制劑或ARB可以減輕心臟的負擔，改善心臟功能。
        透過阻斷血管收縮來降低血壓，減輕心臟負擔。
        常見副作用為乾咳（約10-20%病人）。
        如無法耐受ACEI，可改用ARB。
      </p>
      <p>
        最新一代的ARNI（Sacubitril/Valsartan）結合ARB的血管擴張效果和抑制Neprilysin的功能，
        不只能降血壓，還能減少心臟負擔。
        研究顯示，ARNI能更有效降低死亡率和住院率，目前主要使用在嚴重心臟衰竭的病患。
      </p>

      <h3>乙型阻斷劑（Beta blocker）</h3>
      <p>
        如 Carvedilol、Bisoprolol，主要是降低心跳速率，減少心臟耗氧量，使心臟運作更有效率。
        剛開始服用時可能感到疲倦或頭暈，但通常會隨時間改善。
        切勿自行停藥，突然停藥可能導致症狀惡化。
      </p>

      <h3>醛固酮受體拮抗劑</h3>
      <p>
        包括 Spironolactone 和 Eplerenone，預防心臟纖維化，改善心臟功能。
        需定期檢查血鉀和腎功能。
        若出現噁心、肌肉痙攣應告知醫師。
      </p>

      <h3>SGLT2 抑制劑</h3>
      <p>
        如 Dapagliflozin 或 Empagliflozin，原為糖尿病藥物，後證實具有心臟保護作用。
        可改善心臟功能，同時對糖尿病及腎功能也有好處。
        使用時注意補充水分，預防泌尿道感染。
      </p>

      <h3>利尿劑</h3>
      <p>
        幫助排出多餘水分，減輕水腫和呼吸困難的症狀。
        服用時應監測體重變化，若短期內體重快速上升或下降應告知醫師。
      </p>

      <h3>重要提醒事項：</h3>
      <ul>
        <li>按時服藥，不要擅自減藥或停藥；藥物調整需與主治醫師討論</li>
        <li>定期測量血壓和心跳，記錄每日體重變化</li>
        <li>留意可能的副作用，如頭暈、咳嗽、疲倦等</li>
        <li>若出現嚴重副作用要立即就醫</li>
        <li>定期回診追蹤，讓醫師評估藥物效果</li>
        <li>避免服用會影響心臟的藥物（如某些止痛藥）</li>
        <li>配合低鹽飲食和規律運動等生活習慣調整</li>
        <li>保持良好的睡眠品質，避免情緒壓力</li>
      </ul>

      <button onClick={() => navigate('/')}>返回</button>
    </div>
  );
}

export default Page5;
