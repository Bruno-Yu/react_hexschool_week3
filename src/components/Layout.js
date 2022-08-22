import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (<>
    <div className="header">
      <nav>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to='faq'>問與答</Link>
        </li>
        <li>
          <Link to="tour">旅遊資訊</Link>
        </li>
      </nav>
    </div>
    <div>
      {/* outlet 放內部，可以透過Route路由改變內部分頁元件 */}
      <Outlet />
    </div>
    <div className="footer">表尾</div>
  </>);
}
