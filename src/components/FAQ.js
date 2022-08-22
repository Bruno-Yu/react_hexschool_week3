import { useNavigate } from "react-router-dom";

export function FAQ() {
  // 使用js就使用useNavigate，範例navigate('路徑'); 
  let navigate = useNavigate();
  return (<>
    <main>
      <h2>這14問與答頁面? </h2>
      <button type="button" onClick={() => {
        navigate('/');
      }}>回到首頁</button>
    </main>
  </>);
}
