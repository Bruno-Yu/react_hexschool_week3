import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function TourList() {
  // 需用到useEffect 當生命週期，載第一次的資料
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
      .then(res => {
        console.log(res);
        const newData = res.data.data.XML_Head.Infos.Info;
        setData(newData);
      });
  }, []);
  return (<>
    <main>
      <h2>這頁4旅遊詳細列表</h2>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.Id}> <Link to={`/tour/${item.Id}`}>{item.Name}</Link> </li>
          );
        })}
      </ul>
    </main>

  </>);
}
