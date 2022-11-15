import { useEffect, useState } from "react";
import HomeCategoryProducts from "../Components/CategoryProducts.jsx/HomeCategoryProducts";
import FirstDoubleBanner from "../Components/Banner/FirstDoubleBanner";
import SecondDoubleBanner from "../Components/Banner/SecondDoubleBanner";
import UltraBanner from "../Components/Banner/UltraBanner";
import SpecialOffer from "../Components/SpecialOffer/SpecialOffer";
import HomeSlider from "../Components/SwiperSlider/HomeSlider";
import LoadingHomePage from "../Components/Loading/LoadingHomePage";
import Newest from "../Components/Carousels/Newest";
import Bestselling from "../Components/Carousels/Bestselling";
import MostVisited from "../Components/Carousels/MostVisited";
import ThirdDoubleBanner from "../Components/Banner/ThirdDoubleBanner";
import Brands from "../Components/Carousels/Brands";



export default function Home () {
  const [IsLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    setInterval(() => {
      setIsLoading(false)
    }, 1000);
  })
const HomeSliderImages = [
  {
    id:1,
  image:'/images/Slider.jpg',
  alt:'slider'
},
{
  id:2,
  image:'/images/Slider.jpg',
  alt:'slider'
},
{
  id:3,
  image:'/images/Slider.jpg',
  alt:'slider'
},
{
  id:4,
  image:'/images/Slider.jpg',
  alt:'slider'
},
{
  id:5,
  image:'/images/Slider.jpg',
  alt:'slider'
},
]
const HomeCategoryProductsImages = [
  {
    id:1,
    image:'/CategoryProducts/Prosthesisproducts.png',
    alt:'محصولات پروتز',
    title:'محصولات پروتز'
  },
  {
    id:2,
    image:'/CategoryProducts/ProductsAnodontics.png',
    alt:'محصولات انودانتیکس',
    title:'محصولات انودانتیکس'
  },
  {
    id:3,
    image:'/CategoryProducts/Festival.png',
    alt:'جشنواره',
    title:'جشنواره'
  },
  {
    id:4,
    image:'/CategoryProducts/TypesOfDentalTools.png',
    alt:'انواع ابزار دندانپزشکی',
    title:'انواع ابزار دندانپزشکی'
  },
  {
    id:5,
    image:'/CategoryProducts/ProductsChildern.png',
    alt:'محصولات اطفال',
    title:'محصولات اطفال'
  },
  {
    id:6,
    image:'/CategoryProducts/RepairAndBeautyProducts.png',
    alt:'محصولات ترمیمی و زیبایی',
    title:'محصولات ترمیمی و زیبایی'
  },
  {
    id:7,
    image:'/CategoryProducts/Laboratoryproducts.png',
    alt:'محصولات لابراتوری',
    title:'محصولات لابراتوری'
  },
  {
    id:8,
    image:'/CategoryProducts/EquipmentAndDevice.png',
    alt:'تجهیزات و دستگاه',
    title:'تجهیزات و دستگاه'
  },
  {
    id:9,
    image:'/CategoryProducts/TypesOfDentalMilling.png',
    alt:'انواع فرز دندانپزشکی',
    title:'انواع فرز دندانپزشکی'
  },
  {
    id:10,
    image:'/CategoryProducts/SurgicalAndPerioProducts.png',
    alt:'محصولات جراحی و پریو',
    title:'محصولات جراحی و پریو'
  },
  {
    id:11,
    image:'/CategoryProducts/ProductsGeneral.png',
    alt:'محصولات عمومی',
    title:'محصولات عمومی'
  },
]
const FirstDoubleBannerData = [
  {
    id:'1',
    image:'/BannerHomePage/Slider.jpg',
    alt:'DoubleBanner'
},
{
  id:'2',
  image:'/BannerHomePage/Slider.jpg',
  alt:'DoubleBanner'
}
]
const SecondDoubleBannerData=[
  {
    id:'1',
    image:'/BannerHomePage/Slider.jpg',
    alt:'DoubleBanner'
},
{
  id:'2',
  image:'/BannerHomePage/Slider.jpg',
  alt:'DoubleBanner'
}
]
const UltraBannerData=[
  {
    id:'1',
    image:'/BannerHomePage/Slider.jpg',
    alt:'UltraBanner'
},
{
  id:'2',
  image:'/BannerHomePage/Slider.jpg',
  alt:'UltraBanner'
},
{
  id:'3',
  image:'/BannerHomePage/Slider.jpg',
  alt:'UltraBanner'
},
{
id:'4',
image:'/BannerHomePage/Slider.jpg',
alt:'UltraBanner'
}
]
const ThirdDoubleBannerData = [
  {
    id:'1',
    image:'/BannerHomePage/Slider.jpg',
    alt:'DoubleBanner'
},
{
  id:'2',
  image:'/BannerHomePage/Slider.jpg',
  alt:'DoubleBanner'
}
]
  return (
    <>
        {
          IsLoading ? 
              (
            <LoadingHomePage/>
              ) 
              : 
              (
                    <>
                    <HomeSlider HSI={HomeSliderImages}/>
                    <HomeCategoryProducts HCPI={HomeCategoryProductsImages}/>
                    <SpecialOffer/>
                    <FirstDoubleBanner FirstDoubleBannerData={FirstDoubleBannerData}/>
                    <Newest/>
                    <UltraBanner UltraBannerData={UltraBannerData}/>
                    <Bestselling/>
                    <SecondDoubleBanner SecondDoubleBannerData={SecondDoubleBannerData}/>
                    <MostVisited/>
                    <ThirdDoubleBanner ThirdDoubleBannerData={ThirdDoubleBannerData}/>
                    <Brands/>
                    </>
                )
          }
        
    </>
  );
};