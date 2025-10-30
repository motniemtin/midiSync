import { Helmet, HelmetProvider } from 'react-helmet-async';

type Props = {
  seo: {
    title: string;
    description: string;
    keywords: string;
    thumb: string;
  };
  children: JSX.Element | JSX.Element[];
};

const PageContainer = ({ seo, children }: Props) => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{seo.title}</title>
          {/* Description & Keywords */}
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />

          {/* Open Graph */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.thumb} />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
        </Helmet>
        {children}
      </div>
    </HelmetProvider>
  );
}

export default PageContainer;
