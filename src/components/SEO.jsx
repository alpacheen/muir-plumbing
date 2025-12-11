import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Muir Plumbing - Professional Plumbing Services",
  description = "Trusted plumbing services, licensed plumber, affordable rates. Call (07) 1234 5678",
  keywords = "plumber, emergency plumber, plumbing services, residential plumbing, commercial plumbing",
  canonical = window.location.href,
}) => {
    return (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonical} />

    {/*Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />

    {/*Business Schema */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: "Muir Plumbing",
        description:
          "Professional plubming services in Gold Coast and surrounding areas",
        email: "info@muirplumbing.com.au",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gold Coast",
          addressRegion: "Queensland",
          addressCountry: "AU",
        },
        areaServed: ["Gold Coast", "Brisbane", "Sunshine Coast"],
        openingHours: "Mo-Su 00:00-23-59",
        priceRange: "$$",
      })}
    </script>
  </Helmet>
    );
};

export default SEO