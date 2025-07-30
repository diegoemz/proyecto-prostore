import { Suspense } from 'react';
import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ViewAllProductsButton from '@/components/view-all-products-button';
import IconBoxes from '@/components/icon-boxes';
import DealCountdown from '@/components/deal-countdown';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Package, TrendingDown, Clock, Percent } from 'lucide-react';

// Loading components
const CarouselSkeleton = () => (
  <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse rounded-lg" />
);

const ProductListSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <Card key={i} className="overflow-hidden">
        <Skeleton className="h-48 w-full" />
        <div className="p-4 space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-6 w-1/3" />
        </div>
      </Card>
    ))}
  </div>
);

// Section wrapper component
const Section = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <section className={`py-8 md:py-12 ${className}`}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

// Hero section component
const HeroSection = ({ featuredProducts }: { featuredProducts: any[] }) => (
  <Section className="py-0">
    <div className="relative">
      {featuredProducts.length > 0 ? (
        <Suspense fallback={<CarouselSkeleton />}>
          <ProductCarousel data={featuredProducts} />
        </Suspense>
      ) : (
        <div className="h-[400px] md:h-[500px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bienvenido a Nuestra Tienda
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Descubre productos increíbles a precios únicos
            </p>
          </div>
        </div>
      )}
    </div>
  </Section>
);

// Latest products section
const LatestProductsSection = ({ latestProducts }: { latestProducts: any[] }) => (
  <Section className="bg-gray-50/50">
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          <TrendingUp className="w-3 h-3 mr-1" />
          Nuevo
        </Badge>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Últimos Lanzamientos
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Descubre los productos más recientes que hemos añadido a nuestra colección. 
        Siempre actualizando con las últimas tendencias.
      </p>
    </div>

    <Suspense fallback={<ProductListSkeleton />}>
      <ProductList 
        data={latestProducts} 
        title="" 
        limit={4}
      />
    </Suspense>

    <div className="text-center mt-8">
      <ViewAllProductsButton />
    </div>
  </Section>
);

// Deals section
const DealsSection = () => (
  <Section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-xl" />
    </div>

    <div className="relative z-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Badge 
            variant="destructive" 
            className="animate-pulse bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold"
          >
            ¡OFERTAS CANDENTES!
          </Badge>
          <Badge 
            variant="secondary" 
            className="bg-orange-100 text-orange-800 px-3 py-2"
          >
            <Percent className="w-3 h-3 mr-1" />
            Hasta 70% OFF
          </Badge>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          ¡OFERTAS EXPLOSIVAS!
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 font-medium">
          Descuentos increíbles por tiempo limitado. 
          <span className="text-red-600 font-bold"> ¡No dejes pasar esta oportunidad única!</span>
        </p>

        {/* Key selling points */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-500" />
            <span>Tiempo limitado</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-green-500" />
            <span>Precios más bajos del año</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>Productos top rated</span>
          </div>
        </div>
      </div>

      {/* Main countdown area */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 border-red-200 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">

            <Suspense fallback={
              <div className="space-y-6">
                <div className="flex justify-center gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center">
                      <Skeleton className="h-16 w-16 rounded-lg mb-2" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  ))}
                </div>
                <Skeleton className="h-12 w-48 mx-auto rounded-full" />
              </div>
            }>
              <DealCountdown />
            </Suspense>

        
          </CardContent>
        </Card>
      </div>

      {/* Additional incentives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
        <Card className="bg-white/60 backdrop-blur-sm border border-red-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Descuentos Exclusivos</h4>
            <p className="text-sm text-gray-600">Hasta 70% de descuento en productos seleccionados</p>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border border-orange-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Tiempo Limitado</h4>
            <p className="text-sm text-gray-600">Aprovecha antes de que las ofertas expiren</p>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border border-yellow-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-yellow-600 fill-current" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Productos Premium</h4>
            <p className="text-sm text-gray-600">Solo los mejores productos en oferta</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </Section>
);

// Services section
const ServicesSection = () => (
  <Section>
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Badge variant="outline">
          <Package className="w-3 h-3 mr-1" />
          Servicios
        </Badge>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        ¿Por Qué Elegirnos?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Ofrecemos la mejor experiencia de compra con servicios que marcan la diferencia.
      </p>
    </div>

    <Suspense fallback={
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>
    }>
      <IconBoxes />
    </Suspense>
  </Section>
);

const Homepage = async () => {
  // Fetch data in parallel for better performance
  const [latestProducts, featuredProducts] = await Promise.all([
    getLatestProducts(),
    getFeaturedProducts(),
  ]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection featuredProducts={featuredProducts} />

      {/* Latest Products */}
      <LatestProductsSection latestProducts={latestProducts} />

      {/* Deals Section */}
      <DealsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Trust indicators or additional content could go here */}
      <Section className="bg-gray-900 text-white">
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.8/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">1000+ Productos</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">50K+ Clientes</span>
            </div>
          </div>
          <p className="text-gray-300">
            Únete a miles de clientes satisfechos que confían en nosotros
          </p>
        </div>
      </Section>
    </main>
  );
};

export default Homepage;