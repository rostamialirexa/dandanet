import Head from "next/head";
const Meta = ({title,description}) => {
    return (
          <Head>
            <title>دندانت | {title}</title>
            <meta name='robots' content='index,follow'/>
            <meta name='language' content='FA'/>
            <meta charset='UTF-8'/>
            <meta name="description" content={description} key="desc" />
            <meta name="next-head-count" content="2"/>
            <meta name="viewport" content="width=device-width"/>          
          </Head>
      );
}
Meta.defaultProps = {
    title:'فروشگاه اینترنتی لوازم و تجهیزات دندانپزشکی',
    description:'دندانت، فروشگاه تجهیزات دندانپزشکی، آماده فروش ابزار دندانپزشکی با ضمانت اصالت کالاست. برای مشاهده قیمت ها و خرید کالاهای دندانپزشکی وارد شوید',
}
export default Meta;



