import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import PageContainer from "../../UI/PageContainer";

const Layout = () => {
  return (
    <>
      {/* // Container: page background + dark class */}
      <PageContainer>
        <Nav />
        {/* Content Container */}
        <div className="container mx-auto px-8 pb-16">
          <Outlet />
        </div>
      </PageContainer>
    </>
  );
};

export default Layout;
