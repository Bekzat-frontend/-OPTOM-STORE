import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import CategoryPage from "../pages/CategoryPage";
import ProfilePage from "../pages/ProfilePage";
import CheckAuth from "../config/CheckAuth";
import { Suspense } from "react";
import Loading from "../ui/Loading";

const MainRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/?" element={<MainPage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route
            path="profile"
            element={<CheckAuth component={<ProfilePage />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'}/>}/>
      </Routes>
    </Suspense>
  );
};
export default MainRoute;
