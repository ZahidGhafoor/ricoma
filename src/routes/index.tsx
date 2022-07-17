import AddCoupon from "pages/AddCoupon";
import CampaignUpdate from "pages/CampaignsManagement/CampaignUpdate";
import CoupanManagement from "pages/CampaignsManagement/CampaignUpdate/CoupanManagement";
import { lazy } from "react";

const Login = lazy(() => import("pages/Login"));
const Dashboard = lazy(() => import("pages/Dashboard"));

const AddCity = lazy(() => import("pages/AddCity"));
const AddStore = lazy(() => import("pages/AddStore"));
const AddProduct = lazy(() => import("pages/AddProduct"));
const AddCampaign = lazy(() => import("pages/AddCampaign"));
const AddCategory = lazy(() => import("pages/AddCategory"));
const AddFaqItems = lazy(() => import("pages/AddFaqItems"));
const AddSubCategory = lazy(() => import("pages/AddSubCategory"));
const AddAccountMang = lazy(() => import("pages/AddAccountMang"));
const AddHomePageBanner = lazy(() => import("pages/AddHomePageBanner"));
const AddZipCode = lazy(() => import("pages/AddZipCodeMang/AddZipCode"));

const RoleManagement = lazy(() => import("pages/RoleManagement"));
const AddRole = lazy(() => import("pages/AddRole"));
const PointUsage = lazy(() => import("pages/PointUsage"));

const Orders = lazy(() => import("pages/Orders"));
const OrderDetails = lazy(() => import("pages/OrderDetails"));
const FaqItems = lazy(() => import("pages/FaqItems"));
const TaxReport = lazy(() => import("pages/TaxReport"));
const ActiveOrders = lazy(() => import("pages/ActiveOrders"));
const FailedOrders = lazy(() => import("pages/FailedOrders"));
const StoreZipCodes = lazy(() => import("pages/StoreZipCodes"));
const CityManagement = lazy(() => import("pages/CityManagement"));
const HomePageBanner = lazy(() => import("pages/HomePageBanner"));
const StoreManagement = lazy(() => import("pages/StoreManagement"));
const AccountMostOrder = lazy(() => import("pages/AccountMostOrder"));
const ZipCodeManagement = lazy(() => import("pages/ZipCodeManagement"));
const ProductManagement = lazy(() => import("pages/ProductManagement"));
const AccountManagement = lazy(() => import("pages/AccountManagement"));
const CategoryManagement = lazy(() => import("pages/CategoryManagement"));
const CampaignsManagement = lazy(() => import("pages/CampaignsManagement"));
const SendPushNotification = lazy(() => import("pages/SendPushNotification"));
const SubCategoryManagement = lazy(() => import("pages/SubCategoryManagement"));
const ProductUpdate = lazy(
  () => import("pages/ProductManagement/ProductUpdate")
);

const AccountReferralSetting = lazy(
  () => import("pages/AccountReferralSetting")
);
const ZipcodeRequestManagement = lazy(
  () => import("pages/ZipcodeRequestManagement")
);

export { default } from "./AppRoutes";

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const public_routes: IRoute[] = [{ path: "/", element: <Login /> }];

export const private_routes: IRoute[] = [
  { path: "/dashboard", element: <Dashboard /> },

  { path: "/city-management", element: <CityManagement /> },
  { path: "/add-city", element: <AddCity /> },
  { path: "/update-city/:id", element: <AddCity /> },

  { path: "/zip-code-management", element: <ZipCodeManagement /> },
  { path: "/add-zipCode", element: <AddZipCode /> },
  { path: "/update-zipcode/:id", element: <AddZipCode /> },
  { path: "/home-page-banner", element: <HomePageBanner /> },
  { path: "/add-homepagebanner", element: <AddHomePageBanner /> },
  { path: "/update-homepagebanner/:id", element: <AddHomePageBanner /> },
  { path: "/faq-items", element: <FaqItems /> },
  { path: "/add-faqItems", element: <AddFaqItems /> },
  { path: "/update-faq/:id", element: <AddFaqItems /> },

  { path: "/role-management", element: <RoleManagement /> },
  { path: "/add-newRole", element: <AddRole /> },
  { path: "/update-role/:id", element: <AddRole /> },
  { path: "/account-management", element: <AccountManagement /> },
  { path: "/add-newAccount", element: <AddAccountMang /> },
  { path: "/update-Account/:id", element: <AddAccountMang /> },
  { path: "/points", element: <PointUsage /> },
  { path: "/accounts-with-most-orders", element: <AccountMostOrder /> },
  { path: "/send-push-notification", element: <SendPushNotification /> },
  { path: "/zipcode-requests", element: <ZipcodeRequestManagement /> },

  { path: "/product-management", element: <ProductManagement /> },
  { path: "/add-product", element: <AddProduct /> },
  { path: "/update-product/:id", element: <ProductUpdate /> },

  { path: "/category-management", element: <CategoryManagement /> },
  { path: "/add-category", element: <AddCategory /> },
  { path: "/update-category/:id", element: <AddCategory /> },

  { path: "/subcategory-management", element: <SubCategoryManagement /> },
  { path: "/add-subcategory", element: <AddSubCategory /> },
  { path: "/update-subcategory/:id", element: <AddSubCategory /> },

  { path: "/store-management", element: <StoreManagement /> },
  { path: "/add-store", element: <AddStore /> },
  { path: "/update-store/:id", element: <AddStore /> },

  { path: "/store-zipcodes", element: <StoreZipCodes /> },
  { path: "/campaigns", element: <CampaignsManagement /> },
  { path: "/add-campaign", element: <AddCampaign /> },
  { path: "/update-campaign/:id", element: <CampaignUpdate /> },

  { path: "/active-orders", element: <ActiveOrders /> },
  { path: "/orders", element: <Orders /> },
  { path: "/orders-details", element: <OrderDetails /> },
  { path: "/failed-orders", element: <FailedOrders /> },
  { path: "/tax-report", element: <TaxReport /> },
  { path: "/account-referral-settings", element: <AccountReferralSetting /> },

  { path: "/coupon", element: <CoupanManagement /> },
  { path: "/add-coupon", element: <AddCoupon /> },
];
