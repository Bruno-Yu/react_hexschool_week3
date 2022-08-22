import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function TourDetail() {
  const { Id } = useParams();
  // 從這邊抽取對應的路由id
  const [data, setData] = useState({});
  const { Name, Toldescribe, Picture1 } = data;
  useEffect(() => {
    axios.get('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(res => {
        const newData = res.data.data.XML_Head.Infos.Info.filter(item => item.Id === Id);
        setData(newData[0]);
      });
    // eslint-disable-next-line 
  }, []);
  const navigate = useNavigate();
  return (<>
    <main>
      <h2>{Name}</h2>
      <button type="button" onClick={() => {
        navigate('/tour');
      }}>回列表</button>
      <br />
      <img src={Picture1} alt={Name} />
      <p>{Toldescribe}</p>
    </main>

  </>);
}
