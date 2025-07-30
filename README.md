# 🛒 Ecommerce ESEN

**Proyecto de Negocios Digitales y Sistemas de la Información**  
Ingeniería de Software y Negocios Digitales - CICLO II 2025

---

## 📋 Información del Proyecto

- **Materia:** Negocios Digitales y Sistemas de la Información
- **Actividad:** Desarrollo de un Sistema de Información E-Commerce ESEN
- **Estudiante:** Diego Morales
- **ID:** 20235780

---

## 🎯 Objetivo General

Desarrollar una plataforma E-Commerce completa utilizando Next.js, TypeScript, PostgreSQL y Prisma, siguiendo el tutorial de **Brad Traversy** para recrear un sistema de comercio electrónico que permita:

- Visualizar los componentes de metodología de comercio digital
- Identificar los componentes de la cadena de valor en escenarios de negocio
- Implementar funcionalidades completas de una tienda en línea

---

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 14+ con TypeScript
- **Base de Datos:** PostgreSQL
- **ORM:** Prisma
- **Autenticación:** NextAuth.js
- **Estilos:** Tailwind CSS
- **Componentes UI:** shadcn/ui
- **Pagos:** Stripe (+ PayPal opcional)
- **Deploy:** Vercel

---

## 📚 Recurso Principal

**Tutorial:** [Next.js Ecommerce - Build a Shopping Platform From Scratch](https://learning.oreilly.com/videos/-/9781837021895/)
- **Autor:** Brad Traversy
- **Duración:** 22 horas
- **Capítulos:** 17 (se desarrollan 13 principales + 1 opcional)

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- npm o yarn
- PostgreSQL
- Git

### Configuración Inicial

1. **Clonar el repositorio:**
   ```bash
   git clone [url-del-repositorio]
   cd ecommerce-esen
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env.local
   ```
   
   Completar las siguientes variables:
   ```env
   DATABASE_URL="postgresql://..."
   NEXTAUTH_SECRET="tu-secret-aqui"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

4. **Configurar la base de datos:**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

6. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

---

## 📂 Estructura del Proyecto

```
ecommerce-esen/
├── app/                    # App Router de Next.js
│   ├── (auth)/            # Grupo de rutas de autenticación
│   ├── (root)/            # Grupo de rutas principales
│   ├── admin/             # Panel de administración
│   ├── api/               # API Routes
│   └── user/              # Perfil de usuario
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── shared/           # Componentes compartidos
│   └── admin/            # Componentes específicos del admin
├── lib/                  # Utilidades y configuraciones
│   ├── actions/          # Server Actions
│   ├── constants/        # Constantes
│   └── utils.ts         # Funciones utilitarias
├── prisma/              # Esquema y migraciones de base de datos
├── public/              # Archivos estáticos
└── types/               # Definiciones de TypeScript
```

---

## ✅ Funcionalidades Implementadas

### 🏠 Frontend Principal
- [x] **Layout Básico** - Diseño responsive con header y footer
- [x] **Catálogo de Productos** - Grid de productos con filtros
- [x] **Detalle de Producto** - Página individual con imágenes y specs
- [x] **Carrito de Compras** - Agregar/quitar productos, actualizar cantidades
- [x] **Búsqueda y Filtros** - Buscar por nombre, categoría, precio

### 🔐 Autenticación y Usuario
- [x] **NextAuth.js** - Login/registro con múltiples proveedores
- [x] **Perfil de Usuario** - Gestión de información personal
- [x] **Historial de Compras** - Visualización de órdenes anteriores

### 🛒 Proceso de Compra
- [x] **Carrito Persistente** - Mantiene productos entre sesiones
- [x] **Checkout** - Formulario de dirección de envío
- [x] **Métodos de Pago** - Integración con Stripe
- [x] **Confirmación de Orden** - Página de éxito y detalles

### 👨‍💼 Panel de Administración
- [x] **Dashboard** - Métricas y estadísticas de ventas
- [x] **Gestión de Productos** - CRUD completo de productos
- [x] **Gestión de Órdenes** - Visualización y actualización de estados
- [x] **Gestión de Usuarios** - Administración de cuentas de usuario
- [x] **Carga de Imágenes** - Upload y gestión de imágenes de productos

### ⭐ Funcionalidades Adicionales
- [x] **Sistema de Reseñas** - Calificaciones y comentarios de productos
- [x] **Carrusel de Productos** - Destacados en página principal
- [x] **Responsive Design** - Optimizado para móviles y tablets

---

## 📊 Evaluación del Proyecto

| Capítulo | Funcionalidad | Peso | Estado |
|----------|--------------|------|---------|
| 2 | Creación de App NEXT.js y Layout Básico | 10% | ✅ |
| 3 | Base de Datos, Prisma y Muestra de Productos | 10% | ✅ |
| 4 | Autenticación con NextAuth | 10% | ✅ |
| 5 | Carrito de Compras / Add To Cart | 10% | ✅ |
| 6 | Carrito de Compras y Páginas de Embarque | 10% | ✅ |
| 8 | Métodos de Pago y Órdenes | 5% | ✅ |
| 9 | Historial de Compra y Perfil de Usuario | 5% | ✅ |
| 10 | Perfil de Administrador y Órdenes | 5% | ✅ |
| 11 | Administración de Productos y Carga de Imágenes | 10% | ✅ |
| 12 | Usuario Administrador y Herramienta de Búsqueda | 5% | ✅ |
| 13 | Filtros de Búsqueda, Desplazadores y Carrusel | 5% | ✅ |
| 14 | Rating y Opiniones | 10% | ✅ |
| 17 | Componente del Home Page y Cierre | 5% | ✅ |
| **7** | **PayPal como método de pago (Opcional)** | **+1 punto** | 🔄 |

**Total:** 100% + Bonus

---

## 🌐 Demo en Vivo

**URL de la aplicación:** [https://tu-ecommerce-esen.vercel.app](https://tu-ecommerce-esen.vercel.app)

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar en producción
npm run lint         # Linter de código

# Base de datos
npx prisma generate  # Generar cliente de Prisma
npx prisma db push   # Aplicar cambios a la BD
npx prisma studio    # Interfaz visual de la BD
npx prisma db seed   # Sembrar datos de prueba
```

---

## 🐛 Solución de Problemas Comunes

### Error de PowerShell en Windows
Si aparece el error de políticas de ejecución:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Error de Base de Datos
```bash
# Resetear la base de datos
npx prisma db push --force-reset
npx prisma db seed
```

### Error de Dependencias
```bash
# Limpiar cache e instalar
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Documentación de Stripe](https://stripe.com/docs)
- [Canal de YouTube de Brad Traversy](https://www.youtube.com/@TraversyMedia)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

## 📝 Licencia

Este proyecto es desarrollado con fines educativos para la materia de Negocios Digitales y Sistemas de la Información de ESEN.

---

## 🙏 Agradecimientos

- **Brad Traversy** por el excelente tutorial
- **ESEN** por proporcionar la plataforma educativa
- **O'Reilly** por el acceso a los recursos de aprendizaje
